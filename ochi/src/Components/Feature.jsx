import { motion } from "framer-motion";
import React, { useState } from "react";
import {Power4} from "gsap/all";

const Feature = () => {
const [isHovering, setHovering] = useState(false);


const handleHover = () => {
setHovering(true);
};

return (
<div className="w-full py-20">
    <div className="w-full px-15 border-b-[1px] pb-20 border-zinc-700">
    <h1 className='text-5xl font-["Neue_Montreal"] px-20'>
        Featured Projects
    </h1>
    </div>
    <div className="px-20">
    <div className="cards w-full flex gap-10 mt-10">
        <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="cardcontainer relative w-1/2 h-[75vh]"
        >
        <h1
            className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Founders_Grotesk_X'] z-[9] font-semibold overflow-hidden leading-none flex uppercase">
            {"CardBoardSpaceShip".split("").map((item, index) => (
            <motion.span
                initial={{ y:"100%" }}
                animate={isHovering ? {y: "0"} : {y: "100%"}}
                transition={{ease: [0.22, 1, 0.36,1], delay : index*.06}}
                className="inline-block"
            >
                {item}
            </motion.span>

            ))}
        </h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
            className="w-full h-full bg-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
            alt=""
            />
        </div>
        </div>
        <div className="cardcontainer relative w-1/2 h-[75vh]">
        <h1
            className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl
font-['Founders_Grotesk_X'] z-[9] font-semibold flex leading-none uppercase"
        >
            {" "}
            {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{ y:"100%" }}
                animate={isHovering ? {y: "0"} : {y: "100%"}}
                transition={{ease: [0.22, 1, 0.36,1], delay : index*.06}}
                className="inline-block"
            >
                {item}
            </motion.span>
            ))}
        </h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
            className="w-full h-full bg-cover"
            src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
            alt=""
            />
        </div>
        </div>
    </div>
    </div>
</div>
);
};

export default Feature;
