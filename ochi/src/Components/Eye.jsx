import React, { useState } from "react";
import { useEffect } from "react";

const Eye = () => {

  const [rotate, setRotate] = useState(0)



useEffect(()=>{
  window.addEventListener("mousemove",(e)=>{
let mouseX = e.clientX;
let mouseY = e.clientY;

  let deltaX = mouseX - window.innerWidth/2;
  let deltaY = mouseY - window.innerHeight/2;

  var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
  setRotate(angle-180)
      })

});


return (
  <div className=" w-full h-screen overflow-hidden">
    <div data-scroll data-scroll-speed="-.8" className='w-full relative h-full bg-cover bg-center bg-no-repeat bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className="absolute flex gap-8 top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className=" flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className="relative w-2/4 h-2/4 bg-zinc-800 rounded-full flex justify-center items-center" > Play
          <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}
          className="line absolute top-1/2 left-1/2 w-full h-5">
          <div className="w-5 h-5 bg-zinc-100 rounded-full "></div>
          </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
        <div className="relative w-2/4 h-2/4 bg-zinc-800 rounded-full  flex justify-center items-center ">Play
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}
        className="line absolute top-1/2 left-1/2 w-full h-5 ">
          <div className="w-5 h-5 bg-zinc-100 rounded-full "></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Eye;
