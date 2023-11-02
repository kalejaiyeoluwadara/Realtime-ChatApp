import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Form from "./form";
import { db } from "./config/firebase";
import { getDocs,addDoc, deleteDoc, collection } from "firebase/firestore";
import Google from "./Google";
import Messages from "./Messages";
import Msg from "./msgcomp/Msg";
import { useGlobal } from "./context";
import Storage from "./Storage";
const App = () => {
  const {name,setName,signIn,view,img} = useGlobal();
  return (
    <div className=" flex flex-col items-center ">
      {signIn && <Google />}
      {view && <Messages />} 
      {/*<Storage/>*/}
    </div>
  );
};

export default App;
