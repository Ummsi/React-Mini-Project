import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
return (
<div data-scroll data-scroll-speed="1.2" className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
    <div className="text border-t-1 border-b-1 border-zinc-400 gap-10 flex overflow-hidden whitespace-nowrap ">
    <motion.h1
        initial={{ x: 0 }}animate={{x:"-100%"}}transition={{ease: "linear",repeat:Infinity,duration:15, smothness:3 }}
        className='text-[20vw] leading-none font-["Founders_Grotesk-X-condensec]  mb-[-1vw] mt-[-3vw] font-bold uppercase'>
        We are ochi
    </motion.h1>
    <motion.h1 
    initial={{ x: 0 }}animate={{x:"-100%"}}transition={{ease: "linear",repeat:Infinity,duration: 15, smothness:3 }}
    className='text-[20vw] leading-none font-["Founders_Grotesk-X-condensed] mb-[-1vw] mt-[-3vw] font-bold uppercase'>
        We are ochi
    </motion.h1>
    <motion.h1 
    initial={{ x: 0 }}animate={{x:"-100%"}}transition={{ease: "linear",repeat:Infinity,duration: 15, smothness:3}}
    className='text-[20vw] leading-none font-["Founders_Grotesk-X-condensed] mb-[-1vw] mt-[-3vw] font-bold uppercase'>
        We are ochi
    </motion.h1>
    </div>
</div>
);
};

export default Marquee;
