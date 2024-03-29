import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useGlobal } from "../context";
function Floating() {
  const { isLight } = useGlobal();
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
    <div className="h-full flex relative items-center justify-center flex-col w-full ">
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
            className="px-3 text-white py-2 absolute rounded-[5px] m-4 bg-blue-500"
            style={style}
            animate={{
              top: randTop,
              left: randLeft,
            }}
            transition={{
              duration:
                Math.floor(Math.random() * 10) >= 1
                  ? Math.floor(Math.random() * 10)
                  : 2,
              type: "spring",
            }}
          >
            {m}
          </motion.div>
        );
      })}
    </div>
  );
}

export default Floating;
