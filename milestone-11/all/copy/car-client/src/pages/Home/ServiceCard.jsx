import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service?.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service?.title}</h2>
        <p className="text-[#FF3811]">Price:${service?.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${service?._id}`}>
            <button className="bg-[#FF3811] text-white px-3 py-2">
              Book Now
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
