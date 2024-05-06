import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import useBanner from "../../hooks/useBanner";
import Spinner from "../Spinner/Spinner";

const Banner = () => {

const { data, isLoading } = useBanner();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-44">
        <Spinner />
      </div>
    );
  }



  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
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
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${data[0]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold ">
              {data[0]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-[#1D232A] text-center">
              {data[0]?.short_description}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover flex-col object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[1]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
              {data[1]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-[#1D232A] text-center">
              {data[1]?.short_description}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center flex-col  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[2]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold text-[#e8ded4]">
              {data[2]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-[#e8ded4] text-center">
              {data[2]?.short_description}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[3]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold text-[#e8ded4]">
              {data[3]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-#e8ded4] text-center">
              {data[3]?.short_description}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[4]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold text-[#e8ded4]">
              {data[4]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-[#e8ded4] text-center">
              {data[4]?.short_description}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[5]?.image})`,
            }}
          >
            <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold text-[#e8ded4]">
              {data[5]?.item_name}
            </h1>
            <p className="text-lg font-medium mt-12 w-5/6 mx-auto text-[#e8ded4] text-center">
              {data[0]?.short_description}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
