import { useState } from "react"


const Counter = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const handleIncrement = () =>{
        setCount(prev=>prev + 1)
    }
    const handleDecrement = () =>{
        setCount(prev=>prev - 1)
    }
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h4>Count2: {count2}</h4>
      <button onClick={() => setCount2((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Counter