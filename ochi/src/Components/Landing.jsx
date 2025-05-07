import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Landing() {
return (
<div data-scroll data-scroll-section  data-scroll-speed="-.1" className="w-full h-screen bg-zinc-900 pt-2 ">
    <div className="textstructure mt-45 px-15">
    {["We Create", "Eye-Opening", "presentations"].map((item, index) => {
        return (
        <div className="masker">
            <div className="w-fit flex">
            {index === 1 && (
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="w-[9vw] rounded-md h-[5.8vw] relative -top-[1vw] bg-red-500"
                ></motion.div>
            )}
            <h1 className='text-[9vw] h-full flex items-center uppercase leading-[7vw] font-bold font-["Founders_Grotesk_X"]'>
                {item}
            </h1>
            </div>
        </div>
        );
    })}
    </div>
    <div className="border-t-[1px] text-lg border-zinc-800 mt-15 flex justify-between items-center px-20 py-5">
    {[
        "For Public and private companies",
        "From the first pitch to IPO",
    ].map((item, index) => (
        <p className="text-md font-light tracking-tight leading-none">
        {item}
        </p>
    ))}
    <div className="start flex items-center">
        <div className="px-5 py-2 rounded-full font-light text-sm">
        START THE PROJECT
        </div>
        <div className=" flex items-center justify-center w-10 h-10 border-2 border-zinc-600 rounded-full">
        <MdArrowOutward size={22} />
        </div>
    </div>
    </div>
</div>
);
}
export default Landing;
