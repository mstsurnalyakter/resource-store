import './App.css'

function App() {

  const handleAddUser = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={
      name,email
    }
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Users added successfully.");
          form.reset()
        }
      })
      .catch((error) => console.error(error));




  }

  return (
    <div className='flex items-center justify-center flex-col space-y-4 mt-20'>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser} action="">
        <input
          type="text"
          className="border border-black"
          name="name"
          id="name"
        />
        <br />
        <br />
        <input
          type="email"
          className="border border-black"
          name="email"
          id="email"
        />
        <br />
        <br />
        <input className="border border-black" type="submit" value="Add User" />
      </form>
    </div>
  );
}

export default App
