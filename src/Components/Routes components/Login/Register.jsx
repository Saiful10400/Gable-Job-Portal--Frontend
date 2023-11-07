import { Link } from "react-router-dom";
import registrationbg from "../../../../public/img/loginBg.png";
import registrarionimg from "../../../../public/img/registration.png";
// react icons.

import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import { useContext } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
 
 
const Register = () => {

const {name}=useContext(parentProvider)
console.log(name)

  return (
    <div className="h-[90vh] relative">
      <img src={registrationbg} className="w-full h-52 absolute bottom-44" />
      <div className="absolute top-5 right-6 w-4/5 h-[90%] bg-white rounded-xl items-center  flex">
        <div className="w-[45%] px-28 py-5">
          <h1 className="text-5xl font-bold mb-20">Rigistration</h1>
          <form className="flex flex-col gap-7">
            <div className="relative">
              <input
                required
                placeholder="Your Name"
                className="   w-full rounded-md pl-14  text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="text"
              />
              <BiUser className="absolute top-4 left-5 text-[#38A745] text-xl"></BiUser>
            </div>
            <div className="relative">
              <input
                required
                placeholder="Your E-mail"
                className="   w-full rounded-md pl-14  text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="email"
              />
              <MdEmail className="absolute top-4 left-5 text-[#38A745] text-xl"></MdEmail>
            </div>
            <div className="relative">
              <input
                required
                placeholder="New Password"
                className="   w-full rounded-md pl-14 text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="password"
              />
              <FaLock className="absolute top-4 left-5 text-[#38A745] text-xl"></FaLock>
            </div>
            <div className="relative">
              <input
                required
                placeholder="Profile photo url"
                className="   w-full rounded-md pl-14 text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="text"
              />
              <IoLinkOutline className="absolute top-4 left-5 text-[#38A745] text-xl"></IoLinkOutline>
            </div>
            <div className="text-xl">
              <input
                
                className="scale-150 accent-green-500 "
                type="checkbox"
                id="condition"
              />
              <label htmlFor="condition">
                {" "}
                I agree to the terms and conditions of{" "}
                <Link className="underline text-green-500">
                  Privacy Policy.
                </Link>
              </label>
            </div>
            <div className="flex gap-10 items-center">
              <button
                type="submit"
                className="btn w-[40%] text-lg h-20 bg-[#38A745] text-white"
              >
                Registration
              </button>
              <Link className="text-lg font-bold" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="">
          <img
            className="w-full h-full object-contain"
            src={registrarionimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
