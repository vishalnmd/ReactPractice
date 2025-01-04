import { useContext } from "react";
import { userContext } from "./parent";

function Child(){
    const usContext = useContext(userContext);
    return(
    <> 
        <div className="w-1/2 min-h-40 m-5 flex justify-center items-center rounded-3xl" 
        style={{background:usContext.mode=="light" ? "white" : "grey" }}>

            <button className="w-52 h-10 text-sm" onClick={onBtnClick}>Switch Modes</button>
        </div>
    </>
    )

    function onBtnClick(){
        if(usContext.mode=='light'){
            usContext.modeFn("dark");
        }else{
            usContext.modeFn("light");
        }
    }
}

export default Child;