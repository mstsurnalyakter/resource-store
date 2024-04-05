import { useState } from "react";


const StateFulForm = () => {
    const [name,setName] = useState('John Doe');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be 6 character or longer!")
        }else{
            setError("");
        }

       console.log(email);
       console.log(password);
       console.log(name);
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }


    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }


  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={handleNameChange} type="text" name="name" id="name" />
        <br />
        <input onChange={handleEmailChange} type="email" id="email" name="email" />
        <br />
        <input type="number" name="phone" id="phone" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" id="password" required />
        {
            error && <p className="text-red-600">{error}</p>
        }
        <br />
        <input className="btn" type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}

export default StateFulForm