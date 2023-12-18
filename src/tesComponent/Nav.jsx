import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { VscMenu } from 'react-icons/vsc';

import { useGlobal } from '../context';
function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    controls.start({ opacity: currentScrollPos > prevScrollPos ? 0 : 1, y: currentScrollPos > prevScrollPos ? -50 : 0 });
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  const {nav,setNav} = useGlobal();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      className="flex w-screen mb-8 text-black sticky top-0 z-50 h-[13vh] bg-white bb justify-center items-center px-10"
    >
      <VscMenu onClick={()=>{setNav(true)}} size={30} className="absolute cursor-pointer left-10" />
      <p className="font text-[23px]">BetaTalk</p>
    </motion.nav>
  );
}

export default Nav;
