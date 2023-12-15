import React from 'react'

function JoinRoom() {
  return (
    <main className='flex text-black items-center justify-center h-screen w-screen  '>
        <section className='shadow-md gap-6 background-white  px-6 py-10 flex flex-col' >
            <h1>Enter Room name</h1>
            <input type="text" />
            <button className=' px-4 py-3 text-white bg-blue-400 rounded-[6px]' >Join</button>
        </section>
    </main>
  )
}

export default JoinRoom;