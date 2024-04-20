import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../../components/Banner/Banner";
import BestDealsForSale from "../../components/BestDealsForSale/BestDealsForSale";
import ContactUs from "../../components/ContactUs/ContactUs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


const Home = () => {

   useEffect(() => {
     AOS.init({
       disable: "mobile",
     });
   }, []);

  return (
    <>
    <Helmet>
      <title>HomeScapeHub | Home</title>
    </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-7 ">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="mt-5 lg:col-span-5 space-y-20 ">
          <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing>
            <Banner />
          </div>

          <BestDealsForSale />
          <Testimonials />
          <ContactUs />
        </div>
      </div>
    </>
  );
}

Home.propTypes = {}

export default Home