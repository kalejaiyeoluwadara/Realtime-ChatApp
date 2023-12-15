import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useGlobal } from "./context";
import { motion } from "framer-motion";
import Chat from "./tesComponent/Chat";
import Loading from "./tesComponent/Loading";
import Foot from "./tesComponent/Foot";
import { db } from "./config/firebase";

function General({ msgList, messagesEndRef }) {
  const { setNav } = useGlobal();
  const collectionRef = collection(db, "messages");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    if (!msg.trim()) {
      return;
    }

    const date = new Date();
    try {
      await addDoc(collectionRef, { message: msg, time: date });
      setMsg("");
    } catch (err) {
      console.error(err);
      setError("Failed to add the message");
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

  useEffect(() => {
    const getMessages = async () => {
      try {
        setIsLoading(true);
        // Add your code to fetch messages here
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError("Failed to fetch messages");
      }
    };

    getMessages();
  }, [collectionRef]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <motion.div layout className="flex flex-col gap-4 capitalize">
          {msgList.map((message) => (
            <Chat key={message.id} message={message.message} time={message.time} />
          ))}
          <div ref={messagesEndRef}></div>
        </motion.div>
      )}
      <Foot
        handleKeyPress={handleKeyPress}
        handleMsgChange={handleMsgChange}
        handleClick={handleClick}
      />
    </main>
  );
}

export default General;
