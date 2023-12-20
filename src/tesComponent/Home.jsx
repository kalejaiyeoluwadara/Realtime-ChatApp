import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdMeetingRoom } from "react-icons/md";
import { useGlobal } from "../context";
function Home() {
  const { setPage } = useGlobal();
  return (
    <div className="h-screen absolute top-0  bg-white w-screen text-black flex flex-col items-center justify-center ">
      <div className="flex gap-3 items-center justify-start flex-col ">
      <section
        onClick={() => {
          setPage("createRoom");
        }}
        className="flex bg-gradient-to-r from-blue-600 to-blue-500 text-white cursor-pointer rounded-[3px]  w-[230px] justify-center gap-3 items-center px-3 py-2  "
      >
        <VscGitPullRequestCreate size={25} className="" />
        <p className="font-[600] ">Create a chat Room</p>
      </section>
      <section
        onClick={() => {
          setPage("joinRoom");
        }}
        className="flex bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer shadow-sm justify-center  w-[230px] gap-[3px] items-center px-3 py-2 "
      >
        <MdMeetingRoom size={25} className="" />
        <p className="font-[600]  ">Join a chat Room</p>
      </section>
      </div>
    </div>
  );
}

export default Home;
