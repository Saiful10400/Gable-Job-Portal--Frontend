import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const TableData = ({item,idx,btn,update}) => {
  
  return (
    <tr>
      <th>{idx+=1}</th>
      <td>{item.title}</td>
      <td>{item.catagory}</td>
      <td>{item.salaryRange}</td>
      <td><button onClick={()=>update(item._id)} className="btn btn-circle btn-warning text- lg:text-xl"><CiEdit></CiEdit></button></td>
      <td><button onClick={()=>btn(item._id)} className="btn btn-circle bg-red-500 lg:text-xl"><MdDeleteForever></MdDeleteForever></button></td>
    </tr>
  );
};

export default TableData;
