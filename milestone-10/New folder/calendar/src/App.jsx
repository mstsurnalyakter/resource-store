import { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function App() {

  const [selectedDate,setSelectedDate] = useState(new Date())
  const [clockTime,setClockTime] = useState(new Date());

  useEffect(()=>{
     const interval = setInterval(() => setClockTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  },[])

  console.log(selectedDate);

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col gap-6">
      <form className="w-full shadow-md border px-10 py-20 rounded-md">
        <h2 className="text-center text-3xl font-bold text-[#FF497C]">
          Register Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CustomInput
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            label="First Name"
          />
          <CustomInput
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            label="Last Name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CustomInput
            type="email"
            placeholder="Email"
            label="Email"
            id="email"
            name="email"
          />
          <CustomInput
            type="text"
            placeholder="Phone"
            label="Phone"
            id="phone"
            name="phone"
          />
        </div>

        <div>
          <label>Date Of Birth</label>
          <Calendar onChange={(value) => setSelectedDate(value)} />
        </div>

        <div className="mt-5">
          <Clock value={clockTime}  />
        </div>

        <div className="space-x-2 mt-4">
          <input
            className="border rounded-md focus:outline-[#FF497C]"
            type="checkbox"
            name="terms"
          />
          <label className="" htmlFor="image">
            Do you agree to our terms and conditions
          </label>
        </div>

        <input
          className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
}

export default App
