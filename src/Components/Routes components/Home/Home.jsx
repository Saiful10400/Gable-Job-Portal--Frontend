import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Milestone from "./Milestone";
import Mobile from "./Mobile";
import ReactTab from "./Tab";


 
const Home = () => {
    return (
        <div>
            <Helmet>
           
           <title>Gable | Home</title>
            
         </Helmet>
            <Banner></Banner>
             <ReactTab></ReactTab>
             <Milestone></Milestone>
             <Mobile></Mobile>
            
        </div>
    );
};

export default Home;