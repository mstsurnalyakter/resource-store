import Banner from "../../components/Banner";
import Spinner from "../../components/Spinner";
import TabComponent from "../../components/TabComponent";
import useJobs from "../../hooks/useJobs";


const Home = () => {
  const  { data, isLoading, refetch } = useJobs();
  if (isLoading) {
    return (
      <div className="mt-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  console.log(data);
  return (
    <div className="container px-4 mx-auto space-y-20">
      <Banner />
      <TabComponent data={data}/>
    </div>
  );
};

export default Home;
