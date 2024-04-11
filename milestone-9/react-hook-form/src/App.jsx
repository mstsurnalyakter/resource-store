import { useForm } from "react-hook-form";
import "./App.css";
import { useEffect } from "react";
const states = ['Dhaka','Syhlet','Rajshahi']

function App() {
   const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      // firstName:"surnaly",
      // lastName:"akter"
    }
  });
  console.log(errors);

  const formSubmit = (data) =>{
    console.log(data);
  }

  const firstName = watch("firstName");
  useEffect(() => {
    if (firstName === 'admin') {
      window.location.href = "https://www.google.com/";
    }

  }, [firstName])

  console.log("firstName",firstName);
  return (
    <>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit(formSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "You must fill firstName input field",
                    },
                    minLength: {
                      value: 4,
                      message: "This input value must be at least 4 characters",
                    },
                    maxLength: {
                      value: 14,
                      message: "This input value must be max 14 characters",
                    },
                    pattern: {
                      value: /(?=.*[0-9])/,
                      message: "string must include 1 digit",
                    },
                  })}
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full relative left-0">
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  {...register("state", {
                    // validate:(value)=>{
                    //   if (states.includes(value)) {
                    //     return true
                    //   }
                    //   return 'input state name given'
                    // }
                    validate: {
                      validateLength: (value) => {
                        if (value.length >= 6) {
                          return true;
                        }
                        return "State length must be at least 6 character";
                      },
                      validateState: (value) => {
                        if (states.includes(value)) {
                          return true;
                        }
                        return "Input state name";
                      },
                    },
                  })}
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div>
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-800"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
          <button onClick={()=>{
            errors && reset();
          }} className="bg-red-400 text-white" type="submit">
            Submit
          </button>
          <button
            onClick={() => {
              setValue("firstName");
            }}
            className="bg-red-400 text-white"
            type="button"
          >
            setValue
          </button>
          <button onClick={()=>{
            trigger("firstName", "Mst Surnaly");
          }} className="bg-red-400 text-white" type="submit">
            Tiger
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
