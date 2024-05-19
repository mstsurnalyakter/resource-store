import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";
import JobCategory from "../components/JobCategory";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-450px)]">
     <Hero/>
     <JobCategory/>
     <FeaturedJobs/>
    </div>
  );
}

export default Home