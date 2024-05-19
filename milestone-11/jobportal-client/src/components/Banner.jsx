import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import banner1 from '../assets/images/banner/banner1.png'
import banner2 from '../assets/images/banner/banner2.jfif'
import banner3 from '../assets/images/banner/banner3.jfif'
import banner4 from '../assets/images/banner/banner4.jfif'
import banner5 from '../assets/images/banner/banner5.jfif'

const Banner = () => {
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
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#FF4153] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold ">
                Find Your Next Opportunity
              </h1>
              <p className="text-lg mt-3 font-medium w-5/6 mx-auto  text-center">
                Explore a wide range of job opportunities tailored to your
                skills and interests.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover flex-col object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#FF4153] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Advance Your Career
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Take the next step in your career with our extensive collection
                of job listings from top companies
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center flex-col  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#FF4153] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Discover Your Dream Job
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Unlock new career possibilities and find the job that aligns
                with your passions and aspirations.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner4})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#FF4153] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Join a Thriving Community
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Connect with like-minded professionals and access valuable
                resources to propel your career forward
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner5})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#FF4153] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Empower Your Future
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Empower yourself with the tools and opportunities needed to
                succeed in today&apos;s competitive job market.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

Banner.propTypes = {}

export default Banner