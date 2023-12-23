import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from './assets/money.png'
function AppProvider({ children }) {
 const [nav,setNav] = useState(false);
 const [general,setGeneral] = useState(true);
 const [createRoom,setCreateRoom] = useState(false);
 const [joinRoom,setJoinRoom] = useState(false);
 const [chat,setChat] = useState(false);
 const [chatRoom,setChatRoom] = useState(false)
 const [room,setRoom] = useState("");
 const [isLight,setIslight] = useState(true);
//  const [desk,setDesk] = useState
 const handleJoinClick = () => {
  // Save the room name in local storage
  localStorage.setItem('chatRoom', JSON.stringify({ roomName: room }));
  
  // Set the chat state and close the join room section
  setChat(true);
  setJoinRoom(false);
};


 const setPage = (page) => {
  // Reset other pages
  setGeneral(false);
  setChatRoom(false)
  setCreateRoom(false);
  setJoinRoom(false);
  setChat(false)
  setNav(false)
  // Set the desired page
  if (page === "general") {
    setGeneral(true);
  } else if (page === "createRoom") {
    setCreateRoom(true);
  } else if (page === "joinRoom") {
    setJoinRoom(true);
  }
  else if (page === "chat") {
    setChat(true);
  }
  
};

  return (
    <AppContext.Provider value={{isLight,setIslight,handleJoinClick,room,setRoom,nav,chat,setChat,setNav,general,setGeneral,createRoom,setCreateRoom,joinRoom,setJoinRoom,setPage}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
