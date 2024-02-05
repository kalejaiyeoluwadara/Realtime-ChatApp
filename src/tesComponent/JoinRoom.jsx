import React, { useState } from "react";
import { useGlobal } from "../context";
import { TiArrowBack } from "react-icons/ti";
import { IoEnterOutline } from "react-icons/io5";
import { motion } from "framer-motion";
function JoinRoom() {
  const {
    nav,
    setNav,
    setPage,
    handleJoinClick,
    room,
    chat,
    setRoom,
    setChat,
    setJoinRoom,
    isLight,
    allrooms,
    setAllrooms,
    error,
    setError,
  } = useGlobal();
  const [inputchange, setInputChange] = useState("");
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`flex ${
        isLight ? "bo" : "bg-black"
      } fixed top-0 z-50 left-0 text-white items-center justify-center h-screen w-screen`}
    >
      <motion.section
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: "-100vh",
        }}
        transition={{
          duration: 0.6,
        }}
        className={`shadow-lg text-black  border-gray-300 w-[300px] rounded-[10px] gap-6 relative ${
          isLight ? "bg-white border-2" : "bg-gray-900 text-white"
        } px-6 py-10 flex flex-col`}
      >
        <TiArrowBack
          onClick={() => {
            setPage("general");
          }}
          className="absolute  left-4 cursor-pointer "
          size={25}
        />
        <h1 className="text-center font-bold text-lg mb-4">Enter Chat Room</h1>
        <input
          className={`px-3 py-2 border text-black ${
            isLight ? "bg-white" : "bg-gray-800 border-opacity-25 text-white"
          } border-gray-400 rounded focus:outline-none focus:border-3 focus:border-blue-500`}
          placeholder="Enter room name"
          type="text"
          onChange={(e) => setInputChange(e.target.value.toLowerCase().trim())}
        />
        <button
          onClick={() => {
            if (allrooms.includes(inputchange)) {
              setRoom(inputchange);
              // localStorage.setItem(
              //   "roomhist",
              //   JSON.stringify([...locRooms, room])
              // );
              setChat(true);
              setJoinRoom(false);
              setError(false);
              console.log("corrected");
            } else {
              setError(true);
              console.log("error");
            }
          }}
          className="px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 text-center focus:outline-none"
        >
          Join <IoEnterOutline size={25} />
        </button>
      </motion.section>
    </motion.main>
  );
}

export default JoinRoom;
