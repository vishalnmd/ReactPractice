import { useState } from "react";
import ChildCallback from "./ChildCallback";

export default function UseCallback() {

    let [count, setCount] = useState(0);

    return (
        <div className="flex flex-col justify-center items-center ">    
           
           <h2 className="p-2">Counter is : {count}</h2>
           <button onClick={()=>setCount(count+1)}>Increment</button>

           <ChildCallback/>
        </div>
    );
}