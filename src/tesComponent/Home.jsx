import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { useGlobal } from "../context";
import Nav from "./Nav2";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Footer from "./Footer";
import Floating from "../pages/Floating";
function Home() {
  const { setPage, isLight, setIslight, nav } = useGlobal();
  const data = localStorage.getItem("chatRoom");
  // console.log(JSON.parse(data));
  return (
    <motion.div
      initial={{
        x: "-100vw",
        y: 0,
      }}
      className={` z-20 min-h-screen overflow-hidden  top-0 relative  w-screen  ${
        isLight ? " bg-[#F5F5F5] text-black" : "text-white bg-gray-900"
      } flex flex-col items-center justify-start `}
    >
      <Nav />
      <AnimatePresence>{nav && <Menu />}</AnimatePresence>
      <motion.main className=" w-screen ">
        <Floating />

        <section className=" gap-2 flex sm:flex-row flex-col  absolute bottom-10 w-full items-center justify-center px-1 mt-0 h-[300px]  ">
          {/* options */}
          <div className="flex mt-2 gap-2 items-center px-4">
            {/* create room */}
            <motion.div
              whileTap={{
                scale: 0.8,
              }}
              onClick={() => {
                setPage("createRoom");
              }}
              className={`flex  cursor-pointer sm:w-[300px] items-center justify-center backdrop-filter backdrop-blur-md shadow-md bg-opacity-30 rounded-[8px] h-[65px]  w-[170px] text-center  ${
                isLight ? "bg-white border-2 " : "bg-gray-800"
              } hover:bg-blue-500 hover:text-white   relative font-[500] px-1 border-gray-200`}
            >
              <img
                className="h-[50px] w-[50px] "
                src="https://cdn3d.iconscout.com/3d/premium/thumb/my-account-2870167-2386919.png?f=webp"
                alt=""
              />
              {/* <VscGitPullRequestCreate className="absolute  top-4" size={30} /> */}
              <p className="text-[12px] sm:text-[16px] text-center font-[600] ">
                Create a chat-room
              </p>
            </motion.div>

            {/* Join room */}
            <motion.div
              whileTap={{
                scale: 0.8,
              }}
              onClick={() => {
                setPage("joinRoom");
              }}
              className={`flex cursor-pointer sm:w-[300px] items-center justify-center rounded-[8px] w-[190px] backdrop-filter backdrop-blur-md shadow-md bg-opacity-30  ${
                isLight ? "bg-white border-2 " : "bg-gray-800"
              } hover:bg-blue-500 hover:text-white h-[65px] py-2  relative font-[500] px-1 border-gray-200`}
            >
              {/* <MdMeetingRoom className="absolute  top-4" size={30} /> */}
              <img
                className="h-[50px] w-[50px] "
                src="https://cdn3d.iconscout.com/3d/premium/thumb/link-6151198-5043847.png?f=webp"
                alt=""
              />
              <p className="  text-[12px] ml-2 sm:text-[16px] text-center font-[600] ">
                Join a chat-room
              </p>
            </motion.div>
          </div>
        </section>
        {/* button */}
        {/* <section className="w-screen absolute bottom-2 sm:bottom-2 flex items-center justify-center  h-[100px]  mt-3  ">
          <motion.div
            whileTap={{
              scale: 0.6,
              transition: {
                duration: 0.3,
              },
            }}
            onClick={() => {
              setPage("createRoom");
            }}
            className="bg-blue-500 cursor-pointer h-[60px] w-[60px] text-[30px] text-white flex items-center justify-center rounded-[50%] "
          >
            +
          </motion.div>
        </section> */}
        <Footer />
      </motion.main>
    </motion.div>
  );
}

export default Home;
