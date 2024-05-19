import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="container mx-auto p-6 lg:px-10 xl:px-24 ">
      <Header />
      <h2 className="flex mt-10 text-3xl font-bold text-purple-500 items-center justify-center">Home</h2>
      <div className="flex min-h-[780px] items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home;