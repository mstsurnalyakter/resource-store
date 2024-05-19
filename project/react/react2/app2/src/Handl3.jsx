
const Handl3 = () => {
    const handl3 = (num) =>{
        alert(num + 1)
    }
  return (
    <div>
        <button onClick={()=>handl3(10)}>Click3</button>
    </div>
  )
}

export default Handl3