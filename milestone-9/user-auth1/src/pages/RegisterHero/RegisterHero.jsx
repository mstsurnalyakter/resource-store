import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const RegisterHero = () => {
const [registerError,setRegisterError] = useState("");
const [success,setSuccess] = useState("");
const [toggle,setToggle] = useState(false);

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const terms = e.target.terms.checked;
      const password = e.target.password.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 console.log(name, email, terms, password);
      //success message reset
      setSuccess("");

      // reset error
      setRegisterError("");

      if (!emailRegex.test(email)) {
       setRegisterError(
          "Invalid email address. Please enter a valid email."
        );
        return
      }

      if (password.length < 6) {
        setRegisterError("Password should be at least 6 character or longer");
        return;
      }

      if (!/[A-Z]/.test(password)) {
        setRegisterError("Password should have at least one Upper case letter")
        return;
      }

      if (!terms) {
        setRegisterError("Please  Agree our term and conditions.")
        return;
      }

      //   create user
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User created successfully!");

          //update profile
          updateProfile(result.user, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
          .then(()=>console.log("Profile updated"))
          .catch(error=>{
            console.error(error)
          })


          // send verification email
          sendEmailVerification(result.user)
          .then(()=>{
            alert("Please check your email and verify your account.")
          })
        })
        .catch((error) => {
          console.error(error.message);
          // setRegisterError(error.message.split("/")[1].replace(new RegExp(')','g'),''));
          setRegisterError(
            error.message.split("/")[1].replace(new RegExp("\\)", "g"), "")
          );

        });
    };
    return (
      <Card color="transparent" className="shadow-2xl max-w-3xl mx-auto pl-5">
        <Typography variant="h4" color="blue-gray">
          Register Hero
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
                {toggle ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>
          <Checkbox
            type="checkbox"
            name="terms"
            id="terms"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the &nbsp;
                <a href="#" className="font-medium underline text-blue-500">
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 capitalize" fullWidth>
            Register
          </Button>
          {registerError && (
            <small className="text-red-900">{registerError}</small>
          )}
          {success && <small className="text-green-900">{success}</small>}
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

RegisterHero.propTypes = {}

export default RegisterHero