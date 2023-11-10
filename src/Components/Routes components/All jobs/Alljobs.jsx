import axios from "axios";
import { useEffect, useState } from "react";
import Alljob from "./Alljob";
import {Helmet} from "react-helmet";

const Alljobs = () => {
    const[data,setData]=useState([])
    const[fire,Setfire]=useState(false)

    useEffect(()=>{
        axios.get("https://assingment11.vercel.app/Get_All_Jobs")
        .then(res=>setData(res.data))
    },[fire])

    const searchHandle=(e)=>{
       const searchText=e.target.value
       if(searchText===""){
        Setfire(!fire)
       }
       else if(searchText!==""){
        const teargetedData= data.filter(item=>item.title.toUpperCase().includes(searchText.toUpperCase()))
        setData(teargetedData)
       }
       

    }


    return (
      <div className="lg:w-[1400px] mx-auto min-h-[70vh]">
        
        <Helmet>
           
          <title>Gable | All job</title>
           
        </Helmet>

        <div className="text-center my-5 hidden">
          <input
            onChange={searchHandle}
            className="w-1/3 h-14 text-xl pl-2 outline outline-2 focus:outline-black focus:outline-2 outline-black "
            type="text"
            placeholder="search name"
          />
        </div>
       
        <table className="table table-zebra hidden">
          {/* head */}
          <thead>
            <tr className="text-2xl text-center">
              <th></th>
              <th>Posted By</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th></th>
            </tr>
          </thead>
          <div
            className={`${
              data.length < 1 ? "block" : "hidden"
            } text-xl font-bold`}
          >
            NO data found
          </div>
          <tbody className={`${data.length < 1 ? "hidden" : ""}`}>
            {data.map((item, idx) => (
              <Alljob idx={idx} key={item._id} item={item}></Alljob>
            ))}
          </tbody>
        </table>
        
      </div>
    );
};

export default Alljobs;