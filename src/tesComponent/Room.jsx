import React, { useState, useEffect } from "react";
import { useGlobal } from "../context";
function Room({ name }) {
  const { genRandImage, setPage, setRoom } = useGlobal();
  const [img, setImg] = useState("");
  useEffect(() => {
    setImg(genRandImage());
  }, []);
  return (
    <section
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
          <h3 className=" font-[500] capitalize text-[20px]">{name}</h3>
          <p className="opacity-[0.8]">Last text</p>
        </section>
        <div className="flex  mt-1 relative ml-5 ">
          <p className="absolute opacity-[0.5] -left-2 -top-1 ">.</p>
          <p className="opacity-[0.5]  ">26 Dec 2023</p>
        </div>
      </div>
      <div>
        <span className="bg-blue-600 absolute right-8 h-[10px] w-[10px] rounded-[50%] "></span>
      </div>
    </section>
  );
}

export default Room;
