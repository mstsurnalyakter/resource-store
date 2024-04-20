import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#0073e1"
      outerCircleColor="#0073e1"
      innerCircleColor="#0073e1"
      barColor="#0073e1"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
