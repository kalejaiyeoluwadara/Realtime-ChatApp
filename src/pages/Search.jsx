import React from "react";
import { MdSettings } from "react-icons/md";
import { useGlobal } from "../context";
import Footer from "../tesComponent/Footer";
function Search() {
  const { roompage, locRooms } = useGlobal();
  return (
    <main className="w-screen text-white min-h-screen bg-gray-900 ">
      <nav className="fixed z-40 bg-gray-900  pb-4 border-b border-white border-opacity-5 gap-3 flex items-center  justify-between px-6 py-3 w-screen ">
        <img
          className="h-[40px] w-[40px] rounded-[50%] "
          src="https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <input
          className="bg-gray-900 outline-none placeholder:font-[600] placeholder:mb-2  px-3 border border-white border-opacity-[0.1] rounded-[20px] w-[230px] "
          placeholder="search global rooms"
          type="text"
        />
        <MdSettings size={25} />
      </nav>
      <main>
        <section>{/* <h3>Global rooms</h3> */}</section>
      </main>
      <Footer />
    </main>
  );
}

export default Search;
