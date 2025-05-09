import React from "react";

const Background = () => {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen bg-zinc-950">
      <div className="absolute w-full top-[5%] py-10 flex justify-center text-zinc-600 font-semibold text-xl">
        Document.
      </div>
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw] leading-none
        tracking-tighter text-zinc-900"
      >
        Umms!|.
      </h1>
    </div>
    </>
  );
};

export default Background;
