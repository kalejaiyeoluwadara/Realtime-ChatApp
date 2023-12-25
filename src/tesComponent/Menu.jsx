import React,{useState} from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import user from './../assets/user.jpg'
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { BsMoonFill, BsSun, BsBriefcase } from "react-icons/bs";
import { MdPublic } from "react-icons/md";
import { useGlobal } from '../context';
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
function Menu() {
    const {nav,setNav,setPage,setIslight,isLight,room,setRoom,locRooms } = useGlobal();
    const [settings,setSet] = useState(false);
    const storedRoomList = localStorage.getItem("roomlist");
    const parsed = JSON.parse(storedRoomList);
    console.log(parsed);
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
    className='w-screen z-50 text-white  fixed top-0 left-0   bo    ' >
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
        className={`min-h-screen ${isLight ? 'bg-[#F5F5F5] text-black ' : 'bg-gray-900 text-white' } relative   w-[290px] sm:w-[500px]  `} >
            {/* Intro */}
            <div className={`  ${isLight ? 'bg-white shadow-md text-black ' : 'bg-gray-800' } mb-6 h-[140px] flex gap-3 rb px-4 pt-12 `} >
                <img className='rounded-[50%] border-2 border-indigo-500 h-[60px] w-[60px] ' src={user} alt="" />
                <section className='mt-2'>
                    <h2 className='font-[600] text-[16px] '>Anon User</h2>
                    <p className=' text-[11px] '>@anon_user</p>
                    {/* <hr className={`border-1 mt-[30px] ${isLight ? 'border-white': 'border-white opacity-25 '} `} /> */}
                </section>
            </div>
            {/* body */}
           <div className={` ${isLight ? 'bg-white shadow-md text-black ' : 'bg-gray-800' } rounded-[20px] px-4 py-8 `}>
           <div className='flex  sects flex-col text-[20px] gap-[2px] mt-[20px]'>
                <section onClick={() =>{
                    
                    setPage("general")}} className='flex gap-3 items-center '>
                    <HiOutlineHome size={25} className='' />
                    <p className='font-[500]'>Home</p>
                </section>
                <section onClick={() =>{setPage("createRoom")}} className='flex gap-3 items-center '>
                    <VscGitPullRequestCreate size={25} className='' />
                    <p className='font-[500]  ' >Create Room</p>
                </section>
                <section onClick={() =>{setPage("joinRoom")}} className='flex gap-3 items-center '>
                    <MdMeetingRoom size={25} className='' />
                    <p className='font-[500]  ' >Join Room</p>
                </section>
            </div>

            <div className='border-1 flex flex-col  py-4 border-gray-400'>
    <h3 className='font-[600] text-lg mb-2'>Rooms History</h3>
    <div className={`rounded-lg mt-2 border ${isLight ? 'border-gray-200':'border-gray-100 border-opacity-25 '} shadow-md dark:border-gray-800 p-4 overflow-y-auto`}>
        <p className=' mb-4 text-md text-[14px] font-semibold'>Global Rooms</p>
        <div className=' '>
            {["groupc", "Beacons", "Igzios"].length > 0 ? (
                <ul className="list-disc pl-4">
                    {["iconverse","memegist","whoami"].map((rn, id) => {                        
                        return(
                        <li onClick={() =>{
                            setRoom(rn)
                            localStorage.setItem('chatRoom', JSON.stringify({ roomName: rn }));
                            setPage('chat')
                        }} key={id} className='capitalize text-lg mb-2 hover:text-blue-500 hover:underline cursor-pointer transition-all duration-300'>{rn}</li>
                    )})}
                </ul>
            ) : (
                <p className='text-gray-500'>You haven't joined any chat room</p>
            )}
        </div>
    </div>
</div>

                    {/* manage */}
            <div className={` ${isLight ? 'bg-white shadow-md text-black ' : 'bg-gray-800' } flex items-center  px-4 py-3 justify-center font-[600] rounded-[15px] -left-1 w-full absolute gap-3 bottom-4 `}><AiOutlineSetting className=' ' size={30} />
            <p onClick={() =>{
                    setSet(!settings)
            }} className='cursor-pointer ' >Manage settings</p>
            <AnimatePresence>{settings && <motion.div
            initial={{
                x:-10,
                opacity:0
            }}
            animate={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.4
            }}
            exit={{
                x:-10,
                opacity:0
            }}
            className={`absolute font-[400] -top-12 -right-[150px] ${isLight ? 'bg-white' : 'bg-gray-800'} shadow-xl h-auto py-2  rounded-[5px] `}>
                <p onClick={() =>{
                    setIslight(false)
                }} className='flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer '> <BsMoonFill/> Dark Mode</p>
                <p onClick={() =>{
                    setIslight(true)
                }} className='flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer '> <BsSun/> Light Mode</p>
            </motion.div>}</AnimatePresence>
            </div>
           </div>
        </motion.section>
    </motion.main>
  )
}

export default Menu