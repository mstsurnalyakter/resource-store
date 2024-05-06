
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({item}) => {
   const {
     _id,
     image,
     item_name,
     subcategory_Name,
     short_description,
      processing_time
,    price,
     rating,
   } = item || {};

  return (
    <div>
      <div className="w-full bg-white border shadow-lg rounded-xl p-6 dark:bg-[#1a2641d5]">
        <div className="flex flex-col ">
          <div className="relative h-62 w-full mb-3">
            <div className=" h-[180px] w-full rounded-2xl dark:bg-[#0F172A]">
              <img
                src={image}
                alt=""
                className=" w-full h-full object-fill rounded-2xl"
              />
            </div>
          </div>
          <div className="flex-auto justify-evenly">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm flex items-center text-gray-800 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap mr-3">
                  {rating}
                </span>
                <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                  {subcategory_Name}
                </div>
              </div>
              <div className="flex items-center w-full justify-between min-w-0 ">
                <h2 className="text-lg mr-auto cursor-pointer text-gray-800 hover:text-[#9856AC] truncate font-semibold dark:text-white mt-5">
                  {item_name}
                </h2>
              </div>
            </div>

            <div className="text-lg text-gray-500 font-semibold mt-1">
              Price : {price}$
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300 my-2">
                <b> Processing Time</b> : {processing_time}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300 my-2">
                <b>Description</b> : {short_description}
              </p>
            </div>

            <button className="bg-[#9856AC] py-2 rounded-md text-white w-full">
              <Link to={`/view-details-page/${_id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;