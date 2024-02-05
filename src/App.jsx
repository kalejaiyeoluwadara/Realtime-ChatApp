import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useGlobal } from "./context";
import Messages from "./Messages";
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import { db } from "./config/firebase";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import chatView from "./tesComponent/chatView";
import DashBoard from "./DashBoard";
import Floating from "./pages/Floating";

const App = () => {
  const {
    uniqueId,
    setUniqueId,
    chatRoom,
    setChat,
    setPage,
    room,
    nav,
    setNav,
    setRoom,
    isLight,
    locRooms,
    setLocRooms,
    allrooms,
    setAllrooms,
  } = useGlobal();

  const [messages, setMessages] = useState([]);

  // Update localStorage when uniqueId changes
  useEffect(() => {
    localStorage.setItem("uniqueId", uniqueId);
  }, [uniqueId]);

  // Setting data in local storage
  useEffect(() => {
    // Retrieve the data from local storage
    var storedChatRoom = localStorage.getItem("chatRoom");

    if (storedChatRoom) {
      var parsedChatRoom = JSON.parse(storedChatRoom);

      var storedRoomList = localStorage.getItem("roomlist");
      var parsed = JSON.parse(storedRoomList);
      setLocRooms(parsed);
    }
  }, []);

  // classified function
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
        setAllrooms([...groups]); // Update allrooms state here
      }
    );

    return () => unsubscribe();
  }, [setAllrooms]); // Include setAllrooms in the dependency array

  return (
    <div
      className={`min-h-screen ${
        isLight ? "bg-white" : "bg-gray-900"
      } w-screen overflow-x-hidden overflow-y-hidden `}
    >
      <Messages />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
