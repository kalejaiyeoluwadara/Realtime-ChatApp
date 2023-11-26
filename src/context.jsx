import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from './assets/money.png'
function AppProvider({ children }) {
 const [name,setName] = useState("User101");
  const [signIn, setSignIn] = useState(false);
  const [view, setView] = useState(true);
 const [img, setImg] = useState(money);
  return (
    <AppContext.Provider value={{img,setImg,signIn,view,name,setName}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
