import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { useGlobal } from "../context";
import Nav from "./Nav2";
import { motion,AnimatePresence } from "framer-motion";
import Menu from "./Menu";
function Home() {
  const { setPage,isLight,setIslight,nav } = useGlobal();
  const data = localStorage.getItem('chatRoom')
  // console.log(JSON.parse(data));
  return (
    <div    
    className={` z-20 h-screen overflow-hidden  top-0 relative  w-screen  ${isLight ?  ' bg-[#F5F5F5] text-black':'text-white bg-gray-900'} flex flex-col items-center justify-start `}>
     <Nav/>
     <AnimatePresence>{nav && <Menu />}</AnimatePresence>
     <motion.main
     className=" w-screen ">
        <section className=" flex pt-10 sm:mt-10 mt-8 flex-col  justify-center items-center   h-[290px]  ">
          <h2 className="font-[600] text-[17px] " >Hello User!</h2>
          <div className="flex items-center  mt-3 px-4 text-center flex-col justify-center">
            <p>Welcome to the anon verse</p>
            <p>Don't be shy! Your thoughts matter, just good vibes!</p>
          </div>
        </section>
        <section className=" gap-2 flex flex-col  items-center justify-start mt-0 h-[300px]  ">
            New Here: 
            {/* options */}
           <div className="flex mt-2 gap-2 px-4" >
           <motion.div whileTap={{
      scale:0.8
     }}
      onClick={() =>{setPage("createRoom")}} className={`flex cursor-pointer sm:w-[300px] items-center justify-start rounded-[20px] h-[190px] w-[170px]  flex-col ${isLight ? 'bg-white border-2 ':'bg-gray-800'} hover:bg-blue-500 hover:text-white   relative font-[500] px-1 border-gray-200`}>
                 <img  className="h-[90px] mt-6 w-[90px] " src="https://cdn3d.iconscout.com/3d/premium/thumb/my-account-2870167-2386919.png?f=webp" alt="" />
                {/* <VscGitPullRequestCreate className="absolute  top-4" size={30} /> */}
                <p className="mt-6 text-[13px] sm:text-[16px] text-center font-[600] ">Create a chat-room</p>
            </motion.div>
            {/* second */}
            <motion.div 
            whileTap={{
              scale:0.8
             }}
            onClick={() =>{setPage("joinRoom")}} className={`flex cursor-pointer sm:w-[300px] items-center justify-start rounded-[20px] h-[190px] w-[170px] flex-col ${isLight ? 'bg-white border-2 ':'bg-gray-800'} hover:bg-blue-500 hover:text-white   relative font-[500] px-1 border-gray-200`}>
                {/* <MdMeetingRoom className="absolute  top-4" size={30} /> */}
                <img className="h-[90px] mt-6 w-[90px] " src="https://cdn3d.iconscout.com/3d/premium/thumb/link-6151198-5043847.png?f=webp" alt="" />
                <p className="mt-6 text-[13px] sm:text-[16px] text-center font-[600] " >Join a chat-room</p>
            </motion.div>
           </div>
        </section>
        {/* button */}
        <section  className="w-screen absolute bottom-2 sm:bottom-2 flex items-center justify-center  h-[100px]  mt-3  ">
          <motion.div 
          whileTap={{
            scale:0.6,
            transition:{
              duration:0.3
            }
          }}
          onClick={() =>{setPage("createRoom")}} className="bg-blue-500 cursor-pointer h-[60px] w-[60px] text-[30px] text-white flex items-center justify-center rounded-[50%] ">+</motion.div>
        </section>
     </motion.main>
    </div>
  );
}

export default Home;

