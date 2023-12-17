import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from './assets/money.png'
function AppProvider({ children }) {
 const [nav,setNav] = useState(false);
 const [general,setGeneral] = useState(true);
 const [createRoom,setCreateRoom] = useState(false);
 const [joinRoom,setJoinRoom] = useState(false);
 const [chat,setIsInChat] = useState(false);
 const [chatRoom,setChatRoom] = useState(false)
 const setPage = (page) => {
  // Reset other pages
  setGeneral(false);
  setChatRoom(false)
  setCreateRoom(false);
  setJoinRoom(false);
  setIsInChat(false);
  // Set the desired page
  if (page === "general") {
    setGeneral(true);
  } else if (page === "createRoom") {
    setCreateRoom(true);
  } else if (page === "joinRoom") {
    setJoinRoom(true);
  }
  else if (page === "chatRoom") {
    setChatRoom(true);
  }
};
  return (
    <AppContext.Provider value={{nav,setNav,general,setGeneral,createRoom,setCreateRoom,joinRoom,setJoinRoom,setPage,setIsInChat}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
