import PropTypes from 'prop-types'
import { useState } from 'react';

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);
    const [isChecked,setIsChecked] = useState(false);

    // console.log({name,email,password});
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!isChecked) {
        return
      }
      const user ={
        name,email,password
      }
      setIsSubmit(true)
      console.log(user);


    };
  return (
    <div className="h-screen w-full flex py-20 justify-center items-center bg-purple-500">
      <form
        onSubmit={(event) => handleSubmit(event)}
        action=""
        className="space-y-5 w-2/3 bg-white rounded shadow-xl p-8"
      >
        <h2 className="text-3xl text-center mb-5 font-bold text-white">
          Sign Up Form
        </h2>
        <label className="text-xl">Name:</label>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          id="name"
          className="name input input-bordered w-full"
          placeholder="Enter Your Name"
          required
        />
        <label className="text-xl">Email:</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          className="name input input-bordered w-full"
          placeholder="Enter Your Email"
          required
        />
        <label className="text-xl">Password</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          id="password"
          className="name input input-bordered w-full"
          placeholder="Enter Your password"
          required
        />
        <input type="checkbox" onChange={event =>setIsChecked(event.target.checked)} /> Do you agree our term and condition
        <div className="flex justify-end mt-3">
          <button className="btn join-item rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xl">
            Subscribe
          </button>
        </div>
      </form>

      {isSubmit && (
        <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
          <div className="w-1/2 h-1/2 rounded bg-purple-300 text-center flex items-center justify-center flex-col space-y-5 px-10">
            <h1 className="text-3xl text-purple-500">
              You have submitted the form successfully!
            </h1>
            <p className="text-xl">Name: {name}</p>
            <p className="text-xl">Email: {email}</p>
            <p className="text-xl">Password: {password}</p>
          </div>
        </div>
      )}
    </div>
  );
}

Form.propTypes = {}

export default Form