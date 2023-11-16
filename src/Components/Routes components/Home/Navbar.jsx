import { Link, NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {  useContext, useState } from "react";
import logo from "../../../../public/img/logo.png"
import { parentProvider } from "../../Context Api/DataProvider";
import axios from "axios";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [scroll,setScroll]=useState(false)
    const{user,signout}=useContext(parentProvider)
    
 
    document.addEventListener("scroll",()=>{
       
        if(window.scrollY <50){
            setScroll(false)
        }
        else if(window.scrollY>50){
            setScroll(true)
        }
    })
 

    // monsera

  let li = (
    <>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/All_Jobs"}>
        All Jobs
      </NavLink>
      <NavLink className={`${user? "" : "hidden"} monsera`} onClick={() => setMenu(false)} to={"/Applied_Jobs"}>
        Applied Jobs
      </NavLink>
      <NavLink className={`${user? "" : "hidden"} monsera`} onClick={() => setMenu(false)} to={"/Add_A_Job"}>
        Add a Job
      </NavLink>
      <NavLink className={`${user? "" : "hidden"} monsera`} onClick={() => setMenu(false)} to={"/My_Jobs"}>
        My Jobs
      </NavLink>
      <NavLink className={"/Blog"} onClick={() => setMenu(false)} to={"/Blog"}>
        Blogs
      </NavLink>
    </>
  );
  
  const[show,setShow]=useState(false)
  window.onclick=()=>{
    setShow(false)
    setnavicon(false)
  }

  const buttonHandle=(event)=>{
    setShow(!show)
    event.stopPropagation()
  }
  // logout.
  const logoutHandle=(e)=>{
    e.stopPropagation()
    signout()
    setnavicon(false)
    axios.post("https://assingment11.vercel.app/jwt_token_remove").then(res=>console.log(res.data))
  }
  const[navicon,setnavicon]=useState(false)
  return (
    <>
      <div className="sticky z-30 top-0">
        {/* sm screen slider handle */}
        <div className={`flex  justify-between lg:hidden text-2xl transition-all duration-300 ${scroll?"bg-white py-2   shadow-lg":"bg-[#D0FED5] py-2"} font-bold `}>
          <div className="flex justify-center items-center gap-4">
          <button className="text-4xl" onClick={() => setMenu(!menu)}>
            {!menu ? <AiOutlineMenu></AiOutlineMenu> : <RxCross1></RxCross1>}
          </button>
          <img className="w-12 h-12 object-contain" src={logo} alt="" />
          </div>



          


          <div className=" relative">
            
         <button className={`${user? "" : "hidden"}`} onClick={(e)=>{
          setnavicon(!navicon)
          e.stopPropagation()
         }}>
          <img className="w-12 h-12 rounded-full mr-3" src={user?.photoURL} alt="" />
         </button>
         <div className={`w-24 bg-red-500 absolute -left-[40px] rounded-md flex flex-col gap-2 ${navicon? "block" :"hidden"}`}>
          <span className="text-sm bg-green-400 p-1 rounded">{user?.displayName}</span>
          <button onClick={logoutHandle} className="btn btn-sm">Logout</button>
         </div>

         <Link className={`${user? "hidden" : ""}`} to={"/Login"}><button className="btn btn-success btn-sm">Login</button></Link>

            
          </div>



        </div>

        {/* start from md screen. */}
        <div className={`${scroll?"bg-white py-4 shadow-lg":"bg-[#D0FED5] py-5"} hidden lg:block transition-all duration-300  text-base font-medium border-b border-[#C1F5C6] text-[#333333]`}>
          <div className="flex justify-between items-center w-[1400px] mx-auto">
            <div><img className="w-16 h-12 object-contain" src={logo} alt="" /></div>
            <ul className=" text-base font-medium hidden md:flex justify-center items-center gap-6">
              {li}
            </ul>
            <div>

            <Link to={"/Login"} className={`btn bg-gradient-to-r from-[#38A745] from-0%  to-[#4CCE5B] to-60% text-base font-medium w-28 h-12 text-white ${user? "hidden" : ""}`}>Login</Link>
            <div className={`${!user? "hidden" : ""} relative`}> 


            <div className={`bg-red-500 w-36 h-20 rounded-lg items-center absolute top-[110%] -left-[80%]  justify-center ${show? "flex" : "hidden"} `}>
              <button onClick={logoutHandle} className="btn btn-sm btn-warning">Logout</button>
              </div>

              <button className="group relative" onClick={buttonHandle}>
                <img className="w-14 h-14 rounded-full object-contain" src={user?.photoURL}  />
                <span className="group-hover:inline-block hidden text-lg font-bold text-gray  absolute w-32 top-full -left-[40px]">{user?.displayName}</span>
              </button>
                
            </div>
             
              
             
              </div>
          </div>
        </div>
      </div>

      {/* handle sliding in sm screen. */}
      <div className={`${menu ? "right-[0%]" : "right-full"} transition-all duration-500 flex top-[72px] z-30  fixed`}>
        <div
          className={`  bg-white w-[60vw] h-[94vh]  `}
        >
          <ul className="flex flex-col text-start pl-6  font-bold gap-5 mt-3">
            
            {
               li 
            }
          </ul>
        </div>
        <div onClick={()=>setMenu(false)} className="w-[40vw] h-[94vh]   "></div>
        </div>
    </>
  );
};

export default Navbar;
