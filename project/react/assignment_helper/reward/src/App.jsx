
import { useState } from 'react'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
export const totalCredits = 15;
const App = () => {
  const [carts,setCarts] = useState([]);

  const handleAddToCart = course =>{

    const credits =carts.reduce((prev, curr) => prev + curr.credit, 0);

    if (credits+course.credit > totalCredits) {
     return toast.error(`Only ${totalCredits} credit allowed!`)
    }

        const isExist = carts.find((cart) => cart.id === course.id);
        if (isExist) {
          toast.warn("Course already selected!");
        } else {
          setCarts([...carts, course]);
           toast.success("Course Successfully Add");
        }


  }
  return (
    <div className="container mx-auto p-6 lg:px-16 xl:px-24">
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Courses handleAddToCart={handleAddToCart} />
        <Cart carts={carts} />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App