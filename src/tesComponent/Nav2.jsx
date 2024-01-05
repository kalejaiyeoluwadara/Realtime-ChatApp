import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { VscMenu } from "react-icons/vsc";
import { useGlobal } from "../context";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function Nav() {
  const { nav, setNav, isLight } = useGlobal();
  const [img, setImg] = useState("");
  const genRandImage = () => {
    const imgs = [
      "https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb3VwfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
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
      className={`flex w-screen mb-8 ${
        isLight
          ? "text-black"
          : "text-white border-spacing-1 border-white border-opacity-5 "
      } absolute top-0 z-50 h-[10vh] bb justify-center items-center px-10`}
    >
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
        className="absolute  cursor-pointer left-10"
        onClick={() => {
          setNav(true);
        }}
      >
        {/* <AiOutlineAppstoreAdd  
     
     size={30}  /> */}
        <img src={img} className="h-[40px] rounded-[50%] w-[40px] " alt="" />
      </motion.div>
      <div>
        <p className="font text-[23px]">BT</p>
      </div>
    </nav>
  );
}

export default Nav;
