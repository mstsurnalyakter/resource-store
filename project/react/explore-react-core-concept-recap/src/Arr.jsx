import { useState } from "react"


const Arr = () => {
    const [numbers,setNumbers] = useState([1,2,3]);
  return (
    <div>
        <ul>
            {
                numbers.map((number)=><li key={number}>{number}</li>
              )
            }
        </ul>
        <button onClick={()=>setNumbers([...numbers,numbers.length + 1])}>Add Numbers</button>
    </div>
  )
}

export default Arr