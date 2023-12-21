import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { useGlobal } from "../context";
import Nav from "./Nav2";
import { motion } from "framer-motion";

function Home() {
  const { setPage } = useGlobal();
  const data = localStorage.getItem('chatRoom')
  console.log(JSON.parse(data));
  return (
    <motion.div
    initial={{
      x:"-100vw"
    }}
    animate={{
      x:0
    }}
    exit={{
      x:"100vw"
    }}
    transition={{
      duration:0.6
    }}
    className="h-screen z-20 absolute top-0 bg-[#F5F5F5]   w-screen text-black flex flex-col items-center justify-center ">
     <Nav/>

     <motion.main
      
     className="min-h-screen text-black w-screen bg-[#F5F5F5]">
        <section className="w-screen flex pt-10 flex-col  justify-center items-center   h-[290px]  ">
          <h2 className="font-[600] text-[17px] " >Hello User!</h2>
          <div className="flex items-center  mt-3 px-4 text-center flex-col justify-center">
            <p>Welcome to the anon verse</p>
            <p>Don't be shy! Your thoughts matter, just good vibes!</p>
          </div>
        </section>
        <section className="w-screen gap-2 flex flex-col items-center justify-start mt-0 h-[300px]  ">
            New Here: 
            {/* options */}
            <div onClick={() =>{setPage("createRoom")}} className="flex cursor-pointer sm:w-[400px] items-center justify-center h-[70px] w-[90%] bg-white border-2 relative font-[500] border-gray-200">
                <VscGitPullRequestCreate className="absolute text-gray-800 left-4" size={25} />
                <p>Create a chat-room</p>
            </div>
            {/* second */}
            <div onClick={() =>{setPage("joinRoom")}} className="flex cursor-pointer sm:w-[400px] items-center justify-center h-[70px] w-[90%] bg-white border-2 relative font-[500] border-gray-200">
                <MdMeetingRoom className="absolute text-gray-800 left-4" size={25} />
                <p>Join a chat-room</p>
            </div>
        </section>
        {/* button */}
        <section  className="w-screen absolute bottom-10 sm:bottom-2 flex items-center justify-center  h-[100px] bg-[#F5F5F5] mt-3  ">
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

