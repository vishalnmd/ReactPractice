import { useEffect, useState } from "react";

function UseEffectImpl(){

    const [count,setCount] = useState(0); 
    useEffect(() => {
        alert('Component mounted');
    }, [count]);

    return (
        <>  
             <div className="flex justify-center flex-col gap-5 items-center bg-teal-900 w-80 h-52 sm:w-50 sm:h-32 rounded-3xl shadow-2xl">
                <h3>You have click {count} times</h3>
                <button className="w-24 h-8 bg-gray-200 text-black hover:bg-blue-400 rounded-2xl p-0" 
                    onClick={()=>{setCount(count+1)}}
                > Click me</button>
            </div>
        </>
    );
}

export default UseEffectImpl;