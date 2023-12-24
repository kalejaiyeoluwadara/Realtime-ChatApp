import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { GoPerson } from "react-icons/go";
import { useGlobal } from '../context';
function Chat({message,time}) {
   // Convert Firestore timestamp to JavaScript Date object
   const dateObject = time.toDate();

   // Format the date as a string
   const formattedTime = dateObject.toLocaleString();
   const [select,setSelect] = useState(false);
   const {isLight} = useGlobal();
  return (
    <motion.section
    initial={{
      opacity:0,
    }}
    animate={{
      opacity:1
    }}
    whileInView={{opacity:1}}
    transition={{
      duration:0.9,
    }}
    onClick={() =>{setSelect(!select)}}
    className={` container ${isLight ? 'border-gray-200  text-black ':'bg-gray-800 text-white '} lowercase transition duration-0.9 w-[96%]  sm:w-[500px] gap-4 flex flex-col items-start px-6 min-h-[150px]   py-4 shadow-md  rounded-[10px]     `} >
        <div className="head flex sm:gap-6  gap-3 items-center justify-center ">
          <GoPerson size={40} className={`font-cursive ${isLight? 'text-gray-600':'text-white opacity-70'} font-[600] text-[20px] ` } />
          <div>
            <h1 className={`font-[500]  text-[20px] `}>Anon User</h1>
            <p className="date font-[500]  text-[13px] opacity-[0.8]  ">{formattedTime}</p>
          </div>
        </div>
        <div className="body">
          <p className=' sm:text-[20px] text-[18px] font-[300] '>{message}</p>
        </div>
        <div className="foot">
          <p className={`font-cursive ${isLight?'text-gray-500':'text-gray-400'} font-[500] text-[20px] ` }>BetaTalk.</p>
        </div>

    </motion.section>
  )
}

export default Chat