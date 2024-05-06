import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
]);


export default router;