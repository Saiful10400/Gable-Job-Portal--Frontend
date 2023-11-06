import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes components/home/Home";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    }
])
export default router