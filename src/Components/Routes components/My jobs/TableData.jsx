import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { useState } from "react";
const TableData = ({item,idx,btn}) => {
  const{url,title,userName,catagory,salaryRange,jobDetails,jobPost,applicant,Deadline,adminEmail}=item
  const[startDate,setStartDate]=useState(new Date())


  // form handel

  const formHandle=(e)=>{
    e.preventDefault()
  }
  
  return (
    <tr>
      <th>{idx+=1}</th>
      <td>{item.title}</td>
      <td>{item.catagory}</td>
      <td>{item.salaryRange}</td>
      <td><button onClick={()=>document.getElementById('my_modal_4').showModal()}  className="btn btn-circle btn-warning text- lg:text-xl"><CiEdit></CiEdit></button></td>
      <td><button onClick={()=>btn(item._id)} className="btn btn-circle bg-red-500 lg:text-xl"><MdDeleteForever></MdDeleteForever></button></td>



{/* You can open the modal using document.getElementById('ID').showModal() method */}
 
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg lg:text-xl text-center">Update</h3>



    <form onSubmit={formHandle} >
            <div className="mb-4">
                <label htmlFor="jobBanner" className="block text-gray-600 text-sm lg:text-xl">Picture URL of the Job Banner</label>
                <input defaultValue={url} required type="text" id="jobBanner" name="jobBanner" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-600 text-sm lg:text-xl">Job Title</label>
                <input defaultValue={title} required type="text" id="jobTitle" name="jobTitle" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-600 text-sm lg:text-xl">Logged In User Name</label>
                <input defaultValue={userName} required type="text" id="userName" name="userName" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobCategory" className="block text-gray-600 text-sm lg:text-xl">Job Category</label>
                <select defaultValue={catagory} id="jobCategory" name="jobCategory" className="w-full p-2 border rounded">
                    
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="salaryRange" className="block text-gray-600 text-sm lg:text-xl">Salary Range</label>
                <div className="flex items-center justify-between gap-10">
                <input required placeholder="Min salary" type="number"   name="salaryRange" className="w-full p-2 border rounded" />
                <span className="text-sm lg:text-lg">To</span>
                <input required placeholder="Max salary" type="number" id="salaryRange2" name="salaryRange2" className="w-full p-2 border rounded" />
                
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="jobDescription" className="block text-gray-600 text-sm lg:text-xl">Job Description</label>
                <textarea defaultValue={jobDetails} required id="jobDescription" name="jobDescription" className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="jobPostingDate" className="block text-gray-600 text-sm lg:text-xl">Job Posting Date</label>
                <input defaultValue={jobPost} required type="date" id="jobPostingDate" name="jobPostingDate" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4 flex gap-6">
                <label   className="block text-gray-600 text-sm lg:text-xl">Application Deadline :</label>
                <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="mb-4">
                <label htmlFor="applicant" className="block text-gray-600 text-sm lg:text-xl">Applicant Number :</label>
                <input required type="number" id="applicant" defaultValue={applicant} name="applicant" className="w-full p-2 border rounded" />
            </div>
            <div className="mt-6">
                <button type="submit" className="btn btn-success text-white w-full lg:text-xl">Submit</button>
            </div>
        </form>






    <div className="modal-action">




      
      <form method="dialog" className="w-full">
        {/* if there is a button, it will close the modal */}
        <button className="btn w-full">Cancel</button>
      </form>
    </div>
  </div>
</dialog>



    </tr>
  );
};

export default TableData;
