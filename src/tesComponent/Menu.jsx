import { motion } from 'framer-motion'
import React from 'react'
import user from './../assets/user.jpg'
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobal } from '../context';
function Menu() {
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
    onClick={() =>{setNav(false)}} className='w-screen z-50 text-black  fixed top-0 left-0 overflow-hidden h-screen bo    ' >
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
        className='h-screen bg-white relative py-12 px-6 w-[290px] sm:w-[500px]  ' >
            {/* Intro */}
            <div>
                <img className='rounded-[50%] h-[60px] w-[60px] ' src={user} alt="" />
                <section className='mt-2'>
                    <h2 className='font-bold text-[24px] '>Anon User</h2>
                    <p className='text-gray-800 text-[13px] '>@anon_user</p>
                    <hr className='border-1 mt-[30px] ' />
                </section>
            </div>
            <div className='flex sects flex-col text-[20px] gap-[30px] mt-[70px]'>
                <section onClick={() =>{setPage("createRoom")}} className='flex gap-3 items-center '>
                    <VscGitPullRequestCreate size={25} className='' />
                    <p className='font-[600]  ' >Create Room</p>
                </section>
                <section onClick={() =>{setPage("joinRoom")}} className='flex gap-3 items-center '>
                    <MdMeetingRoom size={25} className='' />
                    <p className='font-[600]  ' >Join Room</p>
                </section>
                <section onClick={() =>{setPage("general")}} className='flex gap-3 items-center '>
                    <MdPublic size={25} className='' />
                    <p className='font-[600]  ' >General Room</p>
                </section>
            </div>
            <BsFillMoonStarsFill className='absolute text-gray-900 bottom-4 left-6 ' size={30} />
        </motion.section>
    </motion.main>
  )
}

export default Menu