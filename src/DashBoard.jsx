import React, { useState, useEffect } from "react";
import { db } from "./config/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
  deleteDoc,
  allrooms,
  setAllrooms,
} from "firebase/firestore";
import { useGlobal } from "./context";

function DashBoard() {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);
  const [roomIsEmpty, setRoomIsEmpty] = useState(false);

  async function deleteDataByRoom(roomName) {
    try {
      const messagesRef = collection(db, "rooms");

      const roomQuery = query(messagesRef, where("room", "==", roomName));
      const roomSnapshot = await getDocs(roomQuery);

      // Delete each document in the query results
      roomSnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log(`Successfully deleted data for room: ${roomName}`);
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  }

  // Example usage:
  // Assuming 'roomToDelete' is the room name you want to delete

  useEffect(() => {
    const messagesRef = collection(db, "rooms");

    const unsubscribe = onSnapshot(
      query(messagesRef, orderBy("time")),
      (snapshot) => {
        let fetchedMessages = [];
        let groups = new Set();

        snapshot.forEach((doc) => {
          const message = { ...doc.data(), id: doc.id };
          fetchedMessages.push(message);
          groups.add(message.room);
        });

        setMessages(fetchedMessages);
        setAllrooms([...groups]);
        setLoading(false);
        setRoomIsEmpty(fetchedMessages.length === 0);
      }
    );

    return () => unsubscribe();
  }, []);

  console.log(allrooms.length);
  const { dashBoard, setPage } = useGlobal();
  return (
    <div className="px-3 py-6">
      <h1>Total Rooms: {allrooms.length}</h1>
      <p
        className="absolute cursor-pointer right-4 top-4  "
        onClick={() => {
          setPage("general");
        }}
      >
        close
      </p>
      <div className="flex gap-[10px] py-4 w-full flex-wrap  min-h-[100vh] justify-evenly text-black ">
        {allrooms.map((room, id) => {
          return (
            <section
              onClick={() => {
                deleteDataByRoom(room);
                alert(`deleting room ${room}`);
              }}
              key={id}
              className="h-[100px] cursor-pointer flex items-center justify-center w-[150px] font-[600] rounded-[10px] bg-gray-800 text-white shadow-sm "
            >
              {room}
            </section>
          );
        })}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {/* {messages.map((message) => (
            // <li key={message.id}>{message.content}</li>

          ))} */}
        </ul>
      )}
      {roomIsEmpty && <p>No messages in the room.</p>}
    </div>
  );
}

export default DashBoard;
