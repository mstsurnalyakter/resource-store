import  { useRef, useState } from 'react'
import PropTypes from 'prop-types';

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';



const Login = () => {

  const [loginError, setLoginError] = useState("");
  const [success,setSuccess] = useState("");
  const emailRef = useRef(null);

    const handleLogin = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log( email, password);

      // reset error
      setLoginError("");

      //reset successful message
      setSuccess("");

      try {
        const result = await signInWithEmailAndPassword(auth,email,password)
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("Login successfully.")

        }else{
          alert("Please verify your email address.")
        }
        console.log(result.user);
      } catch (error) {
        console.error(error)
        setLoginError(error.message);
      }
    };

    const handleForgetPassword = () =>{
      const email = emailRef.current.value;
       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email) {
        alert("Please provider an email");
        return;
      }else if (!emailRegex.test(email)) {
          alert("Please write a valid email.");
          return;
      }
      console.log("send reset email",email);
      //send validation email
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("Please checked your email.");
      })
      .catch(error=>{
        console.error(error);
      })
    }

    return (
      <Card color="transparent" className="shadow-2xl max-w-3xl mx-auto pl-5">
        <Typography variant="h4" color="blue-gray">
          Login Now
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              inputRef={emailRef}
              required
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              required
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography color="gray" className="font-normal">
              <Link
                 onClick={handleForgetPassword}
                className="font-medium underline text-blue-900"
              >
                Forget Password
              </Link>
            </Typography>
          </div>

          <Button type="submit" className="mt-6 capitalize" fullWidth>
            Login
          </Button>
          {loginError && <small className="text-red-500">{loginError}</small>}
          {success && <small className="text-green-500">{success}</small>}
          <Typography color="gray" className="mt-4 text-center font-normal">
            If you don&apos;t have an account,{" "}
            <Link
              to={"/register"}
              className="font-medium underline text-gray-900"
            >
              Register here
            </Link>
          </Typography>
        </form>
      </Card>
    );
}



Login.propTypes = {}

export default Login