import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SkillDetails from "../Pages/SkillDetails";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgatePass from "../Pages/ForgatePass";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivetRoutes from "../PrivetContent/PrivetRoutes";
import ErrorPage from "../Pages/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            element: <Home/>
        },
       {
        path: '/profile',
        element: <PrivetRoutes>
          <Profile/>
        </PrivetRoutes>
       },
      {
        path: '/newsdetails/:id',
        element:<PrivetRoutes>
          <SkillDetails/>
        </PrivetRoutes>,
        loader: () => fetch('/skills.json'),
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/login',
        element: <SignIn/>
      },
      {
        path: '/forgatepass',
        element: <ForgatePass/>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile/>
      }
    ]
  },
]);
export default router