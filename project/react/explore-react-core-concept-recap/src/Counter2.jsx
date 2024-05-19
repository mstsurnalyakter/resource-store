import { useEffect, useState } from "react"


const Counter2 = () => {
    const [countState, setCountState] = useState(0);
    useEffect(()=>{
        console.log('hello');
    },[countState])
  return (
    <div>
      <h2>useEffect()</h2>
      <h3>State Count: {countState}</h3>
      <button onClick={() => setCountState(countState + 1)}>Click</button>
    </div>
  );
}

export default Counter2;
