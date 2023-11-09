import { useContext } from "react";
import { parentProvider } from "../Context Api/DataProvider";
import { Navigate, } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user}=useContext(parentProvider)
  


    if(user){
        return children
    }
    return <Navigate to="/Login" />

};

export default PrivateRoute;