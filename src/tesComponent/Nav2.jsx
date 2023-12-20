import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { VscMenu } from 'react-icons/vsc';
import { useGlobal } from '../context';
function Nav() {
  const {nav,setNav} = useGlobal();
  return (
    <nav
      className="flex w-screen mb-8 text-black absolute top-0 z-50 h-[13vh] bg-white bb justify-center items-center px-10"
    >
      <VscMenu onClick={()=>{setNav(true)}} size={30} className="absolute cursor-pointer left-10" />
      <p className="font text-[23px]">BetaTalk</p>
    </nav>
  );
}

export default Nav;
