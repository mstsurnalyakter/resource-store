import { useState } from "react"


const Obj = () => {
    const [user,setUser] = useState({name:'John',age:20});
  return (
    <div>
        <p>Name: {user.name}, Age: {user.age}</p>
        <button onClick={()=>setUser({...user,age:user.age + 1})}>Increment Age</button>
    </div>
  )
}

export default Obj