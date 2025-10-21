import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SkillDetails from "../Pages/SkillDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[
        {
            index:true,
            element: <Home/>
        },
       {
        path: '/profile',
        element: <Profile/>
       },
      {
        path: '/newsdetails/:id',
        element: <SkillDetails/>,
        loader: () => fetch('/skills.json'),
        
      }
    ]
  },
]);
export default router