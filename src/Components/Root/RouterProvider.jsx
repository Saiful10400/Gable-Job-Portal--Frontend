import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes components/home/Home";
import Root from "./Root";
import Login from "../Routes components/Login/Login";
import Register from "../Routes components/Login/Register";
import Addjob from "../Routes components/Add a job/Addjob";
import Myjobs from "../Routes components/My jobs/Myjobs";
import UpdateOne from "../Routes components/My jobs/UpdateOne";
import Alljobs from "../Routes components/All jobs/Alljobs";
import Job from "../Routes components/All jobs/Job";
import AppliedJob from "../Routes components/Applied jobs/AppliedJob";
import Blog from "../Routes components/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Error from './Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/All_Jobs",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Applied_Jobs",
        element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
      },
      {
        path: "/Add_A_Job",
        element: <PrivateRoute><Addjob></Addjob></PrivateRoute>,
      },
      {
        path: "/My_Jobs",
        element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/updateOne/:id",
        element:<UpdateOne></UpdateOne>,
        loader:({params})=>fetch(`https://assingment11.vercel.app/updateOne/${params.id}`)
      }
      ,
      {
        path:"/job/:id",
        element:<PrivateRoute><Job></Job></PrivateRoute>,
        loader:({params})=>fetch(`https://assingment11.vercel.app/updateOne/${params.id}`)
      }
       
    ],
  },
]);
export default router;
