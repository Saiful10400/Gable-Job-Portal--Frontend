import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { parentProvider } from "../../Context Api/DataProvider";


const Job = () => {
  const {user}=useContext(parentProvider)
    const data=useLoaderData()
   

    // parent button handel.

    const ParentHandle=()=>{
      
      // const lastDate=new Date(data.Deadline).getTime()
      const today=new Date().toLocaleDateString("en-IN")
      const Array=data.Deadline.split("/")
      const todayArray=today.split("/")
      const notundate=Array[1]+"/"+Array[0]+"/"+Array[2]
      const notunToday=todayArray[1]+"/"+todayArray[0]+"/"+todayArray[2]

      const date1=new Date(notunToday).getTime()
      const date2=new Date(notundate).getTime()





console.log(date1,date2)





    
  
 
      if(user.email !== data.adminEmail && date1<date2){
        document.getElementById('my_modal_3').showModal()
      }
    }
    return (
        <div>
             <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full md:max-w-2xl md:flex">
        <div className="md:w-1/2 md:pr-8">
          <img
            src={data.url} // Replace with your job banner image URL
            alt="Job Banner"
            className="w-full h-[30vh] object-contain"
          />
          <img
            src={data.company} // Replace with your company logo image URL
            alt="Company Logo"
            className="mt-4 h-[100px] w-[100px] object-contain rounded-xl mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Job Title: {data.title}</h1>
          <p className="text-gray-600 mb-2"><strong>Salary Range:</strong> {data.salaryRange.split("-")[0]+"৳"+"-"+data.salaryRange.split("-")[1]+"৳"} per month</p>
          <p className="text-gray-600 mb-2"><strong>Job Post Date:</strong> {data.jobPost}</p>
          <p className="text-gray-600 mb-2"><strong>Job Deadline:</strong> {data.Deadline}</p>
          <p className="text-gray-600 mb-2"><strong>Company:</strong> ExampleTech Inc.</p>
          <p className="text-gray-600 mb-2"><strong>Job Type:</strong> {data.catagory}</p>
          <p className="text-gray-600 mb-2"><strong>Job Description:</strong></p>
          <p className="text-gray-600">
            {data.jobDetails}
          </p>
          <p className="text-gray-600 mt-4"><strong>How to Apply:</strong></p>
          <p className="text-gray-600">
            To apply for this position, please send your resume and cover letter to {data.adminEmail} Please include "{data.title} Application" in the subject line.
          </p>
          <p className="text-gray-600 mt-4"><strong>Apply by:</strong>{new Date().toLocaleDateString()}</p>
          <button onClick={ParentHandle} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </div>





 
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form className="flex flex-col justify-center items-center gap-5 my-4">
      <input defaultValue={`${user?.displayName}`} placeholder="You name" className="w-full p-2 border rounded" type="text" />
      <input defaultValue={`${user?.email}`} placeholder="Your Email" className="w-full p-2 border rounded" type="email" />
      <input placeholder="Your Resume link." className="w-full p-2 border rounded" type="text" />
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</dialog>




        </div>
    );
};

export default Job;