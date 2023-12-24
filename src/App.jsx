import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Messages from './Messages'
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import {useGlobal} from './context'
import { MdOutlineArrowBackIos } from "react-icons/md";
const App = () =>{
  const { chatRoom, setChat, setPage,room,nav,setNav,setRoom,isLight,locRooms,setLocRooms } = useGlobal();
  // Setting data in local storage
  useEffect(() => {
    // Retrieve the data from local storage
    var storedChatRoom = localStorage.getItem("chatRoom");
  
    if (storedChatRoom) {
      var parsedChatRoom = JSON.parse(storedChatRoom);
      setRoom(parsedChatRoom.roomName);
      setPage("chat");
  
      // Log the roomlist from local storage
      var storedRoomList = localStorage.getItem("roomlist");
      var parsed = JSON.parse(storedRoomList)
      setLocRooms(parsed)
      console.log(locRooms);
      
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts
  
  return(
    <div className={`min-h-screen ${isLight ? "bg-white": 'bg-gray-900'} w-screen overflow-x-hidden overflow-y-hidden `}>
        <Messages  />
      </div>
    
  )
}

export default App;
