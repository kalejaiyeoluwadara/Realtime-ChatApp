import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
function Footer() {
  return (
    <foot className="fixed bottom-0 flex items-center justify-between px-6 bg-gray-800 w-screen rounded-t-[15px] h-[12vh] ">
      <div className="flex flex-col  justify-center items-center gap-1">
        <RiHome5Fill size={30} />
        <p>Home</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-1">
        <FiSearch size={30} />
        <p>search</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-1">
        <LuLibrary size={30} />
        <p>Your rooms</p>
      </div>
    </foot>
  );
}

export default Footer;
