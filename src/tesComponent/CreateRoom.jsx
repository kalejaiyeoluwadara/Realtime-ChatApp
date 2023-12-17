import React, { useState } from 'react';
import { useGlobal } from '../context';
import ChatRoom from './ChatRoom';

function CreateRoom() {
  const { setPage } = useGlobal();
  const [room, setRoom] = useState("");
  const [chat, setChat] = useState(false);

  return (
    <main className='flex bg-white text-black fixed top-0 z-50 left-0 items-center justify-center h-screen w-screen'>
      {!chat && (
        <section className='shadow-md gap-6 background-white px-6 py-10 flex flex-col'>
          <h1>Enter Room name</h1>
          <input onChange={(e) => setRoom(e.target.value)} type="text" />
          <button
            onClick={() => {
              // Uncomment the following line if you want to set the page to "general"
              // setPage("general");
              setChat(true);
              console.log('hell yeahh');
            }}
            className='px-4 py-3 text-white bg-blue-400 rounded-[6px]'
          >
            Create
          </button>
        </section>
      )}

      {chat && <ChatRoom room={room} />}
    </main>
  );
}

export default CreateRoom;
