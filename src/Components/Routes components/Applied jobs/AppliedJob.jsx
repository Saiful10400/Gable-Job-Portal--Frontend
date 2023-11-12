import { useContext, useEffect, useState } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";
import AppliedCard from "./AppliedCard";
import { Helmet } from "react-helmet";
import TableData from "../My jobs/TableData";
import AppliedJobCard2 from "./AppliedJobCard2";


const AppliedJob = () => {
    const {user}=useContext(parentProvider)
    const[item,setData]=useState([])
    const [root,setRoot]=useState([])
    useEffect(()=>{
        axios.get(`https://assingment11.vercel.app/get_to_job?email=${user.email}`,{name:"saiful"})
        .then(res=>{
            setData(res.data)
            setRoot(res.data)
        })
    },[user])
   

    // filter handle.

    const filterHandle=(e)=>{
       const value =e.target.value

       if(value=== "All"){
        setData(root)
       }
       else{

        const remaining=root.filter(item=>item.data.catagory===value)
       setData(remaining)
       }

       
    }
    return (
        <div className="w-[1400px] mx-auto min-h-[65vh]">
            <Helmet>
           
           <title>Gable | Applied job</title>
            
         </Helmet>

         <div className="flex justify-center items-center gap-4 font-bold my-6" >
                    <h1 className="text-2xl ">Filter:</h1>
                    
                    <select onChange={filterHandle} id="jobCategory" name="jobCategory" className="w-2/12 p-2 border rounded">
                    <option disabled selected>Select one</option>
                    <option value="On Site">On Site</option>
                    <option value="All">All</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                        
                    
                </div>
            <div className={`${item.length<1 ? "block": "hidden"} text-center font-bold text-xl mt-8 min-h-[55vh] flex justify-center items-center`}> Yor do not applied yet.</div>

            <div className={`${item.length<1 ? "hidden" : "block"}`}>
                
            <div className={` overflow-x-auto`}>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-2xl">
                <th></th>
                <th>Title</th>
                <th>Type</th>
                <th>Applicant</th>
                <th>Salary range</th>
              </tr>
            </thead>
            <tbody>


              {
                item.map((item,idx)=><AppliedJobCard2 idx={idx} item={item} key={item._id}></AppliedJobCard2>)
              }


            </tbody>
          </table>
        </div>
        </div>
        </div>
    );
};

export default AppliedJob;