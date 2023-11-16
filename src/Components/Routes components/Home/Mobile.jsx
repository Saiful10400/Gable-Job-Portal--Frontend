import img1 from "../../../../public/img/App/1.png"
import img2 from "../../../../public/img/App/2.png"
import img3 from "../../../../public/img/App/3.png"
import img4 from "../../../../public/img/App/4.png"

const Mobile = () => {
    return (
      
        <div className=" lg:w-[1400px] min-h-[200px] mx-auto py-28">
         <h1 className="text-center font-semibold text-4xl">Popular Companies</h1>
         <div>
         </div>
         <div className="flex justify-evenly items-center mt-7 flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-16 ">
                <img src={img1} alt="" />
                <h1 className="font-semibold text-lg">Infiniza.com</h1>
                <h1 className="text-sm font-normal"> North Street, California</h1>
                <span className="p-3 border font-bold shadow-lg">Hiring</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-16 ">
                <img src={img2} alt="" />
                <h1 className="font-semibold text-lg">Solaris Solutions</h1>
                <h1 className="text-sm font-normal"> Vancouver, British Columbia, Canada</h1>
                <span className="p-3 border font-bold shadow-lg">Hiring</span>
            </div>
            <div>
            <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-16 ">
                <img src={img3} alt="" />
                <h1 className="font-semibold text-lg">Quantum Innovations</h1>
                <h1 className="text-sm font-normal"> British Columbia, Canada</h1>
                <span className="p-3 border font-bold shadow-lg">Hiring</span>
            </div>
         </div>
         <div>
            <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-16 ">
                <img src={img4} alt="" />
                <h1 className="font-semibold text-lg">Data Nexus Technologies</h1>
                <h1 className="text-sm font-normal"> Delhi, india</h1>
                <span className="p-3 border font-bold shadow-lg">Hiring</span>
            </div>
         </div>
         </div>
        
        </div>

    );
};

export default Mobile;