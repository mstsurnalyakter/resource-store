import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#FF4153"
      outerCircleColor="#FF4153"
      innerCircleColor="#FF4153"
      barColor="#FF4153"
      ariaLabel="circles-with-bar-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
