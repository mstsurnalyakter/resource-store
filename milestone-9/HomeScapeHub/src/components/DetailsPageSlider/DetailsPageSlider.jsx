
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";


const DetailsPageSlider = ({ singleData }) => {
 

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${
                singleData?.image[0] || "https://i.ibb.co/njPcx9Z/sf1.webp"
              })`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${
                singleData?.image[1] || "https://i.ibb.co/njPcx9Z/sf1.webp"
              })`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${
                singleData?.image[2] || "https://i.ibb.co/njPcx9Z/sf1.webp"
              })`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${
                singleData?.image[3] || "https://i.ibb.co/njPcx9Z/sf1.webp"
              })`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${
               singleData?.image[4] || "https://i.ibb.co/njPcx9Z/sf1.webp"
              })`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

DetailsPageSlider.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default DetailsPageSlider