import { useContext, useEffect, useState } from "react";
import TableData from "./TableData";
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const Myjobs = () => {
  const { user } = useContext(parentProvider);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://assingment11.vercel.app/Get_my_jobs?email=${user?.email}`,
          { withCredentials: true }
        )
        .then((res) => setData(res.data));
    }
  }, [user]);

  const deleteJobHandle = (id) => {
    swal("Do you really want to delete ?", {
      buttons: {
        cancel: "Cancel",

        catch: {
          text: "Yes",
        },
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          axios
            .delete(`https://assingment11.vercel.app/Delete_my_jobs?id=${id}`)
            .then(() => {
              const remainingJob = data.filter((item) => item._id != id);
              swal("Deleted Successfully","","success")
              setData(remainingJob);
            });
          break;
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Gable | My jobs</title>
      </Helmet>

      <div className={`lg:w-[1400px] mx-auto flex justify-center items-center h-[70vh] ${data? "hidden" : "block"}`}>
        <img className="w-[10%]" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="" />
      </div>

      <div className={`lg:w-[1400px] mx-auto min-h-[70vh] ${data? "block" : "hidden"}`}>
        <div>
          <h1
            className={`${
              data?.length < 1 ? "block" : "hidden"
            } text-xl mt-6 font-bold text-center`}
          >
            No data is available.
          </h1>
          <div
            className={`${
              data?.length < 1 ? "hidden" : "block"
            } overflow-x-auto`}
          >
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-2xl">
                  <th></th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Applicant</th>
                  <th>Salary range</th>
                  <th>Deadline</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, idx) => (
                  <TableData
                    btn={deleteJobHandle}
                    idx={idx}
                    item={item}
                    key={item._id}
                  ></TableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myjobs;
