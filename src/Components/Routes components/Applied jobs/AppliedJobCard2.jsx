

const AppliedJobCard2 = ({item ,idx}) => {
    console.log(item)
    return (
        <tr className="text-lg">
        <th>{idx+=1}</th>
        <td>{item.data.title}</td>
        <td>{item.data.catagory}</td>
        <td>{item.data.applicant}</td>
        <td>{item.data.salaryRange+" ৳"}</td>
      </tr>
    );
};

export default AppliedJobCard2;