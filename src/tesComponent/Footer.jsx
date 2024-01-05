import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { MdSettings } from "react-icons/md";
import { useGlobal } from "../context";
import { motion } from "framer-motion";
function Footer() {
  const { setPage, roomPage } = useGlobal();
  return (
    <foot className="fixed bottom-0 text-[13px] flex items-center justify-between px-6 bg-gray-800 w-screen rounded-t-[15px] h-[12vh] ">
      <div
        onClick={() => {
          setPage("general");
        }}
        className="flex flex-col  cursor-pointer justify-center items-center gap-1"
      >
        <RiHome5Fill size={25} />
        <p>Home</p>
      </div>
      <div className="flex cursor-pointer flex-col justify-center items-center  gap-1">
        <FiSearch size={25} />
        <p>search</p>
      </div>
      <div
        onClick={() => {
          setPage("roompage");
          console.log();
        }}
        className="flex cursor-pointer flex-col justify-center items-center  gap-1"
      >
        <LuLibrary size={25} />
        <p>Your rooms</p>
      </div>
      <div className="flex cursor-pointer flex-col justify-center items-center  gap-1">
        <MdSettings size={25} />
        <p>Settings</p>
      </div>
    </foot>
  );
}

export default Footer;
