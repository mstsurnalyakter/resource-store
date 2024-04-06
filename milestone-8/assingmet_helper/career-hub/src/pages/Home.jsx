import { Helmet } from "react-helmet-async";
import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";
import JobCategory from "../components/JobCategory";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-450px)]">
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
     <Hero/>
     <JobCategory/>
     <FeaturedJobs/>
    </div>
  );
}

export default Home