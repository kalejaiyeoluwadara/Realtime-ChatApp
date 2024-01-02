import React, { useState, useEffect, useRef } from "react";

import { useGlobal } from "./context";
import { motion, AnimatePresence } from "framer-motion";
import { VscSend, VscArrowSmallDown } from "react-icons/vsc";
import Chat from "./tesComponent/Chat";
import Loading from "./tesComponent/Loading";
import Nav from "./tesComponent/Nav";
import Menu from "./tesComponent/Menu";
import CreateRoom from "./tesComponent/CreateRoom";
import JoinRoom from "./tesComponent/JoinRoom";
import ChatRoom from "./tesComponent/ChatRoom";
import Home from "./tesComponent/Home";
import DashBoard from "./DashBoard";

// New InputBox SubComponent
function Messages() {
  const messagesEndRef = useRef(null);
  const {
    nav,
    setNav,
    general,
    setGeneral,
    createRoom,
    setCreateRoom,
    joinRoom,
    isLight,
    setJoinRoom,
    dashBoard,
  } = useGlobal();
  const { chat, room } = useGlobal();
  return (
    <div
      className={`flex ${
        isLight ? "bg-white" : "bg-gray-900"
      } flex-col  px-6 items-center justify-center`}
    >
      <AnimatePresence>
        {general && <Home key="home" />}
        {createRoom && <CreateRoom key="createRoom" />}
        {joinRoom && <JoinRoom key="joinRoom" />}
        {chat && <ChatRoom key="chatRoom" room={room} />}
        {dashBoard && <DashBoard />}
      </AnimatePresence>
    </div>
  );
}

export default Messages;
