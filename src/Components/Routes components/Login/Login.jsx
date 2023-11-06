import { Link } from "react-router-dom";
import loginBg from "../../../../public/img/loginBg.png"
import loginsti from "../../../../public/img/loginsti.png"
 
const Login = () => {
    return (
        <div className="h-[90vh] relative">
          <img className="w-full h-60 absolute bottom-60" src={loginBg} alt="" />
          <div className="bg-white shadow-xl rounded-xl   absolute top-5 left-6 w-4/5 h-[90%] flex"> 
          
          <div className="h-full">
            <img src={loginsti} className="h-full object-contain " alt="" />
          </div>

          <div className="w-[60%] h-full py-5 pr-10">
            <h1 className="text-end">New user? <Link>Register</Link></h1>
            <h1 className="text-5xl font-bold">Welcome Back!</h1>
            <h2 className="text-xl text-gray-400 mt-4">Login to continue</h2>
            <form className="flex flex-col gap-14 mt-10">
                <input placeholder="Your E-mail" className="w-full rounded-md pl-32 text-2xl font-bold  outline outline-black focus:outline-4  focus:outline-green-500 h-[82px]" type="text" />
                <input placeholder="Your Password" className="w-full rounded-md pl-32 text-2xl font-bold outline outline-black focus:outline-4  focus:outline-green-500  h-[82px]" type="text" />
                <div className="flex gap-9">
                    <button className="btn w-[40%] text-lg h-20 rounded-full bg-[#38A745] text-white">LOGIN</button>
                    <button className="text-lg">FORGET PASSWORD?</button>
                    
                    </div>
            </form>
          </div>
          
          </div>
        </div>
    );
};

export default Login;