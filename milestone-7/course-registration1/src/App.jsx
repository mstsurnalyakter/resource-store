import { useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const totalCredits = 15;

const App = () =>{
const [carts,setCarts] =useState([])

const handleCourseSelect = (course) =>{
    // toast("Wow so easy !");

  const credits = carts.reduce((prev, curr) => prev + curr.credit, 0);

  if (credits + course.credit > totalCredits) {
   return toast.error(`Only ${totalCredits} credits allowed`);
  }

     const exit = carts.find((c) => c.id === course.id);
     if (exit) {
       toast.warn("Course already select");
     } else {
       setCarts([...carts, course]);
       toast.success("Course added");
     }


  // {!exit && setCarts([...carts, course])}

}
  return (
    <section className="container mx-auto p-4 lg:px-12 xl:px-24">
      <h1 className="text-3xl font-bold text-center mb-10">
        Course Registration
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <Courses handleCourseSelect={handleCourseSelect} />
        <Cart carts={carts} />
      </div>
      <ToastContainer />
    </section>
  );
}

export default App
