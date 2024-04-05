import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {

        const handleLogin = (e) => {
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;


          console.log( email, password);
        };

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
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have not an account?{" "}
          <Link
            to={"/register"}
            className="font-medium underline text-gray-900"
          >
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

Login.propTypes = {};

export default Login;
