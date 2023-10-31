import React, { useState, useEffect } from 'react';
import { addDoc, getDocs,deleteDoc,doc, collection } from 'firebase/firestore';
import { db } from './config/firebase';

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
          return(
              <div className='text-white flex gap-2 items-center justify-center px-2 py-2 rounded-[3px] bg-purple-500 ' key={doc.id} >
               <h1>{doc.message}</h1>
                <button onClick={() => deleteMsg(doc.id)} className="px-2 py-2 bg-blue-600 text-white rounded-[6px]">dlt</button>
              </div>


            )
        })
      }
      </div>
    </div>
  );
}

export default Messages;
