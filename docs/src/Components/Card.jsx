import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} className="relative flex-shrink-0 w-50 h-65 rounded-[45px] bg-zinc-800/90 text-white px-8 py-10 overflow-hidden">
    <BsFileEarmarkText />
    <p className="text-xs font-semibold mt-5 leading-tight">{data.desc}</p>
    <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center mb-3 py-3 px-8 ">
        <h6 className="text-xs font-extralight">{data.filesize}</h6>
        <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose/> : <AiOutlineDownload size="16" color="#fff" />}
        
        </span>
        </div>
        {/* {data.tag.isOpen ? (
                <div className="tag w-full py-3 bg-green-700 flex item-center justify-center">
                <h3 className="text-sm ">Download Now</h3>
            </div>
            ):null
        } */}
            {data.tag.isOpen && (
                <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-700": "bg-green-700"} flex item-center justify-center`}>
                <h3 className="text-xs ">{data.tag.tagTitle}</h3>
            </div>
            )
        }
    </div>
    </motion.div>

);
};

export default Card;
