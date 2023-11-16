import axios from "axios";
import { useEffect, useState } from "react";
import Alljob from "./Alljob";
import { Helmet } from "react-helmet";

const Alljobs = () => {
  const [data, setData] = useState(null);
  const [fire, Setfire] = useState(false);

  useEffect(() => {
    axios
      .get("https://assingment11.vercel.app/Get_All_Jobs")
      .then((res) => setData(res.data));
  }, [fire]);

  const searchHandle = (e) => {
    const searchText = e.target.value;
    if (searchText === "") {
      Setfire(!fire);
    } else if (searchText !== "") {
      const teargetedData = data.filter((item) =>
        item.title.toUpperCase().includes(searchText.toUpperCase())
      );
      setData(teargetedData);
    }
  };

  return (
   <>
   
   <Helmet>
        <title>Gable | All job</title>
      </Helmet>

      <div className={`lg:w-[1400px] mx-auto flex justify-center items-center h-[70vh] ${data? "hidden" : "block"}`}>
        <img className="w-[10%]" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="" />
      </div>



   <div className={`lg:w-[1400px] mx-auto min-h-[70vh] ${data? "block" : "hidden"}`}>
     

      <div className="text-center my-5  ">
        <input
          onChange={searchHandle}
          className="w-1/3 h-14 text-xl pl-2 outline outline-2 focus:outline-black focus:outline-2 outline-black "
          type="text"
          placeholder="search by title."
        />
      </div>

      <div
            className={`${
              data?.length < 1 ? "block" : "hidden"
            } text-xl font-bold`}
          >
            NO data found
          </div>

      <div className="overflow-x-scroll">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-2xl text-center">
              <th></th>
              <th>Posted By</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th></th>
            </tr>
          </thead>
          
          <tbody className={`${data?.length < 1 ? "hidden" : ""}`}>
            {data?.map((item, idx) => (
              <Alljob idx={idx} key={item._id} item={item}></Alljob>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
   </>
  );
};

export default Alljobs;
