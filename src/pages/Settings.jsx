import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useGlobal } from "../context";

function Settings() {
  const { isLight } = useGlobal();
  return (
    <div className="w-screen h-screen bg-gray-900 text-white">
      <nav
        className={`w-full flex justify-start items-center px-6 py-4 rounded-b-[10px] backdrop-filter backdrop-blur-md bg-opacity-30 ${
          isLight ? "bg-white shadow-sm text-black " : "bg-gray-900 text-white"
        } `}
      >
        <IoIosArrowBack size={25} />
        <p className="font-[600] text-[18px] ">Setting</p>
      </nav>
      <main></main>
    </div>
  );
}

export default Settings;
