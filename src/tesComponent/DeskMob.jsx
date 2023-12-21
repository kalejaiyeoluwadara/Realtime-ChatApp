import { motion } from 'framer-motion'
import React from 'react'
import user from './../assets/user.jpg'
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobal } from '../context';
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
function DeskMob() {
    const {nav,setNav,setPage } = useGlobal()
  return (
    <motion.main
    initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    exit={{
        opacity:0,
        transition:{
            delay:1
        }
    }}
    onClick={() =>{setNav(false)}} className='w-screen z-50 text-black  fixed top-0 left-0   bo    ' >
        <motion.section
         initial={{
            x:'-100vw'
        }}
        animate={{
            x:0
        }}
        transition={{
            duration:0.5,
            delay:0.5
        }}
        exit={{
            x:'-100vw',
           
        }}
        className='min-h-screen bg-white  relative py-8 px-6 w-[290px] sm:w-[500px]  ' >
            {/* Intro */}
            <div>
                <img className='rounded-[50%] h-[60px] w-[60px] ' src={user} alt="" />
                <section className='mt-2'>
                    <h2 className='font-bold text-[24px] '>Anon User</h2>
                    <p className='text-gray-800 text-[13px] '>@anon_user</p>
                    <hr className='border-1 mt-[30px] ' />
                </section>
            </div>
            <div className='flex sects flex-col text-[20px] gap-[15px] mt-[20px]'>
                <section onClick={() =>{setPage("general")}} className='flex gap-3 items-center '>
                    <HiOutlineHome size={25} className='' />
                    <p className='font-[600]'>Home</p>
                </section>
                <section onClick={() =>{setPage("createRoom")}} className='flex gap-3 items-center '>
                    <VscGitPullRequestCreate size={25} className='' />
                    <p className='font-[600]  ' >Create Room</p>
                </section>
                <section onClick={() =>{setPage("joinRoom")}} className='flex gap-3 items-center '>
                    <MdMeetingRoom size={25} className='' />
                    <p className='font-[600]  ' >Join Room</p>
                </section>
            </div>

            <div className='border-1 flex flex-col  py-4 border-gray-400'>
    <h3 className='font-bold text-lg mb-2'>Rooms History</h3>
    <div className="rounded-lg border border-gray-200 shadow-md dark:border-gray-800 p-4 overflow-y-auto">
        <p className='text-gray-600 mb-4 text-md font-semibold'>Chat Rooms</p>
        <div className=' '>
            {["groupc", "Beacons", "Igzios"].length > 0 ? (
                <ul className="list-disc pl-4">
                    {["groupc", "Beacons", "Igzios"].map((rn, id) => (
                        <li key={id} className='capitalize text-lg mb-2 hover:text-blue-500 hover:underline cursor-pointer transition-all duration-300'>{rn}</li>
                    ))}
                </ul>
            ) : (
                <p className='text-gray-500'>You haven't joined any chat room</p>
            )}
        </div>
    </div>
</div>


            <div className='flex items-center justify-center font-[600] absolute gap-3 bottom-4 left-6 '><AiOutlineSetting className=' text-gray-900 ' size={30} />
            <p>Manage settings</p>
            </div>
        </motion.section>
    </motion.main>
  )
}

export default DeskMob