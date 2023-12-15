import { motion } from "framer-motion";
import React from "react";
import { VscSend, VscArrowSmallDown } from "react-icons/vsc";
function Foot({msg,handleKeyPress,handleMsgChange,handleClick}) {
  return (
    <div className="flex z-40 gap-2 fixed sm:left-0 left-1 bottom-6 sm:bottom-10 w-full px-8 items-center mt-6 items-center  sm:justify-center justify-start ">
      <input
        type="text"
        placeholder="Unleash Your Thoughts Anonymously"
        value={msg}
        onKeyPress={handleKeyPress}
        onChange={handleMsgChange}
        className="w-full max-w-[500px] text-black outline-none bg-white placeholder-text-black  border-2 border-gray-300 shadow-md px-4 py-3 sm:h-[70px] h-[60px] text-[14px] rounded-[25px] focus:border-blue-500 transition duration-300"
      />

      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.3,
        }}
        className="bg-blue-500 text-white h-[50px] px-3 w-[50px] flex items-center justify-center rounded-[50%] transition duration-300 hover:bg-blue-600 focus:outline-none"
        onClick={handleClick}
      >
        <VscSend size={30} />
      </motion.button>
    </div>
  );
}

export default Foot;
