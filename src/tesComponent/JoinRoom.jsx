import React from 'react'
import { useGlobal } from '../context';

function JoinRoom() {
  const {nav,setNav,setPage } = useGlobal();
  return (
    <main className='flex bg-white fixed top-0 z-50 left-0 text-black items-center justify-center h-screen w-screen  '>
        <section className='shadow-md gap-6 background-white  px-6 py-10 flex flex-col' >
            <h1>Enter Room name</h1>
            <input type="text" />
            <button onClick={() =>{setPage("general")}} className=' px-4 py-3 text-white bg-blue-400 rounded-[6px]' >Join</button>
        </section>
    </main>
  )
}

export default JoinRoom;