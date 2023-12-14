import React, { useState, useEffect, useRef } from "react";
import {
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./config/firebase";
import profile from "./../src/msgcomp/images/avatars/image-amyrobson.png";
import reply from "./../src/msgcomp/images/icon-delete.svg";
import { useGlobal } from "./context";
import Reveal from "./reveal";
import { motion,AnimatePresence } from "framer-motion";
import { VscSend, VscArrowSmallDown } from "react-icons/vsc";
import Chat from "./tesComponent/Chat";
import Icon from "./Icon";
import Loading from "./tesComponent/Loading";
import Nav from "./tesComponent/Nav";
import Menu from "./tesComponent/Menu";
function Messages() {
  const messagesEndRef = useRef(null);
  const { img, name } = useGlobal();
  const collectionRef = collection(db, "messages");
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const unsubscribeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // New state for error handling
  const {nav,setNav} = useGlobal();
  const handleClick = async () => {

    if (!msg.trim()) {
      return; // Do nothing if the input is empty or contains only whitespace
    }
    else{
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
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  const getMessages = () => {
    try {
      const q = query(collectionRef, orderBy("time", "asc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setIsLoading(false);
        setMsgList(updatedData);
        // You may not need to set the unsubscribe function in the state,
        // instead, use the ref to store it
      });

      unsubscribeRef.current = unsubscribe; // Store the unsubscribe function in the ref
    } catch (err) {
      console.error(err);
      setIsLoading(false);
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
  const deleteMsg = async (id) => {
    const msgDoc = doc(db, "messages", id);
    await deleteDoc(msgDoc);
    getMessages();
  };

  useEffect(() => {
    // Scroll to the bottom when the component updates with new messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgList]);

  return (
    <div className="flex  flex-col bg-white px-6 items-center justify-center pb-20 ">
      {/* <p className="font-[600] text-black text-center mt-10 mb-10 text-[22px]  ">
        BetaTalk
      </p> */}
      <Nav/>
      <AnimatePresence>
        {nav && <Menu/>}
      </AnimatePresence>
      <div className="flex z-40 gap-2 fixed sm:left-0 left-1 bottom-6 sm:bottom-10 w-full px-8 items-center mt-6 items-center  sm:justify-center justify-start ">
        <input
          type="text"
          placeholder="Unleash Your Thoughts Anonymously"
          value={msg}
          onKeyPress={handleKeyPress}
          onChange={handleMsgChange}
          className="w-full max-w-[500px] text-black outline-none bg-white placeholder-text-black  border-2 border-gray-300 shadow-md px-4 py-3 sm:h-[70px] h-[60px] text-[14px] rounded-[25px] focus:border-blue-500 transition duration-300"
        />

        <motion.button
        whileTap={{
          scale:0.95
        }}
        transition={{
          duration:0.3
        }}
          className="bg-blue-500 text-white h-[50px] px-3 w-[50px] flex items-center justify-center rounded-[50%] transition duration-300 hover:bg-blue-600 focus:outline-none"
          onClick={handleClick}
        >
          <VscSend size={30} />
        </motion.button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? <Loading/> : <motion.div layout className="flex flex-col  gap-4  capitalize  ">
        {msgList.map((doc) => {
          return (
            // <div onClick={() => deleteMsg(doc.id)} >
            <Chat message={doc.message} time={doc.time} />
            // </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </motion.div> }
      

      <button
        className=" fixed z-40 br flex items-center justify-center h-[40px] w-[40px] rounded-[50%] bg-white bottom-[100px] right-2 text-gray-900 "
        onClick={() => {
          // Scroll to the bottom when the first button is clicked
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <VscArrowSmallDown size={30} />
      </button>
    </div>
  );
}

export default Messages;
