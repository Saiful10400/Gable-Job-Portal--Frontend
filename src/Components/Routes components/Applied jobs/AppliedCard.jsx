import { NavLink } from "react-router-dom";

const AppliedCard = ({ item }) => {
  return (
    <div className="border-2 shadow-sm p-6 flex gap-1 lg:gap-4">
      <div className="w-1/5 flex justify-center items-center">
        <img
          className="w-14 h-14 object-contain"
          src={item.data.company}
          alt=""
        />
      </div>
      <div className="w-3/5">
        <h1 className="lg:text-2xl mb-6 font-bold">{item.data.title}</h1>
        <h1 className="text-sm font-bold text-gray-500">
          Salary Range :{" "}
          {item.data.salaryRange.split("-")[0] +
            "৳" +
            "-" +
            item.data.salaryRange.split("-")[1] +
            "৳"}
        </h1>
        <h1 className="mt-2">Deadline : {item.data.Deadline}</h1>
        <h1 className="text-sm font-normal mt-2 text-gray-600">
          {item.data.jobDetails}
        </h1>
      </div>
      <div className="lg:w-1/5 w-[25%] flex flex-col justify-center items-center gap-4">
        <span className="text-lg text-white font-bold bg-success p-3 rounded-lg">Applied</span>
        <span className="bg-gradient-to-r from-[#38A745] to-[#4CCE5B] text-white p-2 text-sm lg:text-base font-normal">
          {item.data.catagory}
        </span>
      </div>
    </div>
  );
};

export default AppliedCard;

{
  /*

 */
}
