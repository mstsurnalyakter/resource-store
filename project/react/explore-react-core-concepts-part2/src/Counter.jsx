import { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0);

    const handleCount = () =>{
       const newCount =  count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{
            border:'2px solid yellow',
            padding:'20px',
            margin:'20px'
        }}>
            <h3>Counter : {count} </h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}