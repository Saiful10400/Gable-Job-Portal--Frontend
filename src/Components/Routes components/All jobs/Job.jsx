import { useLoaderData } from "react-router-dom";


const Job = () => {
    const data=useLoaderData()
    console.log(data)
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
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Job;