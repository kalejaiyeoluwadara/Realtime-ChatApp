import React from 'react'
import { GoPerson } from "react-icons/go";
function Chat({message,time}) {
   // Convert Firestore timestamp to JavaScript Date object
   const dateObject = time.toDate();

   // Format the date as a string
   const formattedTime = dateObject.toLocaleString();
  return (
    <section className=' text-black container w-[96%]  sm:w-[500px] gap-4 flex flex-col items-start px-6 min-h-[200px] bg-white py-8 shadow-md  rounded-[10px]   ' >
        <div className="head flex sm:gap-6  gap-3 items-center justify-center ">
          <GoPerson size={40} className='text-gray-600 font-[800] ' />
          <div>
            <h1 className='font-[600] text-gray-800 text-[20px] '>Anon User</h1>
            <p className="date font-[500] text-[13px] opacity-[0.8]  ">{formattedTime}</p>
          </div>
        </div>
        <div className="body">
          <p className=' text-[20px] text-black font-[500] '>{message}</p>
        </div>
        <div className="foot">
          <p className='font-cursive text-gray-500 font-[600] text-[20px] ' >BetaTalk.</p>
        </div>

    </section>
  )
}

export default Chat