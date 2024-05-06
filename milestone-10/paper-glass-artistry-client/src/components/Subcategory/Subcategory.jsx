import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Subcategory = ({ item }) => {
  const {  image, item_name, origins, key_elements } = item || {};
  const path = item_name.toLowerCase().replace(/\s/g, "_");
  return (
    <Link to={`/${path}`}>
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
            <div className="flex items-center w-full justify-between min-w-0 ">
              <h2 className="text-lg mr-auto cursor-pointer  text-[#9856AC] hover:text-[#9747af] truncate font-semibold mt-5">
                {item_name}
              </h2>
            </div>
            <div className="mt-1">
              <b>Origins:{" "}</b>
              <small>{origins}</small>
            </div>
            <div className="mt-1">
              <b>Key Elements:{" "}</b>
              <small>{key_elements}</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Subcategory.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Subcategory;
