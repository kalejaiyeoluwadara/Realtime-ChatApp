import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { MdSettings } from "react-icons/md";
function Footer() {
  return (
    <foot className="fixed bottom-0 text-[13px] flex items-center justify-between px-6 bg-gray-800 w-screen rounded-t-[15px] h-[12vh] ">
      <div className="flex flex-col  justify-center items-center gap-1">
        <RiHome5Fill size={25} />
        <p>Home</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-1">
        <FiSearch size={25} />
        <p>search</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-1">
        <LuLibrary size={25} />
        <p>Your rooms</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-1">
        <MdSettings size={25} />
        <p>Settings</p>
      </div>
    </foot>
  );
}

export default Footer;
