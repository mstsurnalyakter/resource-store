import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SingUp from "../pages/SingUp/SingUp";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/sign-in",
                element:<SignIn/>,
            },
            {
                path:"/sign-up",
                element:<SingUp/>,
            },
        ]
    }
])