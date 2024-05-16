import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from "react-hook-form";
import useContextData from "../../hooks/useContextData";
import login from '../../assets/images/login/login.svg'
import toast from "react-hot-toast";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const { createUser } = useContextData();
  const navigate = useNavigate();
  // console.log(navigate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email, photoURL, password } = data;
    console.log(fullName, email, password, photoURL);

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      if (user) {
        toast.success("Register Successful")
        navigate("/")
      }
    })
    .catch(error=>{
      toast.error(error.message);
    })

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result?.user);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //   });
  };

  return (
    <div className="min-h-[700px] relative grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-base-100  w-4/5 rounded-xl">
      <div>
        <img src={login} alt="" />
      </div>
      <div className="">
        <div className="shrink-0 w-full ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="text-2xl font-medium">Create an account</h3>

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

          {/* <div className="divider px-6 -my-3">OR</div>

          <SocialLogin text={"Register"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
