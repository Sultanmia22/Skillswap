import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SkillDetails from "../Pages/SkillDetails";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";


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
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/login',
        element: <SignIn/>
      }
    ]
  },
]);
export default router