import Banner from "../../components/Banner"
import DynamicTitle from "../../components/DynamicTitle";
import JobByCategory from "../../components/JobByCategory"
import JobProcess from "../../components/JobProcess";
import Testimonials from "../../components/Testimonials";
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
   const { scrollYProgress } = useScroll();
     const scaleX = useSpring(scrollYProgress, {
       stiffness: 100,
       damping: 30,
       restDelta: 0.001,
     });
  return (
    <div className="space-y-20 dark:text-gray-100">
      <DynamicTitle pageTitle="Home" />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Banner />
      <JobByCategory />
      <JobProcess />
      <Testimonials />
    </div>
  );
}

export default Home