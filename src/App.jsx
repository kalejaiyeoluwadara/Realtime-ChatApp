import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Messages from './Messages'
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import {useGlobal} from './context'
import { MdOutlineArrowBackIos } from "react-icons/md";
const App = () =>{
  const {nav,setNav} = useGlobal()
  return(
    <>
      <Messages  />
      {/* <div
  className="fixed cursor-pointer shadow-md h-[40px] rounded-[50%] bg-white flex items-center justify-center w-[40px] z-20 text-black left-3 top-3"
  style={{ pointerEvents: "auto" }}
>
  <MdOutlineArrowBackIos
    onClick={() => {
      console.log("Hello");
      setNav(true);
    }}
    size={20}
  />
</div> */}

    </>
    
  );
};

export default App;
