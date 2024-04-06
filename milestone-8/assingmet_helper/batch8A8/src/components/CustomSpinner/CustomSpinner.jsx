
 import {  CirclesWithBar } from "react-loader-spinner";
const CustomSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <CirclesWithBar
        height="300"
        width="500"
        color="purple"
        outerCircleColor="purple"
        innerCircleColor="purple"
        barColor="purple"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default CustomSpinner