import { useRef } from "react";
import { useState } from "react"

export default function Stopwatch(){

    const [timer,setTimer] = useState(0);

    let timerFunc = useRef(null);

    function startTimer(){
        console.log(timerFunc.current);
        if(timerFunc.current !=null){
            alert("timer already running");
        }else{
            timerFunc.current = setInterval(() => {
                setTimer((time)=>time+1);
            }, 1000);    
        } 
    }

    function stopTimer(){
        clearInterval(timerFunc.current);        
        timerFunc.current = null;
    }

    function resetTimer(){
        stopTimer();
        setTimer(0);        
    }

    return(
        <>
            <h1 className="text-violet-500">Stopwatch</h1>
            <div className="text-4xl border-2 border-blue-900 rounded-2xl p-2">
                {timer} Seconds
            </div>
            <button onClick={startTimer}>Start</button>            
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>reset</button>
        </>
    )
}