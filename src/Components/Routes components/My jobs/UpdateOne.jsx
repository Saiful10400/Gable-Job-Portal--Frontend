import axios from 'axios';
import { useContext, useState } from 'react';
 
import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { parentProvider } from '../../Context Api/DataProvider';

const UpdateOne = () => {
    const[startDate,setStartDate]=useState(new Date())
    const {user}=useContext(parentProvider)
    const nevigation=useNavigate()

    const {url,title,_id,userName,company,catagory,salaryRange,jobDetails,jobPost,applicant}=useLoaderData()
    console.log({url,title,userName,company,catagory,salaryRange,jobDetails,jobPost,applicant})
  

    const formHandle=(e)=>{
        e.preventDefault()
        const form=e.target
         const url=form.jobBanner.value
         const title=form.jobTitle.value
         const userName=form.userName.value
         const catagory=form.jobCategory.value
         const minSalary=form.salaryRange.value
         const maxSalary=form.salaryRange2.value
         const jobDetails=form.jobDescription.value
         const jobPost=form.jobPostingDate.value
         const applicant=form.applicant.value
         const Deadline=startDate.toLocaleDateString("en-IN")
         const salaryRange=minSalary+"-"+maxSalary
         const company=form.company.value
         const id=_id
        
         axios.patch("https://assingment11.vercel.app/Update_my_jobs",{url,id,company,title,userName,catagory,salaryRange,jobDetails,jobPost,applicant,Deadline})
         .then(()=>{
            swal("Successfully you updated.","","success")
            nevigation(-1)
            
         })
         .catch(err=>console.log(err))
         
         
         
    }
 



    return (
        <div className=' lg:w-[1400px] mx-auto'>
            <h1 className='lg:text-4xl text-center lg:my-5 font-bold'>Update Job</h1>
                      <form onSubmit={formHandle} className='shadow-xl px-4 lg:px-6'>
            <div className="mb-4">
                <label htmlFor="jobBanner" className="block text-gray-600 text-sm lg:text-xl">Picture URL of the Job Banner</label>
                <input defaultValue={url} required type="text" id="jobBanner" name="jobBanner" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="company" className="block text-gray-600 text-sm lg:text-xl">Company logo URL</label>
                <input defaultValue={company} required type="text" id="company" name="company" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-600 text-sm lg:text-xl">Job Title</label>
                <input defaultValue={title} required type="text" id="jobTitle" name="jobTitle" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-600 text-sm lg:text-xl">Logged In User Name</label>
                <input defaultValue={user.displayName} required type="text" id="userName" name="userName" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobCategory" className="block text-gray-600 text-sm lg:text-xl">Job Category</label>
                <select id="jobCategory" defaultValue={catagory} name="jobCategory" className="w-full p-2 border rounded">
                   
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="salaryRange" className="block text-gray-600 text-sm lg:text-xl">Salary Range</label>
                <div className="flex items-center justify-between gap-10">
                <input defaultValue={salaryRange.split("-")[0]} required placeholder="Min salary" type="number"   name="salaryRange" className="w-full p-2 border rounded" />
                <span className="text-sm lg:text-lg">To</span>
                <input defaultValue={salaryRange.split("-")[1]} required placeholder="Max salary" type="number" id="salaryRange2" name="salaryRange2" className="w-full p-2 border rounded" />
                
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="jobDescription" className="block text-gray-600 text-sm lg:text-xl">Job Description</label>
                <textarea defaultValue={jobDetails} required id="jobDescription" name="jobDescription" className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label  htmlFor="jobPostingDate" className="block text-gray-600 text-sm lg:text-xl">Job Posting Date</label>
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
                <button type="submit" className="btn btn-success text-white w-full lg:text-xl">Update</button>
                <Link to={-1}><button  className="btn bg-warning mt-4 text-white w-full lg:text-xl">Cancel</button></Link>
            </div>
        </form>
        </div>
    );
};

export default UpdateOne;