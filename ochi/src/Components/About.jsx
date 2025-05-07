import React from 'react'
import Homepage from '../assets/Homepage-Photo.jpg'
function About() {
return (
<div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
    <h1 className='font-["Neue_Montreal"] text-[3.5vw] px-15 leading-[4vw] font-[2vw] '>
    Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
    </h1>
    <div className='w-full border-t-[1px] pt-15 flex border-[#a5bd50] mt-20'>
        <div className='w-1/2 px-15'>
        <h1 className='text-5xl py-5 font-normal'>Our approach:</h1>
        <button className='flex gap-10 items-center px-5 py-4 bg-zinc-950 rounded-full text-white '>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] gap-5 bg-[#a1b949] rounded-3xl'>
        <img src={Homepage} alt="" />
        </div>
    </div>
</div>
)
}

export default About 