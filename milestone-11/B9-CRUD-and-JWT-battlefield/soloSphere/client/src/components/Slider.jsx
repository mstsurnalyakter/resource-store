
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Slider = ({ image, text }) => {
  return (
    <>
      <div
        className="h-[500px] rounded  bg-center  bg-cover  object-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900/70">
          <div className='text-center'>
            <h1 className="  md:text-2xl font-semibold text-white lg:text-3xl">
              {text}
            </h1>
            <br />
            <Link
              to="/add-job"
              className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Post Job & Hire Expert
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Slider.propTypes = {
    image:PropTypes.node,
    text:PropTypes.string
}

export default Slider