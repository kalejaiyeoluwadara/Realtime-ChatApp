import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import money from './assets/money.png'
function AppProvider({ children }) {
 const [nav,setNav] = useState(false);
  return (
    <AppContext.Provider value={{nav,setNav}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
