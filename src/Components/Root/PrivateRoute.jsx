import { useContext } from "react";
import { parentProvider } from "../Context Api/DataProvider";
import { Navigate, } from "react-router-dom";
import Loading from "./Loading";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(parentProvider)
  


    if(user){
        return children
    }
    else if(loading){
        return <Loading></Loading>
    }
    return <Navigate to="/Login" />

};

export default PrivateRoute;