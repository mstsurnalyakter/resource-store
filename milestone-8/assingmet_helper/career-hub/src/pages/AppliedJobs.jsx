import Banner from "../components/Banner";
import AppliedJobsCards from "../components/AppliedJobsCards";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <Banner title={"Applied Jobs"} />
      <AppliedJobsCards />
    </div>
  );
};

export default AppliedJobs;
