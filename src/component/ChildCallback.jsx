import React, { useMemo } from "react";

const ChildCallback = React.memo((props)=>{
    console.log("child component is rendering");
    return (
        <>
            <h3>this is child component</h3>
            <p>when count is passed down to child component from parent component, It always renders the child component</p>
        </>
    )
});

export default ChildCallback
