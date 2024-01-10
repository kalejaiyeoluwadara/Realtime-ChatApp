import React, { useEffect, useState } from "react";
import { MdSettings, MdOutlineAdd } from "react-icons/md";
import { useGlobal } from "../context";
import Footer from "../tesComponent/Footer";
import Room from "../tesComponent/Room";
const Empty = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-full  ">
      <img
        className="h-[300px] w-[300px] "
        src="https://cdn3d.iconscout.com/3d/premium/thumb/empty-box-7328018-5980405.png?f=webp"
        alt=""
      />
      <p className="font-[600]">You haven't joined any room yet.</p>
    </div>
  );
};
function Rooms() {
  const { locRooms, setLocRooms, setPage, isLight } = useGlobal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load rooms from localStorage
    const roomsList = localStorage.getItem("roomlist");
    if (roomsList) {
      setLocRooms(JSON.parse(roomsList));
    }

    // Delete the localStorage item "roomhist"
    setLoading(false);
  }, []);

  return (
    <main
      className={`w-screen ${
        isLight ? "bg-gray-100 text-black" : "bg-gray-900 text-white  "
      } min-h-screen  `}
    >
      <nav
        className={`fixed z-40  ${
          isLight ? "bg-white text-black" : "bg-gray-900 text-white  "
        }  pb-4 border-b border-white border-opacity-5 gap-3 flex items-center  justify-between px-6 py-3 w-screen `}
      >
        <img
          className="h-[40px] w-[40px] rounded-[50%] "
          src="https://images.unsplash.com/photo-1704072384017-788b1ccbaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <input
          className={` ${
            isLight ? "bg-gray-100 text-black" : "bg-gray-900 text-white  "
          } outline-none placeholder:font-[600] placeholder:mb-2  px-3 border border-white border-opacity-[0.1] rounded-[20px] w-[230px] `}
          placeholder="search rooms"
          type="text"
        />
        <MdSettings
          onClick={() => {
            setPage("settings");
          }}
          size={25}
        />
      </nav>
      <main className="mt-[75px] gap-2 mb-[120px] flex flex-col items-center ">
        {loading ? (
          <p>Loading...</p>
        ) : locRooms.length === 0 ? (
          <Empty />
        ) : (
          locRooms.map((room, id) => <Room key={id} name={room} />)
        )}
      </main>
      <Footer />

      {/* create button */}
      <div
        onClick={() => {
          setPage("joinRoom");
        }}
        className="absolute h-[60px] w-[60px] rounded-[50%] flex items-center justify-center bottom-[100px] right-3 bg-blue-500 text-white "
      >
        <MdOutlineAdd size={35} />
      </div>
    </main>
  );
}

export default Rooms;
