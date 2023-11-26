import React, { useState, useEffect } from 'react';
import { addDoc, getDocs,deleteDoc,doc, collection } from 'firebase/firestore';
import { db } from './config/firebase';
import profile from "./../src/msgcomp/images/avatars/image-amyrobson.png";
import reply from "./../src/msgcomp/images/icon-delete.svg";
import { useGlobal } from './context';
import Reveal from './reveal';
import { motion } from 'framer-motion';
function Messages() {
  const {img,name} = useGlobal();
  const collectionRef = collection(db, 'messages');
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
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

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  }

  const getMessages = async () => {
    try {
      const snapShot = await getDocs(collectionRef);
      const filteredData = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setMsgList(filteredData);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch messages"); // Set an error message
    }
  }

  useEffect(() => {
    getMessages();
  }, []);
  const deleteMsg = async (id) =>{
    const msgDoc = doc(db,"messages",id);
    await deleteDoc(msgDoc);
    getMessages();
  }
  return (
    <div className="px-2 pb-20 ">
      <h1 className="font-[600] text-white text-center mt-10 text-[22px]  ">
        Real Time Msg...
      </h1>
        <div className="flex z-40 w-screen gap-1 fixed sm:left-0 left-6 bottom-3 sm:bottom-10 items-center mt-6 sm:justify-center justify-start ">
          <input
            type="text"
            placeholder="Enter ur msg here...😎"
            value={msg}
            onChange={handleMsgChange}
            className="w-[240px] sm:w-[400px] outline-none bg-gray-700 placeholder:text-white text-white px-3 py-1 sm:h-[100px] h-[50px] rounded-[19px]"
          />
          <button
            onClick={handleClick}
            className="px-3 py-3 bg-blue-600 text-white mx-4 my-6 rounded-[6px]"
          >
            send
          </button>
        </div>

      {error && <div className="error-message">{error}</div>}
      <motion.div 
      layout
      className="flex flex-col  items-center gap-4 text-start capitalize justify-center ">
        {msgList.map((doc) => {
          return (
            <motion.div
            initial={{x:-100}}
          transition={{
            duration:0.5
          }}
          whileInView={{x:0}}
              className="bg-gray-800 gap-3 text-white sm:w-[500px] w-auto rounded-[4px] sm:mt-20 mt-10 px-6 py-6 flex flex-col text-start "
              key={doc.id}
            >
              <section className=" flex items-center gap-3 ">
                <img
                  className="h-[35px] w-[35px] rounded-[50%]  "
                  src={img}
                  alt=""
                />
                <p className="font-[600] text-[16px] ">{name}</p>
                <p className="text-gray-500 text-[13px] ">today</p>
              </section>
              <section>
                <h1>{doc.message}</h1>
              </section>
              <section className="flex  mt-4 gap-3">
                <div
                  style={
                    {
                      // backgroundColor: "hsl(228, 33%, 97%)",
                    }
                  }
                  className="flex px-3  bg-gray-900 rounded-[3px] text-gray-700 font-[500] py-1 gap-6 "
                >
                  <span>-</span>
                  <span className="font-[600] text-blue-600 ">0</span>
                  <span>+</span>
                </div>
                <div className="flex  items-center gap-1 ">
                  <img src={reply} alt="" />
                  <button
                    onClick={() => deleteMsg(doc.id)}
                    className="font-[600] text-[16px] text-blue-600 "
                  >
                    Delete
                  </button>
                </div>
              </section>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Messages;
