import React from "react";
import Card from "./Card";
import { useRef } from "react";



const Forground = () => {

    const ref = useRef(null);
    // const data = [
    //     Icon,description,filesize,closeOrDownload,tagOpened, tagdetails,
    // ];
    const data = [
        {
            desc:'This is the background color of the card that will be displayed',
            filesize:'.9MB',
            close: true,
            tag:{isOpen : true, tagTitle: 'Download Now', tagColor:"green"},
        },
        {
            desc:'This is the background color of the card that will be displayed',
            filesize:'.9MB',
            close: true,
            tag:{isOpen : true, tagTitle: 'Upload', tagColor:"blue"},
        },
        {
            desc:'This is the background color of the card that will be displayed',
            filesize:'.9MB',
            close: true,
            tag:{isOpen : true, tagTitle: 'Download Now', tagColor:"green"},
        },
    ];
return (
<div>
    <div ref={ref} className ="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-8">
    {data.map((item, index)=>(
        <Card data={item} reference={ref} />    
    ))}
    </div>
</div>
);
};

export default Forground;
