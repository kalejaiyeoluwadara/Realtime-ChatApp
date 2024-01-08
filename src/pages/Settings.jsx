import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useGlobal } from "../context";
import Footer from "../tesComponent/Footer";

function Settings() {
  const { isLight } = useGlobal();
  return (
    <div className="w-screen font-[poppins] h-screen bg-gray-900 ">
      <nav
        className={`w-full flex justify-start items-center px-6 py-4 rounded-b-[20px] gap-6  bg-gray-800 h-[10vh] backdrop-filter backdrop-blur-md bg-opacity-30 ${
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
            <div>
              <p>Dark Mode</p>
            </div>
            <div>
              <p>Appearance</p>
            </div>
            <div>
              <p>Language</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;
