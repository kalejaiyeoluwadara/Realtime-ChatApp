import React, { useState, useEffect } from "react";
import { useGlobal } from "../context";
import { LuMoreVertical } from "react-icons/lu";
import {
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { format, differenceInHours, isYesterday, isToday } from "date-fns";

function formatShortTime(date) {
  if (isToday(date)) {
    const hoursAgo = differenceInHours(new Date(), date);
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (isYesterday(date)) {
    return "Yesterday";
  } else {
    return format(date, "MMM d");
  }
}

function Room({ name }) {
  const { genRandImage, setPage, setRoom } = useGlobal();
  const [img, setImg] = useState("");
  const [lastText, setLastText] = useState("");
  const [formattedLastTime, setFormattedLastTime] = useState("");
  const [hover, setHover] = useState(false);
  useEffect(() => {
    setImg(genRandImage());
  }, []);

  useEffect(() => {
    const fetchLastMessage = async () => {
      const messagesRef = query(
        collection(db, "rooms"),
        where("room", "==", name),
        orderBy("time")
      );

      const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
        let fetchedMessages = [];
        snapshot.forEach((doc) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });

        if (fetchedMessages.length > 0) {
          const lastMessage = fetchedMessages[fetchedMessages.length - 1];
          setLastText(lastMessage.text);
          setFormattedLastTime(formatShortTime(lastMessage.time.toDate()));
        }
      });

      return unsubscribe;
    };

    fetchLastMessage();
  }, [name]);

  return (
    <section
      onMouseOver={() => {
        console.log("yes");
        setHover(true);
      }}
      onClick={() => {
        setRoom(name);
        setPage("chat");
      }}
      className="w-[98%] relative px-4 cursor-pointer items-center flex h-[80px]  "
    >
      <div>
        <img
          className="h-[50px] mr-3 w-[50px] rounded-[50%] "
          src={img}
          alt=""
        />
      </div>
      <div className="flex ">
        <section className="">
          <h3 className="font-[500] capitalize text-[20px]">{name}</h3>
          <p className="opacity-[0.8]">{lastText}</p>
        </section>
        <div className="flex  mt-1 relative ml-5 ">
          <p className="absolute opacity-[0.5] -left-2 -top-1 ">.</p>
          <p className="opacity-[0.5]">{formattedLastTime}</p>
        </div>
      </div>
      <div className={"text-white absolute right-4 "}>
        {/* <span className="bg-blue-600 absolute right-8 top-6 h-[10px] w-[10px] rounded-[50%] "></span> */}
        <LuMoreVertical size={23} />
      </div>
    </section>
  );
}

export default Room;
