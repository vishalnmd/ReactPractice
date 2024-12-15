import { useState } from "react";

function EventTest(){

    const [r,setR] = useState(255);
    const [g,setG] = useState(255);
    const [b,setB] = useState(255);

    const generateColor = ()=>{
        const disco = setInterval(() => {
            setR(Math.floor(Math.random()*255));
            setG(Math.floor(Math.random()*255));
            setB(Math.floor(Math.random()*255));
        }, 100);
        
        setTimeout(() => {
            clearInterval(disco);
        }, 5000);
    }

    return (
        <>
            <div className="h-[7rem] w-[24rem] flex justify-center items-center border-4 rounded-3xl" 
                    style={{background:`rgb(${r},${g},${b})`}}>
                <button className="w-[8rem] h-[3rem] bg-gray-400" onClick={generateColor}> Click Me</button>
            </div>
        </>
    );
}

export default EventTest;