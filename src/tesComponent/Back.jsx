import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useGlobal } from "../context";
import { LuMoreVertical } from "react-icons/lu";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { motion, useScroll, AnimatePresence } from "framer-motion";

function Back() {
  const { setPage, room, setRoom, isLight, setIslight } = useGlobal();
  const [menu, setMenu] = useState(false);
  const [img, setImg] = useState("");
  const genRandImage = () => {
    const imgs = [
      "https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701937189060-8b87985d85e1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1703872617068-638c7d02e743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb3VwfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1703934810573-a24c0db7d7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1703880258785-45bc4492a912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1682687220363-35e4621ed990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1703798278589-245f6e47cf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1703811096376-1cb9f563961d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8fHw%3D",
    ];

    // Get a random index from the shortened array
    const randomIndex = Math.floor(Math.random() * imgs.length);

    // Return the random image URL
    return imgs[randomIndex];
  };
  useEffect(() => {
    setImg(genRandImage());
  }, []);
  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-screen flex justify-between items-center px-6 py-4 rounded-b-[10px] backdrop-filter backdrop-blur-md bg-opacity-30 ${
        isLight ? "bg-white shadow-sm text-black " : "bg-gray-900 text-white"
      } `}
    >
      <div className="font-semibold relative flex items-center justify-center gap-1 capitalize">
        <IoIosArrowBack
          onClick={() => setPage("general")}
          size={30}
          className=" cursor-pointer  relative -top-0 mr-0"
        />
        <img
          alt=""
          src={img}
          className="h-[40px] w-[40px] bg-black border-2 border-gray-500 rounded-[50%] "
        />
        <p className="ml-2">{room}</p>
      </div>
      <div className="flex items-center">
        <LuMoreVertical
          onClick={() => {
            setMenu(!menu);
          }}
          size={25}
          className=" cursor-pointer mr-2"
        />
      </div>
      <AnimatePresence>
        {menu && <Options menu={menu} setMenu={setMenu} />}
      </AnimatePresence>
    </nav>
  );
}
const Options = ({ menu, setMenu }) => {
  const { isLight, setIslight } = useGlobal();
  return (
    <motion.div
      initial={{
        x: -10,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      exit={{
        x: -10,
        opacity: 0,
      }}
      className={`fixed top-16 right-10  flex flex-col px-1 py-2 rounded-[7px] ${
        isLight ? " bg-white shadow-md text-black" : "bg-gray-800"
      } `}
    >
      <p
        onClick={() => {
          setIslight(false);
          setMenu(false);
        }}
        className="flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer "
      >
        {" "}
        <BsMoonFill /> Dark Mode
      </p>
      <p
        onClick={() => {
          setIslight(true);
          setMenu(false);
        }}
        className="flex h-[30px] px-3 py-2  w-[100%]  gap-2 items-center justify-center cursor-pointer "
      >
        {" "}
        <BsSun /> Light Mode
      </p>
    </motion.div>
  );
};
export default Back;
