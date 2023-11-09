import { Outlet } from "react-router-dom";
import Navbar from "../Routes components/home/NavBar";
import Footer from "../Routes components/footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;