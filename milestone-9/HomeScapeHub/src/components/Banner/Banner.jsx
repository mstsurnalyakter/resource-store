import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import Spinner from "../Spinner/Spinner";
import useData from "../../hooks/useData";


const Banner = () => {

  const {data,dataLoading} = useData();


  if (dataLoading) {
    return(
      <div className="mt-10 w-[300px] mx-auto">
        <Spinner/>
      </div>
    )
  }

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
              backgroundImage: `url(${data[0]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[0]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[1]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[1]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[2]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[2]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[3]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[3]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[4]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[4]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[5]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[5]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[6]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[6]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[7]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl w-5/6 text-center font-bold  text-[#0073e1]">
              {data[0]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[8]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl font-bold w-5/6 text-center  text-[#0073e1]">
              {data[0]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${data[9]?.image[0] || "/villa2.webp"})`,
            }}
          >
            <h1 className="text-3xl font-bold w-5/6 text-center  text-[#0073e1]">
              {data[0]?.estate_title}
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
