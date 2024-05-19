import { useState } from "react";

const Counter = () => {
    const [stateCount,setStateCount] = useState(0);
  let count = 0;

  const handleCount = () =>{
    count = count + 1;
    console.log(count);
  }
  const handleStateCount = () =>{
    setStateCount(stateCount + 1);
    console.log(stateCount);
}
  return (
    <div>
      <h2>useState();</h2>
      <h3>State Count: {stateCount}</h3>
      <h3>Variable Count: {count}</h3>
      <button onClick={handleStateCount}>State Count Increment</button>
      <button onClick={handleCount}>Variable Count Increment</button>
    </div>
  );
};

export default Counter;
