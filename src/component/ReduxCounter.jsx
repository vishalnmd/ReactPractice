import { useDispatch, useSelector } from "react-redux";
import { decrement, increament, increamentByAmount, reset } from "../redux/slices/Features/CounterSlice";
import { useState } from "react";

export default function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatcher = useDispatch();
  const [amount,setAmount] = useState(0);

  function addAmount(){
    dispatcher(increamentByAmount(amount));
  }
     
  

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 className="my-2">Counter: {count}</h1>
        <button className="m-1" onClick={() => dispatcher(increament())}>Increment</button>
        <button className="m-1" onClick={() => dispatcher(decrement())}>Decrement</button>
        <button className="m-1" onClick={() => dispatcher(reset())}>Reset</button>        
        <div>
            <br />
            <input
             placeholder="0"
             className="w-24 p-2 text-right rounded-lg" 
             onChange={(e)=>{setAmount(e.target.value)}}  
            ></input>
            <button className="m-2" onClick={addAmount}>Add</button>
        </div>
      </div>
    </>
  );
}
