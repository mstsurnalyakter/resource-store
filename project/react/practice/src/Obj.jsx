const Obj = () => {
    const person ={
        name:'Peter',
        age:50
    }
    const {name,age} = person;
  return (
    <div style={{
        padding:'20px',
        background:'white',
        color:'red'
    }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

    </div>
  );
}



export default Obj