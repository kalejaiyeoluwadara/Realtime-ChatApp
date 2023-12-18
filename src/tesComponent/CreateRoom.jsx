import React, { useState } from 'react';
import { useGlobal } from '../context';
import ChatRoom from './ChatRoom';
import { TiArrowBack } from 'react-icons/ti';
import { IoEnterOutline } from "react-icons/io5";
function CreateRoom() {
  const {chat, setChat,room,setCreateRoom, setRoom,setPage} = useGlobal();

  return (
    <main className='flex bo fixed top-0 z-50 left-0 text-white items-center justify-center h-screen w-screen'>
      {!chat && (
        <section className='shadow-lg text-black border-2 border-gray-300 w-[300px] rounded-[10px] gap-6 relative bg-white px-6 py-10 flex flex-col'>
          <TiArrowBack
          onClick={() => {
            setPage('general');
          }}
          className='absolute text-black left-4 cursor-pointer '
          size={25}
        />
          <h1 className='text-center font-bold text-lg mb-4'>Create Chat Room</h1>
          <input
           className='px-3 py-2 border text-black border-gray-400 rounded focus:outline-none focus:border-3 focus:border-blue-500'
           placeholder='Enter room name'
          onChange={(e) => setRoom(e.target.value)} type="text" />
          <button
            onClick={() => {
              
              setCreateRoom(false);
              setChat(true);
              
              console.log('hell yeahh');
            }}
            className='px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 text-center focus:outline-none'
          >
            Create <IoEnterOutline size={25} />
          </button>
        </section>
      )}

      
    </main>
  );
}

export default CreateRoom;