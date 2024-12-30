import { useMemo, useState } from "react";

export default function Memo(){

    let [count,setCount] = useState(0);
    let [input,setInput] = useState(0);

    let setInt = (e)=>{
      console.log("method classed");
        for(let i=0;i<1000000000;i++){            
        }        
        return input *2;
    }

    //let int2 = setInt(input);

    let int2 = useMemo(()=>setInt(input),[input]);

    return (
        <>
          <button onClick={()=>{setCount(count+1)}}>Count</button>
          <div>
            count : {count}
          </div>
          <div>
            <input type="number"
              placeholder="0"
              className="w-24 p-2 text-right rounded-lg" 
              onChange={(e)=>{setInput(e.target.value)}}
            ></input>
          </div>
          <div>
            input :{int2}
          </div>          
        </>
    );
}