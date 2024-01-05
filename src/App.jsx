import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Messages from "./Messages";
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import { useGlobal } from "./context";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import chatView from "./tesComponent/chatView";
import DashBoard from "./DashBoard";
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
  } = useGlobal();

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
      // setRoom(parsedChatRoom.roomName);
      // setPage("chat");
      // Log the roomlist from local storage
      var storedRoomList = localStorage.getItem("roomlist");
      var parsed = JSON.parse(storedRoomList);
      setLocRooms(parsed);
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div
      className={`min-h-screen ${
        isLight ? "bg-white" : "bg-gray-900"
      } w-screen overflow-x-hidden overflow-y-hidden `}
    >
      <Messages />
      {/* <chatView/> */}
    </div>
  );
};

export default App;
