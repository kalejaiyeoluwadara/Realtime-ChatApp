import React, { useState, useEffect } from 'react';
import { addDoc, getDocs,deleteDoc,doc, collection } from 'firebase/firestore';
import { db } from './config/firebase';
import profile from "./../src/msgcomp/images/avatars/image-amyrobson.png";
import reply from "./../src/msgcomp/images/icon-delete.svg";
function Messages() {
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
    <div>
      <div className="flex gap-3 items-center mt-20 justify-center">
        <p>Enter a message:</p>
        <input
          type="text"
          value={msg}
          onChange={handleMsgChange}
          className="w-[200px] h-[40px] rounded-[10px]"
        />
        <button onClick={handleClick} className="px-3 py-3 bg-blue-600 text-white mx-4 my-6 rounded-[6px]">Add Message</button>
      </div>

      {error && <div className="error-message">{error}</div>}
      <div className="flex flex-col items-center gap-4 text-start capitalize justify-center " >
        {
        msgList.map((doc) =>{
          return (
            <div
              className="bg-white w-[500px] rounded-[4px] sm:mt-20 mt-10 px-6 py-6 flex flex-col text-start "
              key={doc.id}
            >
              <section className=" flex items-center gap-3 ">
                <img
                  className="h-[35px] w-[35px] rounded-[50%]  "
                  src={profile}
                  alt=""
                />
                <p className="font-[600] text-[16px] ">Lora</p>
                <p className="text-gray-500 text-[13px] ">yesterday</p>
              </section>
              <section>
                <h1>{doc.message}</h1>                
              </section>
              <section className="flex  mt-4 justify-between">
                <div
                  style={{
                    backgroundColor: "hsl(228, 33%, 97%)",
                  }}
                  className="flex px-3 text-gray-700 font-[500] py-1 gap-6 "
                >
                  <span>-</span>
                  <span className="font-[600] text-blue-600 ">0</span>
                  <span>+</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={reply} alt="" />
                  <button
                    onClick={() => deleteMsg(doc.id)}
                    className="font-[600] text-[16px] text-blue-600 "
                  >
                    Delete
                  </button>
                </div>
              </section>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Messages;