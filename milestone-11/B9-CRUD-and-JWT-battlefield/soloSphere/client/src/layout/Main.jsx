import { Outlet } from "react-router-dom"
import Navbar from "../pages/shared/Navbar"
import Footer from "../pages/shared/Footer"
import { Toaster } from "react-hot-toast";


const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)] mb-10 py-12">
        <Outlet />
      </div>
      <Footer />
      <Toaster/>
    </>
  );
}

export default Main