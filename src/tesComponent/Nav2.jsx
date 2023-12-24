import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { VscMenu } from 'react-icons/vsc';
import { useGlobal } from '../context';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function Nav() {
  const {nav,setNav,isLight} = useGlobal();
  return (
    <nav
      className={`flex w-screen mb-8 ${isLight ? 'text-black':'text-white border-spacing-1 border-white border-opacity-5 '} absolute top-0 z-50 h-[10vh] bb justify-center items-center px-10`}
    >
     <div className="absolute  cursor-pointer left-10" onClick={()=>{setNav(true)
    }}>
     <AiOutlineAppstoreAdd  size={30}  />
     </div>
     <div>
     <p className="font text-[23px]">BetaTalk</p>

     </div>
    </nav>
  );
}

export default Nav;
