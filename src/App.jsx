import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Messages from './Messages'
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import {useGlobal} from './context'
import { MdOutlineArrowBackIos } from "react-icons/md";
const App = () =>{
  const { chatRoom, setChat, setPage,room,nav,setNav } = useGlobal();
  

  return(
    <>
      <Messages  />

    </>
    
  );
};

export default App;
