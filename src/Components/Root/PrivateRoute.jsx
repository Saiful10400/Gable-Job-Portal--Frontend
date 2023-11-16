import { useContext } from "react";
import { parentProvider } from "../Context Api/DataProvider";
import { Navigate, useLocation, } from "react-router-dom";
import Loading from "./Loading";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(parentProvider)
    const location=useLocation()
    
  


    if(user){
        return children
    }
    else if(loading){
        return <Loading></Loading>
    }
    return <Navigate state={location.pathname} to="/Login" />

};

export default PrivateRoute;