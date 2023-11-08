import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
const TableData = ({item,idx,btn}) => {
  return (
    <tr className="text-lg">
      <th>{idx+=1}</th>
      <td>{item.title}</td>
      <td>{item.catagory}</td>
      <td>{item.applicant}</td>
      <td>{item.salaryRange+" ৳"}</td>
      <td>{item.Deadline}</td>
      <td><Link to={`/UpdateOne/${item._id}`}><button  className="btn btn-circle btn-warning text- lg:text-xl"><CiEdit></CiEdit></button></Link></td>
      <td> <button onClick={()=>btn(item._id)}  className="btn btn-circle bg-red-500 lg:text-xl"><MdDeleteForever></MdDeleteForever></button> </td>
    </tr>
  );
};

export default TableData;
