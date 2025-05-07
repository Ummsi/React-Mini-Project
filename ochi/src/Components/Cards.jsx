import React from "react";

const Cards = () => {
return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-20">
    <div className="cardcontainer w-1/2 h-[60vh]">
    <div className='card relative w-full h-full bg-[#004D43]  rounded-2xl flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute px-5 py-1 border-1 rounded-full left-10 bottom-10 text-sm">&copy;2019 to 2025</button>
    </div>
    </div>
    <div className="cardcontainer w-1/2 h-[60vh] flex gap-5">
    <div className='card relative flex items-center justify-center w-1/2 bg-[#060a09]  rounded-xl'>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
    <button className="absolute px-5 py-1 border-1 rounded-full left-10 bottom-10 text-sm tracking-tigher">RATING 5.0 ON CLUTCH</button></div>
    <div className='card relative flex items-center justify-center w-1/2 bg-[#212121]  rounded-xl'>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
    <button className="absolute px-5 py-1 border-1 rounded-full left-10 bottom-10 text-sm">BUSINESS BOOTCAMP ALUMNI</button></div>
    </div>
</div>
);
};

export default Cards;
