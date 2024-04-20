import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const TestimonialsCard = ({ item }) => {
  const { name, title, testimonial, image } = item || {};

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-easing
      className="flex border flex-col justify-center mx-auto   py-6 shadow-md rounded-xl sm:px-12"
    >
      <img
        src={image}
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-3">
          <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
          <p className=" text-xs sm:text-base dark:text-gray-600 font-medium">
            {title}
          </p>
          <p className="text-[#191229b3]">{testimonial}</p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TestimonialsCard;
