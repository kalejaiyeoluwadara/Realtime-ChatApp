import React, { useState, useEffect, useRef } from "react";
import { db } from "./../config/firebase";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowDownward } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
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
import Chatty from "./Chat2";
import Loading from "./Loading"; // Import your loading component here
import Back from "./Back";

const InputBox = ({ msg, handleMsgChange, handleClick }) => {
  const { isLight } = useGlobal();
  const textareaStyle = {
    resize: "none",
  };
  return (
    <div className="flex z-40 gap-2 fixed sm:left-0 left-1 bottom-6 sm:bottom-10 w-full px-8 items-center mt-6 sm:justify-center justify-start">
      <textarea
        style={textareaStyle}
        type="text"
        placeholder="Anon Message"
        value={msg}
        onChange={handleMsgChange}
        onClick={handleClick}
        className={` sm:w-[500px] w-full overflow-y-hidden text-black outline-none ${
          isLight ? "bg-white" : "bg-gray-800 text-white"
        } placeholder-text-black border-2 border-gray-300 shadow-md px-4 py-4 sm:h-[70px] h-[60px] text-[14px] rounded-[30px] focus:border-blue-500 text-left transition duration-300 whitespace-pre-wrap text-clip overflow-auto`}
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

// scroll button

function ScrollToBottomButton({ messagesEndRef }) {
  const { isLight } = useGlobal();
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.scrollY + window.innerHeight ===
        document.documentElement.scrollHeight;

      // Set visibility based on scroll position
      setIsVisible(!isAtBottom);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          whileTap={{
            scale: 0.4,
            transition: {
              duration: 0.4,
            },
          }}
          onClick={handleScrollToBottom}
          className={`fixed bottom-[100px]  right-6  backdrop-filter backdrop-blur-md shadow-md bg-opacity-30  ${
            isLight
              ? "text-black border border-gray-400  border-opacity-40 "
              : "text-white border border-gray-100 border-opacity-20  "
          } h-12 w-12 flex items-center justify-center rounded-full transition duration-300  `}
        >
          <FaArrowDownLong />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

//Message List
const MessageList = ({ msgList, messagesEndRef }) => {
  // const {uniqueId} = useGlobal()
  return (
    <motion.div
      layout
      className="flex items-center justify-center flex-col w-screen  px-6 gap-8 capitalize"
    >
      {msgList.map((doc) => (
        // <Chat key={doc.id} uniqueId={doc.ID} message={doc.text} time={doc.time} />
        <Chatty
          key={doc.id}
          uniqueId={doc.ID}
          message={doc.text}
          time={doc.time}
        />
      ))}
      <div ref={messagesEndRef}></div>
      <ScrollToBottomButton messagesEndRef={messagesEndRef} />
    </motion.div>
  );
};
// chatroom
function ChatRoom({ room }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [roomIsEmpty, setRoomIsEmpty] = useState(false);
  const messagesRef = collection(db, "rooms");
  const messagesEndRef = useRef(null);
  const { isLight, uniqueId, setUniqueId } = useGlobal();
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
      // console.log("Number od messages in room :",fetchedMessages.length)
      const groups = new Set();
      fetchedMessages.forEach((message) => {
        // Assuming your message object has a 'group' property
        groups.add(message.room);
      });
      // console.log(`Different groups in room "${room}":`, Array.from(groups));
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
          ID: uniqueId,
        });
        setNewMessage("");
      } catch (err) {
        console.error(err);
        // Handle the error or set an error state if needed
      }
    }
  };

  const handleMsgChange = (event) => {
    setNewMessage(event.target.value);
  };

  const { nav, setNav, setPage } = useGlobal();

  return (
    <motion.main
      className={` ${
        isLight ? "bg-[#F5F5F5] text-black " : "bg-gray-900"
      }  w-screen min-h-screen flex relative items-center py-10 pt-20 flex-col  `}
    >
      <Back />
      <section className="pb-10 flex flex-col items-center justify-start w-screen">
        {loading ? (
          <Loading />
        ) : roomIsEmpty ? (
          <p className="text-gray-500  flex items-center justify-center text-xl">
            This room is empty.
          </p>
        ) : (
          <MessageList msgList={messages} messagesEndRef={messagesEndRef} />
        )}
      </section>
      <InputBox
        msg={newMessage}
        handleMsgChange={handleMsgChange}
        handleClick={handleSubmit}
      />
      {!isLight && <Shadow />}
    </motion.main>
  );
}

const Shadow = () => {
  return <div className=" fixed bottom-0 z-20 bi w-screen h-[10vh] "></div>;
};

export default ChatRoom;
