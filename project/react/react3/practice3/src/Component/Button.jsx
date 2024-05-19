import { useState } from "react"

const Button2 = () => {
    const [count,setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

  return (
    <div>
        <Button3 count={count} onClick={handleClick} />
        <Button3 count={count} onClick={handleClick} />
    </div>
  )
}

const Button3 = ({count,onClick}) =>{
    return(
        <button onClick={onClick}>
            click {count} times
        </button>
    )
}

export default Button2;