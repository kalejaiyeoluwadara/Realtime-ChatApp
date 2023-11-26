import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
function Frame() {
    const ref = useRef(null)
    const isInView = useInView(ref);

    useEffect(() =>{
        console.log('Is in view -> ',isInView);
    },[isInView])
  return (
    <div>
      <div className='h-[100vh] w-screen bg-red-500 ' />
      <motion.div 
      initial={{
        scale:0
      }}
      transition={{
        duration:0.3
      }}
      whileInView={{
        scale:1
      }} className='h-[100vh] w-screen bg-blue-500 ' />
      <div ref={ref}  className='h-[100vh] w-screen bg-green-500 ' />
    </div>
  )
}

export default Frame
