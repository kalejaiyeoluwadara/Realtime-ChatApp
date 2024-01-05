import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from "./assets/money.png";
import { v4 as uuidv4 } from "uuid";
function AppProvider({ children }) {
  const [nav, setNav] = useState(false);
  const [general, setGeneral] = useState(true);
  const [createRoom, setCreateRoom] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);
  const [chat, setChat] = useState(false);
  const [chatRoom, setChatRoom] = useState(false);
  const [room, setRoom] = useState("");
  const [isLight, setIslight] = useState(false);
  const [roomsList, setRoomsList] = useState([]);
  const [locRooms, setLocRooms] = useState([]);
  const [dashBoard, setDashBoard] = useState(false);
  const [uniqueId, setUniqueId] = useState(
    localStorage.getItem("uniqueId") || uuidv4()
  );
  //Pages
  const [roomPage, setRoomPage] = useState(false);
  const [settings, setSettings] = useState(false);
  const [search, setSearch] = useState(false);
  const genRandImage = () => {
    const imgs = [
      "https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb3VwfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
    ];
    // Get a random index from the shortened array
    const randomIndex = Math.floor(Math.random() * imgs.length);
    // Return the random image URL
    return imgs[randomIndex];
  };
  const handleJoinClick = () => {
    // Save the room name in local storage
    localStorage.setItem("chatRoom", JSON.stringify({ roomName: room }));

    // Update roomsList state based on the previous state
    //  setRoomsList((prevRoomsList) => [...prevRoomsList, room]);

    // Save the updated roomsList to local storage
    localStorage.setItem("roomhist", JSON.stringify([...locRooms, room]));

    setChat(true);
    setJoinRoom(false);
  };

  const setPage = (page) => {
    // Reset other pages
    setGeneral(false);
    setChatRoom(false);
    setCreateRoom(false);
    setJoinRoom(false);
    setChat(false);
    setNav(false);
    setDashBoard(false);
    setSettings(false);
    setSearch(false);
    setRoomPage(false);
    // Set the desired page
    if (page === "general") {
      setGeneral(true);
    } else if (page === "createRoom") {
      setCreateRoom(true);
    } else if (page === "joinRoom") {
      setJoinRoom(true);
    } else if (page === "chat") {
      setChat(true);
    } else if (page === "dashboard") {
      setDashBoard(true);
    } else if (page === "roompage") {
      setRoomPage(true);
    } else if (page === "search") {
      setSearch(true);
    } else if (page === "settings") {
      setSettings(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        genRandImage,
        dashBoard,
        uniqueId,
        setUniqueId,
        locRooms,
        setLocRooms,
        isLight,
        setIslight,
        handleJoinClick,
        room,
        setRoom,
        nav,
        chat,
        setChat,
        setNav,
        general,
        setGeneral,
        createRoom,
        setCreateRoom,
        joinRoom,
        setJoinRoom,
        setPage,
        settings,
        roomPage,
        search,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
