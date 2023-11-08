
import { NavLink } from 'react-router-dom';

const Alljob = ({item,idx}) => {
    return (
        <tr className="text-lg text-center">
        <th>{idx+=1}</th>
        <td>{item.userName}</td>
        <td>{item.title}</td>
        <td>{item.jobPost}</td>
        <td >{item.Deadline.split("/")[2]+"-"+item.Deadline.split("/")[0]+"-"+item.Deadline.split("/")[1]}</td>
        <td>{item.salaryRange+" ৳"}</td>
        <td><NavLink to={`/job/${item._id}`}><button className="btn bg-green-500 text-white">Details</button></NavLink></td>
      </tr>
    );
};

export default Alljob;