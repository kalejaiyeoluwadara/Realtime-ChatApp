import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from './assets/money.png'
function AppProvider({ children }) {
 const [nav,setNav] = useState(true);
 const [general,setGeneral] = useState(true);
 const [createRoom,setCreateRoom] = useState(false);
 const [joinRoom,setJoinRoom] = useState(false);
 const [chat,setChat] = useState(false);
 const [chatRoom,setChatRoom] = useState(false)
 const [room,setRoom] = useState("");
 const setPage = (page) => {
  // Reset other pages
  setGeneral(false);
  setChatRoom(false)
  setCreateRoom(false);
  setJoinRoom(false);
  setChat(false)
  // Set the desired page
  if (page === "general") {
    setGeneral(true);
  } else if (page === "createRoom") {
    setCreateRoom(true);
  } else if (page === "joinRoom") {
    setJoinRoom(true);
  }
  
};
  return (
    <AppContext.Provider value={{room,setRoom,nav,chat,setChat,setNav,general,setGeneral,createRoom,setCreateRoom,joinRoom,setJoinRoom,setPage}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
