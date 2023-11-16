import { Link, useNavigate } from "react-router-dom";
import registrationbg from "../../../../public/img/loginBg.png";
import registrarionimg from "../../../../public/img/registration.png";
// react icons.

import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Authintication/firebase.config";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

 
 
const Register = () => {
const [error,setError]=useState(null)
const navigate=useNavigate()
const{createUser,user}=useContext(parentProvider)
const formHandle=(e)=>{
  e.preventDefault()
  const form=e.target
  const name=form.name.value
  const password=form.password.value
  const email=form.email.value
  const url=form.url.value
  
  createUser(email,password)
  .then(()=>{
    updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:url
    })
    swal("Welcome","You successfully login","success")
    form.reset()
    navigate("/")

  })
  .catch(err=>{
    setError(err.message)
    console.log(err)
  })
  
}

console.log(user)

  return (
    <div className="h-[90vh] relative">
      <Helmet>
           
           <title>Gable | Register</title>
            
         </Helmet>
      <img src={registrationbg} className="w-full hidden lg:inline-block h-52 absolute bottom-44" />
      <div className="lg:absolute lg:top-5 lg:right-6 w-full lg:w-4/5 h-[90%] bg-white rounded-xl items-center shadow-xl flex lg:flex-row flex-col">
        <div className="lg:w-[45%] w-full  px-4 lg:px-28 py-5 ">
          <h1 className="lg:text-5xl text-4xl font-bold mb-20">Rigistration</h1>
          <form className="flex flex-col  gap-7" onSubmit={formHandle}>
            <div className="relative">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="   w-full rounded-md pl-14  text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="text"
              />
              <BiUser className="absolute top-4 left-5 text-[#38A745] text-xl"></BiUser>
            </div>
            <div className="relative">
              <input
                required
                name="email"
                placeholder="Your E-mail"
                className="   w-full rounded-md pl-14  text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="email"
              />
              <MdEmail className="absolute top-4 left-5 text-[#38A745] text-xl"></MdEmail>
            </div>
            <div className="relative">
              <input
                required
                name="password"
                placeholder="New Password"
                className="   w-full rounded-md pl-14 text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="password"
              />
              <FaLock className="absolute top-4 left-5 text-[#38A745] text-xl"></FaLock>
              <p className={`text-red-600 font-bold pt-4 ${error? "" : "hidden"}`}>{error}</p>
            </div>
            <div className="relative">
              <input
                required
                name="url"
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
                className="btn w-[40%] text-lg lg:h-20 h-5 bg-[#38A745] text-white"
              >
                Registration
              </button>
              <Link className="text-lg font-bold" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="lg:block hidden">
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
