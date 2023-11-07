import { Link, useLocation } from "react-router-dom";
import loginBg from "../../../../public/img/loginBg.png"
import loginsti from "../../../../public/img/loginsti.png"
// social logos.

import googleLogo from "../../../../public/img/social icon/google.png"
import facebookLogo from "../../../../public/img/social icon/facebook.png"
import XLogo from "../../../../public/img/social icon/twitter.png"
 
// another icons.
import { FaUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";


const Login = () => {
    const url=useLocation()
    console.log(url)
    return (
      <div className="h-[90vh] relative">
        <img className="w-full h-60 absolute bottom-60" src={loginBg} alt="" />
        <div className="bg-white shadow-xl rounded-xl   absolute top-5 left-6 w-4/5 h-[90%] flex">
          <div className="h-full">
            <img src={loginsti} className="h-full object-contain " alt="" />
          </div>

          <div className="w-[60%] h-full py-5 pr-10">
            <h1 className="text-end text-lg mb-5 font-bold">
              New user? <Link to={"/register"} className="text-[#38A745] hover:underline">Register</Link>
            </h1>
            <h1 className="text-5xl font-bold">Welcome Back!</h1>
            <h2 className="text-xl text-gray-400 mt-4">Login to continue</h2>
            <form className="flex flex-col gap-14 mt-10">
              <div className="relative">
              <input
                placeholder="Your E-mail"
                className="   w-full rounded-md pl-32 text-2xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[82px]"
                type="text"
              /> <FaUser className="absolute top-7  left-10 text-3xl text-[#38A745]"></FaUser>
              </div>
              <div className="relative">
              <input
                placeholder="Your Password"
                className="  w-full rounded-md pl-32 text-2xl font-bold outline outline-black focus:outline-4  focus:outline-green-500  h-[82px]"
                type="text"
              /><BiSolidLock className="absolute top-7  left-10 text-3xl text-[#38A745]"></BiSolidLock>
              </div>
              <div className="flex gap-9">
                <button className="btn w-[40%] text-lg h-20 rounded-full bg-[#38A745] text-white">
                  LOGIN
                </button>
                <button className="text-lg">FORGET PASSWORD?</button>
              </div>
            </form>
            <div className="flex items-center gap-36 mt-20">
              <span className="text-2xl  text-gray-500">Login with</span>{" "}
              <span className="flex gap-14">
                <button>
                  <img src={googleLogo} alt="" />
                </button>
                <button>
                  <img src={facebookLogo} alt="" />
                </button>
                <button>
                  <img src={XLogo} alt="" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;