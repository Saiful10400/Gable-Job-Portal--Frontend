import { useContext, useEffect, useState } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";
import AppliedCard from "./AppliedCard";


const AppliedJob = () => {
    const {user}=useContext(parentProvider)
    const[item,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/get_to_job?email=${user.email}`,{name:"saiful"})
        .then(res=>setData(res.data))
    },[user])
    console.log(item)
    return (
        <div className="lg:w-[1400px] mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-5 my-5">
           {
            item.map(item=><AppliedCard key={item._id} item={item}></AppliedCard>)
           }
        </div>
    );
};

export default AppliedJob;