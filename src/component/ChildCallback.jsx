import React, { useMemo } from "react";

const ChildCallback = React.memo(()=>{
    console.log("child component is rendering");
    return <h3>this is child component</h3>
});

export default ChildCallback
