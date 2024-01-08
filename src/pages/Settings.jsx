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

const Switch = () => {
  return (
    <div className="h-[20px] w-[40px] shadow-md items-center rounded-[30px] bg-white flex justify-start relative ">
      <div className="bg-blue-500 h-[23px] w-[23px] rounded-[50%] shadow-md absolute "></div>
    </div>
  );
};
function Settings() {
  const { isLight } = useGlobal();
  return (
    <div className="w-screen font-[poppins] h-screen bg-gray-900 ">
      <nav
        className={`w-full flex justify-start items-center px-6 py-4 rounded-b-[20px] gap-6   h-[10vh] backdrop-filter backdrop-blur-md bg-opacity-30 ${
          isLight ? "bg-white shadow-sm text-black " : "bg-gray-800 text-white"
        } `}
      >
        <IoIosArrowBack size={25} />
        <p className="font-[600]  text-[18px] ">Settings</p>
      </nav>
      <main>
        <section className="mt-6 px-10">
          <h3 className="font-[600] text-[20px] ">Personalisation</h3>
          <div className="bg-black mt-2 px-6 py-4 flex flex-col gap-4 rounded-[10px]  ">
            <div className="flex justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <IoMoonOutline size={25} />
                <p className="font-[500">Dark Mode</p>
              </section>
              <Switch />
            </div>
            <div className="flex justify-between items-center">
              <section className="flex gap-2 justify-center items-center">
                <MdStyle size={30} />
                <p className="font-[500">Appearance</p>
              </section>
              <section>
                <IoIosArrowDown />
              </section>
              {/* <Switch /> */}
            </div>

            <div className="flex justify-between items-center">
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
