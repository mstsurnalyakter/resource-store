// import React from 'react'
// import PropTypes from 'prop-types'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { useState } from "react";

const SingUp =  () => {

    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [firebaseError,setFirebaseError] = useState("");
    const [successMessage,setSuccessMessage] = useState("");
    const [toggle,setToggle] = useState(false);




    const handleSignUp = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      const terms = e.target.terms.checked;
      console.log(name, email, password, confirmPassword, terms);

      //reset
      setEmailError("");
      setPasswordError("");
      setFirebaseError("");
      setSuccessMessage("");


      const regex =
        /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=(.*\d){2}).{8,}$/;

        if (!regex.test(password)) {
            setPasswordError(`Password must contain at least two uppercase characters, two lowercase characters, one special character, two numbers, and be at least 8 characters long.`)
        }


        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(result.user);
        } catch (error) {
          console.error(error.message);
          setFirebaseError(error.message);
        }
    };


   return (
     <Card
       color="transparent"
       className="shadow-2xl max-w-4xl mx-auto flex items-center justify-center mb-10 border-2 border-base-300 py-5"
     >
       <Typography variant="h4" color="blue-gray">
         Sign Up
       </Typography>
       <Typography color="gray" className="mt-1 font-normal">
         Nice to meet you! Enter your details to register.
       </Typography>
       <form onSubmit={handleSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
         <div className="mb-1 flex flex-col gap-6">
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Your Name
           </Typography>
           <Input
             size="lg"
             type="text"
             name="name"
             required
             placeholder="Alex"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Your Email
           </Typography>
           <Input
             type="email"
             name="email"
             required
             size="lg"
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
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Confirm Password
           </Typography>
           <Input
             type="password"
             name="confirmPassword"
             required
             size="lg"
             placeholder="********"
             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
         </div>
         <Checkbox
           name="terms"
           id="terms"
           type="checkbox"
           label={
             <Typography
               variant="small"
               color="gray"
               className="flex items-center font-normal"
             >
               I agree the &nbsp;
               <Link className="font-medium transition-colors underline text-blue-500">
                 Terms and Conditions
               </Link>
             </Typography>
           }
           containerProps={{ className: "-ml-2.5" }}
         />
         <Button type="submit" className="mt-6 capitalize" fullWidth>
           sign up
         </Button>
         <Typography color="gray" className="mt-4 text-center font-normal">
           Already have an account?{" "}
           <Link
             to={"/sign-in"}
             className="font-medium underline text-blue-500"
           >
             Sign In
           </Link>
         </Typography>
       </form>
     </Card>
   );
}

SingUp.propTypes = {}

export default SingUp