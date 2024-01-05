import React from "react";
import { MdSettings } from "react-icons/md";
import { useGlobal } from "../context";
import Footer from "../tesComponent/Footer";
function Rooms() {
  const { roompage } = useGlobal();
  return (
    <main className="w-screen text-white min-h-screen bg-gray-900 ">
      <nav className="fixed gap-3 flex items-center  justify-between px-6 py-3 w-screen ">
        <img
          className="h-[40px] w-[40px] rounded-[50%] "
          src="https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <input
          className="bg-gray-900 outline-none placeholder:font-[600] placeholder:mb-2  px-3 border rounded-[20px] border-gray-800 w-[230px] "
          placeholder="search rooms"
          type="text"
        />
        <MdSettings size={25} />
      </nav>
      <Footer />
    </main>
  );
}

export default Rooms;
