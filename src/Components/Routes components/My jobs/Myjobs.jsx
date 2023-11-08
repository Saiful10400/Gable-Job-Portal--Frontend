import { useContext, useEffect, useState } from "react";
import useGetAxios from "../../Custom hooks/useGetAxios";
import TableData from "./TableData";
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";
import swal from "sweetalert";

const Myjobs = () => {
const {user}=useContext(parentProvider)
const [data,setData]=useState([])

 useEffect(()=>{
  if(user){
    axios.get(`http://localhost:5000/Get_my_jobs?email=${user?.email}`)
    .then(res=>setData(res.data))
  }
 },[user])


const deleteJobHandle = (id) => {
  swal("Do you really want to delete ?", {
    buttons: {
      cancel: "Cancel",

      catch: {
        text: "Yes",
      },
    },
  }).then((value) => {
    switch (value) {
      case "catch":
        axios
          .delete(`http://localhost:5000/Delete_my_jobs?id=${id}`)
          .then(() => {
            const remainingJob = data.filter((item) => item._id != id);
            setData(remainingJob);
          });
        break;
    }
  });
};


// update handle.
const updateHandle=(id)=>{
  console.log(id)
}




  return (
    <div className="lg:w-[1400px] mx-auto">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>


              {
                data.map((item,idx)=><TableData update={updateHandle} btn={deleteJobHandle} idx={idx} item={item} key={item._id}></TableData>)
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myjobs;
