import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import user from "./../assets/user.jpg";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { BsMoonFill, BsSun, BsBriefcase } from "react-icons/bs";
import { MdPublic } from "react-icons/md";
import { useGlobal } from "../context";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
function Menu() {
  const {
    nav,
    setNav,
    setPage,
    setIslight,
    isLight,
    room,
    setRoom,
    locRooms,
    setLocRooms,
    uniqueId,
    genRandImage,
  } = useGlobal();

  const [settings, setSet] = useState(false);
  const [img, setImg] = useState("");
  useEffect(() => {
    const roomsList = localStorage.getItem("roomhist");
    if (roomsList) {
      setLocRooms(JSON.parse(roomsList));
    }
  }, []);

  useEffect(() => {
    setImg(genRandImage());
  }, []);
  // console.log(parsed);
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 1,
        },
      }}
      className="w-screen z-50 text-white  fixed top-0 left-0   bo    "
    >
      <motion.section
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        exit={{
          x: "-100vw",
        }}
        className={`min-h-screen ${
          isLight ? "bg-[#F5F5F5] text-black " : "bg-gray-900 text-white"
        } relative   w-[290px] sm:w-[500px]  `}
      >
        {/* Intro */}
        <div
          className={`  ${
            isLight ? "bg-white shadow-md text-black " : "bg-gray-800"
          } mb-2 h-[120px] flex gap-3 rb px-4 pt-8 `}
        >
          <img
            className="rounded-[50%] border-2 border-gray-500 h-[50px] w-[50px] "
            src={img}
            alt=""
          />
          <section className="mt-2">
            <h2 className="font-[600] text-[16px] ">Anon User</h2>
            <p className="text-[11px]">@user_{uniqueId.substring(0, 5)}</p>
          </section>
        </div>
        {/* body */}
        <div
          className={` ${
            isLight ? "bg-white shadow-md text-black " : "bg-gray-800"
          } rounded-[20px] px-4 py-8 `}
        >
          <div className="flex  sects flex-col text-[20px] gap-[12px] mt-[10px]">
            <section
              onClick={() => {
                setPage("general");
              }}
              className="flex gap-3 items-center "
            >
              <HiOutlineHome size={25} className="" />
              <p className="font-[500]">Home</p>
            </section>
            <section
              onClick={() => {
                setPage("createRoom");
              }}
              className="flex gap-3 items-center "
            >
              <VscGitPullRequestCreate size={25} className="" />
              <p className="font-[500]  ">Create Room</p>
            </section>
            <section
              onClick={() => {
                setPage("joinRoom");
              }}
              className="flex gap-3 items-center "
            >
              <MdMeetingRoom size={25} className="" />
              <p className="font-[500]  ">Join Room</p>
            </section>
            {/* dash board */}
            {true && (
              <section
                onClick={() => {
                  setPage("dashboard");
                }}
                className="flex absolute top-2 right-2 bg-green-500 opacity-0 h-20 w-12  gap-3 items-center "
              ></section>
            )}
          </div>

          <div className="border-1 flex flex-col  py-4 border-gray-400">
            <h3 className="font-[600] text-lg mb-2">Rooms History</h3>
            <div
              className={`rounded-lg mt-2 border ${
                isLight
                  ? "border-gray-200"
                  : "border-gray-100 border-opacity-25 "
              } shadow-md dark:border-gray-800 p-4 overflow-y-auto`}
            >
              <p className=" mb-4 text-md text-[14px] font-semibold">
                Your Rooms
              </p>
              <div className=" ">
                {locRooms.length > 0 ? (
                  <ul className="list-disc pl-4">
                    {[...new Set(locRooms.slice(-3))].map((rn, id) => (
                      <li
                        onClick={() => {
                          setRoom(rn);
                          setPage("chat");
                          if (!locRooms.includes(rn)) {
                            localStorage.setItem(
                              "chatRoom",
                              JSON.stringify({ roomName: rn })
                            );
                          }
                        }}
                        key={id}
                        className="capitalize text-lg mb-2 hover:text-blue-500 hover:underline cursor-pointer transition-all duration-300"
                      >
                        {rn}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    You haven't joined any chat room
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* manage */}
          <div
            onClick={() => {
              setSet(!settings);
            }}
            className={`  flex items-center  px-4 py-3 justify-start font-[600] rounded-[15px] cursor-pointer -left-1 w-full absolute gap-3 bottom-1 `}
          >
            <AiOutlineSetting className=" " size={30} />
            <p className=" ">Manage settings</p>
            <AnimatePresence>
              {settings && (
                <motion.div
                  initial={{
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  exit={{
                    x: -10,
                    opacity: 0,
                  }}
                  className={`absolute font-[400] -top-16 -right-[10px] ${
                    isLight ? "bg-white" : "bg-gray-800"
                  } shadow-xl h-auto py-2  rounded-[5px] `}
                >
                  <p
                    onClick={() => {
                      setIslight(false);
                    }}
                    className="flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer "
                  >
                    {" "}
                    <BsMoonFill /> Dark Mode
                  </p>
                  <p
                    onClick={() => {
                      setIslight(true);
                    }}
                    className="flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer "
                  >
                    {" "}
                    <BsSun /> Light Mode
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default Menu;
