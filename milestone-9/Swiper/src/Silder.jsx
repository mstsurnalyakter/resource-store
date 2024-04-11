import bay1 from "./assets/bay1.webp";
import bay2 from "./assets/bay2.webp";
import bay3 from "./assets/bay5.webp";
import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";


const Slider = () => {

  return (
    <>
      <Swiper
      slidesPerView={2}
      spaceBetween={30}
        navigation={true}
        pagination={
          {
            clickable:true
          }
        }
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="hero min-h-[800px]  w-full bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bay1})` }}
          >
            <h1 className="text-8xl text-purple-500">Slider 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[800px]  w-full bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bay2})` }}
          >
            <h1 className="text-8xl text-purple-500">Slider 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[800px] flex items-center justify-center  w-full bg-center  bg-cover  object-cover"
            style={{ backgroundImage: `url(${bay3})` }}
          >
            <h1 className="text-8xl text-purple-500">Slider 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[800px]  w-full bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bay2})` }}
          >
            <h1 className="text-8xl text-purple-500">Slider 4</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
