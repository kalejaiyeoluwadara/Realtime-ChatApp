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
