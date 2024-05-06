import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import CraftItems from "../../components/CraftItems/CraftItems";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import Subcategories from "../../components/Subcategories/Subcategories";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <DynamicTitle pageTitle="Home" />
      <div>
        <Banner/>
        <CraftItems/>
        <Subcategories/>
        <Testimonials/>
        <ContactUs/>
      </div>
    </div>
  );
}

export default Home