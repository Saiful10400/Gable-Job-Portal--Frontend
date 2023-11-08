import axios from "axios";
import { useEffect, useState } from "react";
import Alljob from "./Alljob";


const Alljobs = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/Get_All_Jobs")
        .then(res=>setData(res.data))
    },[])


    return (
        <div className="w-[1400px] mx-auto">
                      <table className="table table-zebra">
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
            <tbody>


             {
                data.map((item,idx)=><Alljob idx={idx} key={item._id} item={item}></Alljob>)
             }


            </tbody>
          </table>
        </div>
    );
};

export default Alljobs;