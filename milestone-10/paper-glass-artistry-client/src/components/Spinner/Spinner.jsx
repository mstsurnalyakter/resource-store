import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#C4FCCE"
      outerCircleColor="#9856AC"
      innerCircleColor="#3C87C7"
      barColor="#CA4339"
      ariaLabel="circles-with-bar-loading"
     
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
