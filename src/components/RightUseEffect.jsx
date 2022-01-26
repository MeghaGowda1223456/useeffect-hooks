import React, { useEffect, useState } from "react";
// import { useState } from 'react/cjs/react.development';

function RightUseEffect() {
  const [count, setCount] = useState(0);
//   const [state,setState]=useState(5)
  /* useEffect will get executed when component is mounted to the real dom(similar to componentDidMount of class component) */
  useEffect(() => {
    console.log("use effcet exicuted componentDidMount");
/* the return call back function will get exicuted when component is about to inmount from the real dom (similar to componentwill mount of class component) */
    return()=>{
        console.log("componentDidUnMount");
    }
  }, []);

  

  useEffect(() => {
    if (count !== 0) {
      console.log("use effcet ComponentDidUpdate");
    }
  }, [count]);

  const increseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      useEffect2
      <p>count-{count}</p>
      <button onClick={increseCount}>click</button>

    </div>
  );
}

export default RightUseEffect;
