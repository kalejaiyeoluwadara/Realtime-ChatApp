import React, { useState, useEffect,useRef } from "react";
import { db } from "./../config/firebase";
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { VscSend } from "react-icons/vsc";
import Nav from "./Nav2";
import { useGlobal } from "../context";
import Menu from "./Menu";
import Chat from "./Chat";
import Loading from "./Loading"; // Import your loading component here

const InputBox = ({ msg, handleMsgChange, handleClick }) => {
  const {isLight} = useGlobal();
  return (
    <div className="flex z-40 gap-2 fixed sm:left-0 left-1 bottom-6 sm:bottom-10 w-full px-8 items-center mt-6 sm:justify-center justify-start">
      <input
        type="text"
        placeholder="Unleash Your Thoughts Anonymously"
        value={msg}
        
        onChange={handleMsgChange}
        onClick={handleClick}
        className={`w-full max-w-[500px] text-black outline-none ${isLight?'bg-white':'bg-gray-800 text-white'} placeholder-text-black border-2 border-gray-300 shadow-md px-4 py-3 sm:h-[70px] h-[60px] text-[14px] rounded-[25px] focus:border-blue-500 transition duration-300`}
      />

      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.3,
        }}
        className="bg-blue-500 text-white h-[50px] px-3 w-[50px] flex items-center justify-center rounded-[50%] transition duration-300 hover:bg-blue-600 focus:outline-none"
        onClick={handleClick}
      >
        <VscSend size={30} />
      </motion.button>
    </div>
  );
};

const MessageList = ({ msgList, messagesEndRef }) => {
  return (
    <motion.div layout className="flex items-center justify-center flex-col w-screen px-6 gap-8 capitalize">
      {msgList.map((doc) => (
        <Chat key={doc.id} message={doc.text} time={doc.time} />
      ))}
      <div ref={messagesEndRef}></div>
    </motion.div>
  );
};

function ChatRoom({ room }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [roomIsEmpty, setRoomIsEmpty] = useState(false);
  const messagesRef = collection(db, "rooms");
  const messagesEndRef = useRef(null);
  const {isLight} = useGlobal();
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("time")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let fetchedMessages = [];
      snapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      console.log("Number od messages in room :",fetchedMessages.length)
      const groups = new Set();
      fetchedMessages.forEach((message) => {
        // Assuming your message object has a 'group' property
        groups.add(message.room);
    });
    console.log(`Different groups in room "${room}":`, Array.from(groups));
      setMessages(fetchedMessages);
      setLoading(false);
      setRoomIsEmpty(fetchedMessages.length === 0);
    });

    return () => unsubscribe();
  }, [room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async () => {
    if (!newMessage.trim()) {
      return;
    } else {
      const currentDate = new Date();
      try {
        await addDoc(messagesRef, {
          text: newMessage,
          time: currentDate,
          room,
        });
        setNewMessage("");
      } catch (err) {
        console.error(err);
        // Handle the error or set an error state if needed
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleMsgChange = (event) => {
    setNewMessage(event.target.value);
  };

  const { nav, setNav,setPage } = useGlobal();

  return (
    <main className={` ${isLight?'bg-[#F5F5F5] text-black ':'bg-gray-900'}  w-screen flex items-center flex-col`}>
      <AnimatePresence>{nav && <Menu />}</AnimatePresence>
      
      <nav className={`absolute z-40 top-0 w-screen flex justify-between items-center px-6 py-6  backdrop-filter backdrop-blur-md bg-opacity-30 ${isLight ? 'bg-white shadow-sm text-black ' : 'bg-gray-900 text-white'} `}>
    <FaArrowLeft onClick={() =>setPage("general")} size={20}  className=" cursor-pointer mr-2" />
  <div className="font-semibold capitalize">{room}</div>
  <div className="flex items-center">
    <FaInfoCircle className=" mr-2" />
  </div>
</nav>



      <section className="pb-10 flex flex-col items-center justify-start w-screen">
        {loading ? (
          <Loading />
        ) : roomIsEmpty ? (
          <p className="text-gray-500 text-xl">This room is empty.</p>
        ) : (
          <MessageList msgList={messages} messagesEndRef={messagesEndRef} />
        )}
      </section>
      <InputBox
        msg={newMessage}
        // handleKeyPress={handleKeyPress}
        handleMsgChange={handleMsgChange}
        handleClick={handleSubmit}
      />
    </main>
  );
}

export default ChatRoom;