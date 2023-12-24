import React from 'react'
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import { useGlobal } from '../context'
function Back() {
    const {setPage,room,setRoom,isLight} = useGlobal();
  return (
    <nav className={`fixed z-50 top-0 left-0 w-screen flex justify-between items-center px-6 py-6  backdrop-filter backdrop-blur-md bg-opacity-30 ${isLight ? 'bg-white shadow-sm text-black ' : 'bg-gray-900 text-white'} `}>
    <FaArrowLeft onClick={() =>setPage("general")} size={20}  className=" cursor-pointer mr-2" />
  <div className="font-semibold capitalize">{room}</div>
  <div className="flex items-center">
    <FaInfoCircle className=" mr-2" />
  </div>
</nav>
  )
}

export default Back