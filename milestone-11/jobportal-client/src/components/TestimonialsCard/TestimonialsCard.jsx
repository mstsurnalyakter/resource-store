import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";




const TestimonialsCard = () => {
  return (
    <div className="mt-10">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-full shadow"
      >
        <SwiperSlide className="bg-white border-2 border-red-500">
          <Card1 />
        </SwiperSlide>
        <SwiperSlide className="bg-white border-2 border-teal-500">
          <Card2 />
        </SwiperSlide>
        <SwiperSlide className="bg-white border-2 border-lime-500">
          <Card3 />
        </SwiperSlide>
        <SwiperSlide className="bg-white border-2 border-blue-400">
          <Card4 />
        </SwiperSlide>
        <SwiperSlide className="bg-white border-2 border-pink-800">
          <Card5 />
        </SwiperSlide>
        <SwiperSlide className="bg-white border-2 border-amber-600">
          <Card6 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;
