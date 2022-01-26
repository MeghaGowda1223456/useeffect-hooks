import React, { useState, useEffect } from "react";

function WrongUseEffect() {
  const [count, setCount] = useState(0);
  // we should never use this method
  /* this method will be exicuted on  componentdidmount as well as state or prop change and component un mount  */
  useEffect(() => {
    console.log("use effcet exicuted");
  });
  const increseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      useEffect
      <p>count-{count}</p>
      <button onClick={increseCount}>click</button>
    </div>
  );
}

export default WrongUseEffect;
