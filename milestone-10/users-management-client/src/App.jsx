
import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';
import { json } from 'react-router';

function App() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res =>res.json())
    .then(data => setUsers(data))
    .catch(error=>console.error(error))
  },[])

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,email
    }



    fetch("http://localhost:5000/users",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const newUsers = [...user,data];
      setUsers(newUsers)
      form.reset();
    })
    .catch(error=>console.error(error))

    console.log(user);
  }


  return (
    <>
      <h1>Users Management System</h1>
      <h3>Number of Users: {users.length}</h3>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" />
        <br />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
