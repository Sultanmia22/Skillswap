import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[
        {
            index:true,
            element: <Home/>
        }
    ]
  },
]);
export default router