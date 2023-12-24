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
  console.log(JSON.parse(data));
  return (
    <motion.div
    // initial={{
    //   opacity:0.3
    // }}
    // animate={{
    //   opacity:1
    // }}
    // exit={{
    //   opacity:0
    // }}
    // transition={{
    //   duration:0.6
    // }}
    className={`h-screen z-20 absolute top-0    w-screen  ${isLight ?  ' bg-[#F5F5F5] text-black':'text-white bg-gray-900'} flex flex-col items-center justify-center `}>
     <Nav/>
     <AnimatePresence>{nav && <Menu />}</AnimatePresence>
     <motion.main
     className="min-h-screen  w-screen ">
        <section className="w-screen flex pt-10 flex-col  justify-center items-center   h-[290px]  ">
          <h2 className="font-[600] text-[17px] " >Hello User!</h2>
          <div className="flex items-center  mt-3 px-4 text-center flex-col justify-center">
            <p>Welcome to the anon verse</p>
            <p>Don't be shy! Your thoughts matter, just good vibes!</p>
          </div>
        </section>
        <section className="w-screen gap-2 flex flex-col  items-center justify-start mt-0 h-[300px]  ">
            New Here: 
            {/* options */}
           <div className="flex mt-2 gap-2 px-4" >
           <div onClick={() =>{setPage("createRoom")}} className={`flex cursor-pointer sm:w-[400px] items-center justify-center rounded-[20px] h-[160px] w-[170px] flex-col ${isLight ? 'bg-white border-2 ':'bg-gray-800'} hover:bg-blue-400 hover:text-white   relative font-[500] px-1 border-gray-200`}>
                <VscGitPullRequestCreate className="absolute  top-4" size={30} />
                <p className="mt-6 text-[15px] font-[600] ">Create a chat-room</p>
            </div>
            {/* second */}
            <div onClick={() =>{setPage("joinRoom")}} className={`flex cursor-pointer sm:w-[400px] items-center justify-center rounded-[20px] h-[160px] w-[170px] flex-col ${isLight ? 'bg-white border-2 ':'bg-gray-800'} hover:bg-blue-400 hover:text-white   relative font-[500] px-1 border-gray-200`}>
                <MdMeetingRoom className="absolute  top-4" size={30} />
                <p className="mt-6 text-[15px] font-[600] " >Join a chat-room</p>
            </div>
           </div>
        </section>
        {/* button */}
        <section  className="w-screen absolute bottom-10 sm:bottom-2 flex items-center justify-center  h-[100px]  mt-3  ">
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
    </motion.div>
  );
}

export default Home;

