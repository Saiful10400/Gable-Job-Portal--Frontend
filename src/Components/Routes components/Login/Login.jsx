import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../../../public/img/loginBg.png"
import loginsti from "../../../../public/img/loginsti.png"
// social logos.

import googleLogo from "../../../../public/img/social icon/google.png"
import facebookLogo from "../../../../public/img/social icon/facebook.png"
import XLogo from "../../../../public/img/social icon/twitter.png"
 
// another icons.
import { FaUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { useContext } from "react";
import { parentProvider } from "../../Context Api/DataProvider";
import { Helmet } from "react-helmet";


const Login = () => {
const{emailSignin,googleLogin,facebookLogin}=useContext(parentProvider)
const navigate=useNavigate()
const location=useLocation()
const formHandle=(e)=>{
  e.preventDefault()
  const form=e.target
  const email=form.email.value
  const password=form.password.value
  emailSignin(email,password)
  .then(res=>{
    console.log(res)
    navigate(location?.state ? location.state : "/")
  })
  .catch(err=>{
    console.log(err)
  })

}
// social login handel.
const googleHandle=()=>{
  googleLogin()
  .then(res=>{
    console.log(res)
    navigate(location?.state ? location.state : "/")
    
  })
  .catch(err=>{
    console.log(err)
  })

}
const facebookHandle=()=>{
  facebookLogin()
  .then(res=>{
    console.log(res)
    navigate(location?.state ? location.state : "/")
  })
  .catch(err=>{
    console.log(err)
  })

}
// const twitterHandle=()=>{
//   twitterLogin()
//   .then(res=>{
//     console.log(res)
//   })
//   .catch(err=>{
//     console.log(err)
//   })

// }
 
    return (
      <div className="h-[90vh] relative">
        <Helmet>
           
           <title>Gable | Login</title>
            
         </Helmet>
        <img className="w-full h-60 absolute bottom-60" src={loginBg} alt="" />
        <div className="bg-white shadow-xl rounded-xl   absolute lg:top-5 lg:left-6 w-full border-2 lg:w-4/5 h-[90%] flex lg:flex-row flex-col">
          <div className="h-full hidden lg:block">
            <img src={loginsti} className="h-full object-contain " alt="" />
          </div>

          <div className="lg:w-[60%] w-full h-full py-5 mt-6 lg:mt-0 px-3 lg:px-28">
            <h1 className="text-end lg:text-lg lg:mb-5 font-bold">
              New user? <Link to={"/register"} className="text-[#38A745] hover:underline">Register</Link>
            </h1>
            <h1 className="text-5xl lg:mt-0 mt-3 font-bold">Welcome Back!</h1>
            <h2 className="text-xl text-gray-400 mt-4">Login to continue</h2>
            <form onSubmit={formHandle} className="flex flex-col gap-14 mt-10">
              <div className="relative">
              <input
                placeholder="Your E-mail"
                name="email"
                className="   w-full rounded-md pl-32 text-xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[50px]"
                type="text"
              /> <FaUser className="absolute top-2  left-10 text-3xl text-[#38A745]"></FaUser>
              </div>
              <div className="relative">
              <input
                placeholder="Your Password"
                name="password"
                className="  w-full rounded-md pl-32 text-xl font-bold outline outline-black focus:outline-4  focus:outline-green-500  h-[50px]"
                type="password"
              /><BiSolidLock className="absolute top-2  left-10 text-3xl text-[#38A745]"></BiSolidLock>
              </div>
              <div className="flex gap-9">
                <button className="btn w-[40%] lg:text-lg text-base h-14 lg:h-20 rounded-full bg-[#38A745] text-white">
                  LOGIN
                </button>
                <button className="lg:text-lg">FORGET PASSWORD?</button>
              </div>
            </form>
            <div className="flex items-center gap-8 lg:gap-36 mt-20">
              <span className="lg:text-2xl text-lg  text-gray-500">Login with</span>{" "}
              <span className="flex gap-5 lg:gap-14">
                <button onClick={googleHandle}>
                  <img src={googleLogo} alt="" />
                </button>
                <button onClick={facebookHandle}>
                  <img src={facebookLogo} alt="" />
                </button>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;