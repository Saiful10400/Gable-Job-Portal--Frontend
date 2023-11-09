import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
 

import "react-datepicker/dist/react-datepicker.css";
import useGetAxios from "../../Custom hooks/useGetAxios";
// import useGetAxios from "../../Custom hooks/useGetAxios";
 import { parentProvider } from './../../Context Api/DataProvider';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Addjob = () => {
    const[startDate,setStartDate]=useState(new Date())
    const{user}=useContext(parentProvider)
    
const navigation=useNavigate()

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
         const adminEmail=user?.email
         const company=form.company.value

         
        //  post form dat.
        axios.post("https://assingment11.vercel.app/post_a_job",{url,company,title,userName,catagory,salaryRange,jobDetails,jobPost,applicant,Deadline,adminEmail})
        .then(()=>{
            swal("Successfull !","You successfully post a job.","success")
            form.reset()
            navigation("/")
        })
        .catch(err=>console.log(err))
         
         
         
    }





    return (
        <div className="lg:w-[1400px] mx-auto px-6 pt-5">
            <Helmet>
           
           <title>Gable | Add a JOb</title>
            
         </Helmet>
          {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
          <form onSubmit={formHandle}>
            <div className="mb-4">
                <label htmlFor="jobBanner" className="block text-gray-600 text-sm lg:text-xl">Picture URL of the Job Banner</label>
                <input required type="text" id="jobBanner" name="jobBanner" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="company" className="block text-gray-600 text-sm lg:text-xl">Company logo URL</label>
                <input required type="text" id="company" name="company" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-600 text-sm lg:text-xl">Job Title</label>
                <input required type="text" id="jobTitle" name="jobTitle" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-600 text-sm lg:text-xl">Logged In User Name</label>
                <input required type="text" id="userName" name="userName" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="jobCategory" className="block text-gray-600 text-sm lg:text-xl">Job Category</label>
                <select id="jobCategory" name="jobCategory" className="w-full p-2 border rounded">
                    <option disabled selected>Select one</option>
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
                <textarea required id="jobDescription" name="jobDescription" className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="jobPostingDate" className="block text-gray-600 text-sm lg:text-xl">Job Posting Date</label>
                <input required type="date" id="jobPostingDate" name="jobPostingDate" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4 flex gap-6">
                <label   className="block text-gray-600 text-sm lg:text-xl">Application Deadline :</label>
                <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)}  />
            </div>
            <div className="mb-4">
                <label htmlFor="applicant" className="block text-gray-600 text-sm lg:text-xl">Applicant Number :</label>
                <input required type="number" id="applicant" defaultValue={0} name="applicant" className="w-full p-2 border rounded" />
            </div>
            <div className="mt-6">
                <button type="submit" className="btn btn-success text-white w-full lg:text-xl">Submit</button>
            </div>
        </form>
           
        </div>
    );
};

export default Addjob;