import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"counter",
    initialState :{value:0},
    reducers:{
        increament : (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        reset: (state)=>{
            state.value =  0;
        },
        increamentByAmount:(state,payload)=>{
            state.value += Number(payload.payload);
        }
    }
})

export const {increament,decrement,reset,increamentByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;