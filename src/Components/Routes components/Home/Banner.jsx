import model from "../../../../public/img/model.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="bg-[#D0FED5] min-h-[300px] ">
      <div className="flex flex-col lg:flex-row justify-between lg:pt-32 items-center lg:w-[1400px] mx-auto">
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl mb-3">
         
          <span className="text-[#393838]">Search Here For </span>{" "}
          <span className="text-[#38A745]">Better </span>
          <span className="text-[#393838]">Job</span>
        </h1>
        <p className="text-[#393838] font-normal text-lg mb-16">
          Jobs, Employment & Future Career Opportunities
        </p>
        <form className="h-[70px] w-full lg:w-[700px] relative z-1  flex flex-col lg:flex-row">
            <input placeholder="Job Title" className="h-full w-full focus:outline-none text-base font-lg pl-8" type="text" />
            <input placeholder="Job Catagory" className="h-full w-full focus:outline-none text-base font-lg pl-8 border-l" type="text" />
            <button className="h-full bg-gradient-to-r from-[#38A745] from-0%  to-[#4CCE5B] to-60% lg:w-[400px] text-lg font-normal text-white">Search</button>
            <BiSearch className="text-3xl text-green-500 absolute top-[18px] left-[230px]"></BiSearch>
            <AiOutlineCheck className="text-3xl text-green-500 absolute top-[18px] right-[162px]"></AiOutlineCheck>
        </form>
      </div>
      <div>
        
        <img className="w-full" src={model} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
