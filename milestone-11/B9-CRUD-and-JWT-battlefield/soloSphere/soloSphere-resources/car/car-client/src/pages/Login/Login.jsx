import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import useContextData from "../../hooks/useContextData";
// import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContextData();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [toggle, setToggle] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;

    console.log(email,password);

    signIn(email,password)
    .then(result=>{ 56
      const user = result.user;
      if (user) {
        toast.success("Login Successful")
        navigate(location?.state || "/");
      }
      console.log(user);
    })
    .catch(error=>toast.error(error.message))

  };

  return (
    <div className="min-h-[700px] w-full relative grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-base-100 p-20 rounded-xl">
      <div>
        <img src={login} alt="" />
      </div>
      <div className="">
        <div className="shrink-0 w-full ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="text-2xl font-medium">Login into your account</h3>
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
            <div className=" relative">
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
            <div className="form-control mt-6">
              <button className="btn bg-[#0073e1] hover:bg-[#0073e1] text-white">
                Login
              </button>
            </div>
          </form>
          <p className="mb-6 -mt-3 ml-8">
            <span>Don&apos;t Have An Account ? Please</span>
            <Link className="underline text-[#0073e1]" to={"/register"}>
              {" "}
              Register Here!
            </Link>
          </p>
          {/* <div className="divider px-6">OR</div>

          <SocialLogin text={"logged in"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
