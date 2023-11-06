import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes components/home/Home";
import Root from "./Root";
import Login from "../Routes components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/All_Jobs",
        element: <h1>all jobs.</h1>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Applied_Jobs",
        element: <h1>applied jobs</h1>,
      },
      {
        path: "/Add_A_Job",
        element: <h1>Add a job</h1>,
      },
      {
        path: "/My_Jobs",
        element: <h1>my jobs</h1>,
      },
      {
        path: "/Blog",
        element: <h1>blog</h1>,
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
       
    ],
  },
]);
export default router;
