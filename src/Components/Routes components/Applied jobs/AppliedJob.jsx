import { useContext, useEffect, useState } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";
import AppliedCard from "./AppliedCard";
import { Helmet } from "react-helmet";


const AppliedJob = () => {
    const {user}=useContext(parentProvider)
    const[item,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://assingment11.vercel.app/get_to_job?email=${user.email}`,{name:"saiful"})
        .then(res=>setData(res.data))
    },[user])
    console.log(item)
    return (
        <div>
            <Helmet>
           
           <title>Gable | Applied job</title>
            
         </Helmet>
            <div className={`${item.length<1 ? "block": "hidden"} text-center font-bold text-xl mt-8`}> There is no data.</div>
            <div className="lg:w-[1400px] min-h-screen mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-5 my-5">
           {
            item.map(item=><AppliedCard key={item._id} item={item}></AppliedCard>)
           }
        </div>
        </div>
    );
};

export default AppliedJob;