
import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useContextData from "../../hooks/useContextData";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  
  // navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const [toggle,setToggle] =  useState(false)
  const {signInUser} = useContextData()



  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

   const onSubmit = (data) => {
     const { email, password } = data;



     signInUser(email, password)
       .then((result) => {

         if (result?.user) {
          toast.success("Successfully logged in!");
          setTimeout(() => {
            navigate(from);
             window.location.reload();
          }, 2000);
        }
       })
       .catch((error) => {
        toast.error(error?.message?.split("(")[1].replace(")","").split("/")[1] || "An error occurred while logging in.");
       });



   };

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message);
    }  else if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [
    errors.email,
    errors.password,
  ]);




  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>HomeScapeHub | Login</title>
      </Helmet>
      <div className="min-h-[700px] relative grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-base-100 w-4/5 rounded-xl">
        <div className="bg-center min-h-[400px] lg:min-h-[700px] bg-cover bg-no-repeat rounded-l-xl object-cover bg-[url(https://i.ibb.co/25SzcyT/register.jpg)]">
          <h2 className="mt-3 md:mt-20 text-center font-bold text-lg md:text-4xl">
            Welcome to <br />
            HomeScapeHub
          </h2>
        </div>
        <div className="">
          <div className="shrink-0 w-full ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-black text-2xl font-medium">
                Login into your account
              </h3>
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
            <div className="divider px-6">OR</div>

            <SocialLogin text={"logged in"} />
          </div>
        </div>
      </div>
    </div>
  );

}

Login.propTypes = {}

export default Login