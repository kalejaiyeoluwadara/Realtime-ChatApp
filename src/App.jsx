import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Form from "./form";
import { db } from "./config/firebase";
import { getDocs,addDoc, deleteDoc, collection } from "firebase/firestore";
import Google from "./Google";
import Messages from "./Messages";
import Msg from "./msgcomp/Msg";
import { useGlobal } from "./context";
const App = () => {
  const {name,setName,img} = useGlobal();
 console.log(img);
  return (
    <div className=" flex flex-col items-center ">
      {name === "User101" ? <Google /> : <Messages />}
    </div>
  );
};

export default App;
