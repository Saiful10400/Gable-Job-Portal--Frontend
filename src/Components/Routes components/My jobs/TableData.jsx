import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TableData = ({item,idx,btn}) => {
  const{url,title,userName,catagory,jobDetails,jobPost,applicant}=item
  const[startDate,setStartDate]=useState(new Date())
  const[reload,setReload]=useState(false)





  const formHandle=(e)=>{
    e.preventDefault()

    console.log(item)


   
  }


  
  return (
    <tr>
      <th>{idx+=1}</th>
      <td>{item.title}</td>
      <td>{item.catagory}</td>
      <td>{item._id}</td>
      <td><Link to={`/UpdateOne/${item._id}`}><button  className="btn btn-circle btn-warning text- lg:text-xl"><CiEdit></CiEdit></button></Link></td>
      <td> <button  className="btn btn-circle bg-red-500 lg:text-xl"><MdDeleteForever></MdDeleteForever></button> </td>
    </tr>
  );
};

export default TableData;
