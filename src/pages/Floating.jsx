import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function Floating() {
  const [msg, setMsg] = useState([
    "LOL 😂",
    "Hey! 🌟",
    "Epic 🚀",
    "Chillin' 😎",
    "Haha! 🙌",
    "Hala ",
    "Smile 😃",
    "Rock 🤘",
    "Cheers! 🥳",
    "Suu",
    "Awesome!",
    "Woot! 🎉",
    "Yay!",
    "Cool 😎",
    "Greetings! 👋",
    "Party time! 🥳",
    "Hello!",
    "Good vibes ✨",
    "Fantastic!",
    "Enjoy! 🌈",
  ]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMsg((prevMsg) => {
        return prevMsg.map((m) => m);
      });
    }, 1500); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen flex relative items-center justify-center flex-col w-screen ">
      {msg.map((m, index) => {
        const randTop = Math.floor(Math.random() * window.innerHeight);
        const randLeft = Math.floor(Math.random() * window.innerWidth);
        const style = {
          top: randTop,
          left: randLeft,
        };

        return (
          <motion.div
            key={index}
            className="px-3 py-2 absolute rounded-[5px] m-4 bg-blue-600"
            style={style}
            animate={{
              top: randTop,
              left: randLeft,
            }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            {m}
          </motion.div>
        );
      })}
    </div>
  );
}

export default Floating;
