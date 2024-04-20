import {  useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useContextData from "../../hooks/useContextData";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Register = () => {
  const [toggle, setToggle] = useState(false);
  const { createUser, updateUserProfile } = useContextData();

  // navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (errors.fullName) {
      toast.error(errors.fullName.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.photoURL) {
      toast.error(errors.photoURL.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    } else if (errors.termsConditions) {
      toast.error(errors.termsConditions.message);
    }
  }, [
    errors.fullName,
    errors.email,
    errors.photoURL,
    errors.termsConditions,
    errors.password,
  ]);

  const onSubmit = (data) => {
    const { fullName, email, photoURL, password } = data;

    createUser(email, password)
      .then((result) => {
        updateUserProfile(fullName, photoURL)
          .then(() => {
            if (result?.user) {
              toast.success("Successfully Register!");

              setTimeout(() => {
                navigate(from);
                 window.location.reload();
              }, 2000);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
         toast.error(
           error.message?.split("(")[1].replace(")", "").split("/")[1] ||
             "An error occurred while registering."
         );
      });
  };

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>HomeScapeHub | Register</title>
      </Helmet>
      <div className="min-h-[700px] relative grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-base-100  w-4/5 rounded-xl">
        <div className="bg-center min-h-[400px] lg:min-h-[700px]  bg-cover bg-no-repeat rounded-l-xl object-cover bg-[url(https://i.ibb.co/25SzcyT/register.jpg)]">
          <h2 className="mt-3 md:mt-20 text-center font-bold  text-lg md:text-4xl ">
            Welcome to <br />
            HomeScapeHub
          </h2>
        </div>
        <div className="">
          <div className="shrink-0 w-full ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-black text-2xl font-medium">
                Create an account
              </h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "You must fill Full Name input field",
                    },
                  })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must fill Email input field",
                    },
                  })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photoURL"
                  className="input input-bordered"
                  {...register("photoURL", {
                    required: {
                      value: true,
                      message: "You must fill Photo URL input field",
                    },
                  })}
                />
              </div>

              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={toggle ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "You must fill Password input field",
                      },
                      minLength: {
                        value: 6,
                        message: "Password length must be at least 6 character",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                        message:
                          "Password must contain at least one uppercase letter and one lowercase letter.",
                      },
                    })}
                  />
                </div>
                <div
                  className="absolute text-xl top-14 right-2"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <LuEye /> : <LuEyeOff />}
                </div>
              </div>

              <div className="form-control flex items-center flex-row gap-2">
                <input
                  type="checkbox"
                  className="input-bordered"
                  {...register("termsConditions", {
                    required: {
                      value: true,
                      message: "You need to agree with terms and conditions",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text">
                    I agree with{" "}
                    <Link className="underline text-[#0073e1]">
                      terms & conditions
                    </Link>
                  </span>
                </label>
              </div>

              <div className="form-control mt-1">
                <button className="btn bg-[#0073e1] hover:bg-[#0073e1] text-white">
                  Register
                </button>
              </div>
            </form>

            <p className=" mb-6 -mt-3 ml-8">
              <span>Already have an account. Please </span>
              <Link className="underline text-[#0073e1]" to={"/login"}>
                {" "}
                Login Here!
              </Link>
            </p>

            <div className="divider px-6 -my-3">OR</div>

            <SocialLogin text={"Register"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
