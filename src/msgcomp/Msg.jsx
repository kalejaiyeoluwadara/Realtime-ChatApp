import React from 'react'
import profile from "./images/avatars/image-amyrobson.png";
import reply from './images/icon-reply.svg'
import Reveal from '../reveal'


const Text = () =>{
  return(
    <Reveal>
    <div className="bg-white w-[500px] rounded-[4px] sm:mt-20 mt-10 px-6 py-6 flex flex-col text-start ">
        <section className=" flex items-center gap-3 ">
          <img
            className="h-[35px] w-[35px] rounded-[50%]  "
            src={profile}
            alt=""
          />
          <p className="font-[600] text-black text-[16px] ">Lora</p>
          <p className="text-gray-500 text-[13px] ">yesterday</p>
        </section>
        <section className="leading-[28px] text-gray-600 text-[17px]   ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo ut
          ex tenetur, debitis accusamus, doloremque optio assumenda pariatur
          corporis aliquid qui impedit.
        </section>
        <section className="flex  mt-4 justify-between">
          <div
            style={{
              backgroundColor: "hsl(228, 33%, 97%)",
            }}
            className="flex px-3 text-gray-700 font-[500] py-1 gap-6 "
          >
            <span>-</span>
            <span className="font-[600] text-blue-600 ">0</span>
            <span>+</span>
          </div>
          <div className='flex items-center gap-3'>
            <img src={reply} alt="" />
            <p className="font-[600] text-[16px] text-blue-600 ">Reply</p>
          </div>
        </section>
      </div>
    </Reveal>
  )
}
function Msg() {
  return (
    <div
      style={{
        backgroundColor: "hsl(228, 33%, 97%)",
      }}
      className=" flex flex-col gap-4 items-center  h-auto min-w-screen  "
    >
      {[1,2,3,4].map((d,id) =>{
        return(
          <Text key={id} />
        )
      })}
    </div>
  );
}

export default Msg
