import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import {  } from "react-icons/fa6";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Register = () => {
  const [registerError,setRegisterError] = useState('');
  const [success,setSuccess] = useState("");
  const [toggle,setToggle] = useState(false)

    const handleRegister = e =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name, email, password);
      // success message reset
      setSuccess("");

      // reset error
      setRegisterError("");

      if (password.length < 6) {
        setRegisterError("Password should at least 6 character or longer");
        return
      }

      if (!/[A-Z]/.test(password)) {
        setRegisterError("Password should be contain at least 1 Uppercase letter");
        return
      }



      // create user
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User create Success");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
    }
  return (
    <Card color="transparent" className="shadow-2xl max-w-3xl mx-auto pl-5">
      <Typography variant="h4" color="blue-gray">
        Register Now
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleRegister}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            name="email"
            required
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {registerError && (
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 text-red-700"
            >
              {registerError}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <div className="relative">
            <Input
              type={toggle ? "text" : "password"}
              name="password"
              required
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <button
              onClick={() => setToggle(!toggle)}
              className="absolute cursor-pointer top-3 translate-x-80"
            >
              {toggle ? <FaRegEyeSlash/> : <FaRegEye />}
            </button>
          </div>
        </div>
        <Checkbox
          required
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6 capitalize" fullWidth>
          Register
        </Button>
        {success && (
          <Typography
            variant="small"
            color="blue-gray"
            className="mt-3 text-center text-green-700"
          >
            {success}
          </Typography>
        )}
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

Register.propTypes = {}

export default Register