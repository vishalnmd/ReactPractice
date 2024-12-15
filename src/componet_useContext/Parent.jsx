import { createContext, useState } from "react";
import Child from "./Child";

const userContext = createContext();

function Parent(){    

    const [mode,setMode] = useState("light");

    return (
        <userContext.Provider value={{mode:mode,modeFn:setMode}}>        
            <Child></Child>
        </userContext.Provider>
    )
}

export default Parent;
export {userContext};