import React from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowDropright,
} from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useGlobal } from "../context";
import { MdLanguage, MdStyle } from "react-icons/md";
import Footer from "../tesComponent/Footer";
import { BsMoon, BsSun, BsBriefcase } from "react-icons/bs";
import { motion } from "framer-motion";

const Switch = () => {
  const { isLight, setIslight } = useGlobal();
  return (
    <motion.div
      layout
      className={`h-[20px] duration-[0.5] w-[40px] shadow-md items-center rounded-[30px] bg-white flex justify-start ${
        isLight ? "justify-end" : "justify-start"
      } relative `}
    >
      <div
        onClick={() => {
          setIslight(!isLight);
        }}
        className="bg-blue-500 h-[23px] w-[23px] rounded-[50%] shadow-md absolute "
      ></div>
    </motion.div>
  );
};
function Settings() {
  const { isLight, setPage } = useGlobal();
  return (
    <div
      className={`w-screen font-[poppins] h-screen ${
        isLight ? "bg-white text-black " : "bg-gray-900"
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
          <div
            className={`bg-black ${
              isLight ? "text-white" : "text-white"
            } mt-3  py-4 flex flex-col gap-4 rounded-[10px]  `}
          >
            <div className="flex border-b border-opacity-25 border-gray-100 w-full py-3 px-6 cursor-pointer justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <IoMoonOutline size={25} />
                <p className="font-[500">Dark Mode</p>
              </section>
              <Switch />
            </div>
            <div className="flex border-b border-opacity-20 border-gray-100 w-full py-3 px-6 justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <MdStyle size={30} />
                <p className="font-[500">Appearance</p>
              </section>
              <section>
                <IoIosArrowDown />
              </section>
              {/* <Switch /> */}
            </div>

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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;
