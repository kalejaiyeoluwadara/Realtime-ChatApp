import React, { useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdCheckmark,
  IoIosArrowDropright,
} from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useGlobal } from "../context";
import { MdLanguage, MdStyle } from "react-icons/md";
import Footer from "../tesComponent/Footer";
import { BsMoon, BsSun, BsBriefcase } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Switch = () => {
  const { isLight, setIslight } = useGlobal();

  const switchVariants = {
    initial: { x: isLight ? 0 : "100%" },
    animate: { x: isLight ? 0 : "100%" },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.div
      layout
      onClick={() => {
        setIslight(!isLight);
      }}
      className="h-[20px] w-[40px] shadow-md items-center rounded-[30px] bg-white flex relative overflow-hidden"
    >
      <motion.div
        variants={switchVariants}
        initial="initial"
        animate="animate"
        transition={switchVariants.transition}
        className={`h-full w-[20px] bg-blue-500 flex rounded-[50%] absolute top-0 
        }`}
      ></motion.div>
    </motion.div>
  );
};

function Settings() {
  const { isLight, setPage } = useGlobal();
  const [more, setMore] = useState(false);
  return (
    <div
      className={`w-screen font-[poppins] h-screen ${
        isLight ? "bg-gray-100 text-black " : "bg-gray-900 text-white"
      } `}
    >
      <nav
        className={`w-full flex justify-start items-center px-6 py-4 rounded-b-[20px] gap-6   h-[10vh] backdrop-filter backdrop-blur-md bg-opacity-30 ${
          isLight ? "bg-gray-100 shadow-md  " : "bg-gray-800 text-white"
        } `}
      >
        <IoIosArrowBack
          className="cursor-pointer"
          onClick={() => {
            setPage("roompage");
          }}
          size={25}
        />
        <p className="font-[600]  text-[18px] ">Settings</p>
      </nav>
      <main>
        <section className="mt-6 px-10">
          <h3 className="font-[600] text-[20px] ">Personalisation</h3>
          {/* box */}
          <motion.div
            layout
            className={` ${
              isLight ? "bg-gray-700" : " bg-black "
            } mt-3  py-4 text-white flex flex-col gap-4 rounded-[10px]  `}
          >
            <div className="flex border-b border-opacity-25 border-gray-100 w-full py-3 px-6 cursor-pointer justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <IoMoonOutline size={25} />
                <p className="font-[500">Dark Mode</p>
              </section>
              <Switch />
            </div>

            {/* appreance */}
            <motion.div
              transition={{
                duration: 0.3,
              }}
              className="flex h-auto border-b border-opacity-20 border-gray-100 w-full py-3 px-6 justify-between items-center"
            >
              {/* Appearance */}
              <section className="flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-2 justify-center items-center ">
                  <MdStyle size={30} />
                  <p className="font-[500">Appearance</p>
                </div>

                {/* appearance sections */}
                <AnimatePresence>
                  {more && (
                    <motion.div
                      key="appearance-section"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex flex-col h-auto text-start border-opacity-20  w-full py-2 gap-3  px-2 "
                    >
                      <p className="flex gap-2">
                        {" "}
                        <IoMdCheckmark className="opacity-[0]" size={25} /> Anon
                        Like
                      </p>
                      <p className="flex gap-2">
                        {" "}
                        <IoMdCheckmark
                          className="opacity-[0.7]"
                          size={25}
                        />{" "}
                        Chatty
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
              <section
                onClick={() => {
                  setMore(!more);
                }}
                className="cursor-pointer"
              >
                {more ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </section>
              {/* <Switch /> */}
            </motion.div>

            <div className="flex  w-full py-1 px-6 justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <MdLanguage size={30} />
                <p className="font-[500">Language</p>
              </section>
              <section className="flex gap-2 items-center">
                <p>Engl</p>
                <IoIosArrowDropright />
              </section>
              {/* <Switch /> */}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;
