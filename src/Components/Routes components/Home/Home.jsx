import Banner from "./Banner";
import Navbar from "./NavBar";

 
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="h-screen"></div>
        </div>
    );
};

export default Home;