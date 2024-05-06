

function App() {

  const handleAddEmployee = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const employee = {name,email};

    fetch("",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(employee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(error=>console.error(error))

    console.log(employee);
  }

  return (
    <div className="flex flex-col space-y-5 items-center justify-center">
     <h2 className="text-center font-bold"> Simple CRUD Operator</h2>

      <form onSubmit={handleAddEmployee} action="">
        <input type="text" className="border-2 border-green-500" name="name" id="" /><br /><br />
        <input type="email" className="border-2 border-green-500" name="email" id="" /><br /><br />
        <input type="submit" className="border-2 border-green-500" value="Add Employee" />
      </form>

    </div>
  )
}

export default App
