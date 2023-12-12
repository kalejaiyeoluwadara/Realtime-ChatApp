import React, { useState, useEffect,useRef } from 'react';
import { addDoc, getDocs, deleteDoc,onSnapshot, doc, collection, query, orderBy } from 'firebase/firestore';

import { db } from './config/firebase';
import profile from "./../src/msgcomp/images/avatars/image-amyrobson.png";
import reply from "./../src/msgcomp/images/icon-delete.svg";
import { useGlobal } from './context';
import Reveal from './reveal';
import { motion } from 'framer-motion';
import {VscSend , VscArrowSmallDown } from 'react-icons/vsc'
import Chat from './tesComponent/Chat';
import Icon from './Icon';
function Messages() {
  const messagesEndRef = useRef(null);
  const {img,name} = useGlobal();
  const collectionRef = collection(db, 'messages');
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const unsubscribeRef = useRef(null);
  const [error, setError] = useState(null); // New state for error handling
 

  const handleClick = async () => {
    const date = new Date();
    try {
      await addDoc(collectionRef, { message: msg, time: date });
      // Clear the input field after successfully adding a message
      setMsg("");
      getMessages();
    } catch (err) {
      console.error(err);
      setError("Failed to add the message"); // Set an error message
    }
  }

  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  }

  const getMessages = () => {
    try {
      const q = query(collectionRef, orderBy('time', 'asc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMsgList(updatedData);
        // You may not need to set the unsubscribe function in the state,
        // instead, use the ref to store it
      });

      unsubscribeRef.current = unsubscribe; // Store the unsubscribe function in the ref
    } catch (err) {
      console.error(err);
      setError("Failed to fetch messages");
    }
  };

  useEffect(() => {
    getMessages();

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current(); // Call the unsubscribe function if it exists
      }
    };
  }, []);

  useEffect(() => {
    getMessages();
  }, []);
  const deleteMsg = async (id) =>{
    const msgDoc = doc(db,"messages",id);
    await deleteDoc(msgDoc);
    getMessages();
  }

  useEffect(() => {
    // Scroll to the bottom when the component updates with new messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgList]);

  return (
    <div className="flex  flex-col bg-white px-6 items-center justify-center pb-20 ">
      <p className="font-[600] text-black text-center mt-10 mb-10 text-[22px]  ">
        BetaTalk
      </p>
      
      
      <div className="flex z-40 gap-2 fixed sm:left-0 left-1 bottom-6 sm:bottom-10 w-full px-8 items-center mt-6 items-center  sm:justify-center justify-start ">
      <input
  type="text"
  placeholder="Unleash Your Thoughts Anonymously"
  value={msg}
  onKeyPress={handleKeyPress}
  onChange={handleMsgChange}
  className="w-full max-w-[500px] text-black outline-none bg-white placeholder-text-black  border-2 border-gray-300 shadow-md px-4 py-3 sm:h-[70px] h-[60px] text-[14px] rounded-[25px] focus:border-blue-500 transition duration-300"
/>

      <button
        className="bg-blue-500 text-white h-[50px] px-3 w-[50px] flex items-center justify-center rounded-[50%] transition duration-300 hover:bg-blue-600 focus:outline-none"
        onClick={handleClick}

      >
        <VscSend size={30} />
      </button>
</div>


      {error && <div className="error-message">{error}</div>}
      <motion.div 
      
      className="flex flex-col  gap-4  capitalize  ">
        {msgList.map((doc) => {
          return (
          //   <motion.div
          //   initial={{x:-100}}
          // transition={{
          //   duration:0.5
          // }}
          // whileInView={{x:0}}
          //     className="bg-gray-800 gap-3 text-white sm:w-[500px] w-auto rounded-[4px] sm:mt-20 mt-10 px-6 py-6 flex flex-col text-start "
          //     key={doc.id}
          //   >
          //     <section className=" flex items-center gap-3 ">
          //       <img
          //         className="h-[35px] w-[35px] rounded-[50%]  "
          //         src={img}
          //         alt=""
          //       />
          //       <p className="font-[600] text-[16px] ">{name}</p>
          //       <p className="text-gray-500 text-[13px] ">today</p>
          //     </section>
          //     <section>
          //       <h1>{doc.message}</h1>
          //     </section>
          //     <section className="flex  mt-4 gap-3">
          //       <div
          //         style={
          //           {
          //             // backgroundColor: "hsl(228, 33%, 97%)",
          //           }
          //         }
          //         className="flex px-3  bg-gray-900 rounded-[3px] text-gray-700 font-[500] py-1 gap-6 "
          //       >
          //         <span>-</span>
          //         <span className="font-[600] text-blue-600 ">0</span>
          //         <span>+</span>
          //       </div>
          //       <div className="flex  items-center gap-1 ">
          //         <img src={reply} alt="" />
          //         <button
          //           onClick={() => deleteMsg(doc.id)}
          //           className="font-[600] text-[16px] text-blue-600 "
          //         >
          //           Delete
          //         </button>
          //       </div>
          //     </section>
          //   </motion.div>
          // <div onClick={() => deleteMsg(doc.id)} >
            <Chat message={doc.message} time={doc.time}  />
          // </div>
          );
        })}
        <div ref={messagesEndRef} ></div>
      </motion.div>

       <button
          className=" fixed z-50 br flex items-center justify-center h-[40px] w-[40px] rounded-[50%] bg-white bottom-[100px] right-2 text-gray-900 "
          onClick={() => {
            // Scroll to the bottom when the first button is clicked
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
        <VscArrowSmallDown size={30} />
        </button>
    </div>
  );
}

export default Messages;
