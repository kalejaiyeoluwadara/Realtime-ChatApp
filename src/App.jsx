import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Messages from './Messages'
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
// import {useGlobal} from './context'
const App = () =>{
  return(
    <Messages/>
    
  );
};

export default App;
