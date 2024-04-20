import AOS from "aos";
import "aos/dist/aos.css";

import Spinner from "../../components/Spinner/Spinner";
import TeamCard from "../../components/TeamCard/TeamCard";
import useTeam from "../../hooks/useTeam";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const { teamData, dataLoading } = useTeam();

  useEffect(()=>{
     AOS.init({
       disable: 'mobile'
     });
  },[])



  return (
    <div className="space-y-20">
      <Helmet>
        <title>HomeScapeHub | About Us</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-easing
        data-aos-duration="2000"
        className="grid  grid-cols-1 lg:grid-cols-2 gap-6 shadow-xl px-5 md:px-10 py-10 border-2 rounded-xl items-center"
      >
        <div className="space-y-3">
          <h2 className="font-extrabold text-2xl text-[#0073e1] text-center">
            Our Vision
          </h2>
          <p>
            Envision a world where finding your dream property is not just a
            transaction, but a personalized experience tailored to your needs.
          </p>
          <p>
            We understand that finding the perfect home goes beyond four walls;
            it&lsquo;s about finding a place that resonates with your lifestyle,
            aspirations, and dreams. However, the real estate journey can often
            feel impersonal, overwhelming, and detached from your unique story.
          </p>
          <p>
            At <span className="font-bold text-[#0073e1]">HomeSpaceHub</span>,
            we are committed to reshaping this narrative. We believe in a
            holistic approach to real estate, one that prioritizes your
            individual needs, aspirations, and well-being. With us, you&lsquo;re
            not just another client; you&lsquo;re a valued partner.
          </p>
          <p>
            Every step of the way, we&lsquo;re here to guide, support, and
            empower you. From your first search to the moment you unlock the
            door to your new home, we strive to make your real estate journey
            seamless, enjoyable, and tailored to you.
          </p>
        </div>
        <div>
          <div className="bg-center min-h-[350px] bg-cover bg-no-repeat rounded-xl object-cover bg-[url(https://i.ibb.co/t4gcqPM/about-us.jpg)]"></div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing
        className="bg-[#0073e1] flex flex-col items-center justify-center py-2 space-y-8 rounded-xl shadow-xl"
      >
        <div className="mt-10 text-center text-white space-y-5">
          <h2 className="md:text-4xl text-lg font-bold">What is HumeSpaceHub?</h2>
          <p className="w-2/3 mx-auto md:text-xl">
            HomeSpaceHub is an innovative real estate platform based in Austin,
            dedicated to revolutionizing the way people navigate homeownership.
          </p>
        </div>
        <div>
          <img
            className="h-[350px]"
            src="https://i.ibb.co/pxMpv1X/home-finder.png"
            alt=""
          />
        </div>
      </div>

      {dataLoading && (
        <div className="mx-auto w-14 my-7">
          <Spinner />
        </div>
      )}

      <div
        className="space-y-9"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing
      >
        <h3 className="text-2xl font-bold text-center">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.length &&
            teamData?.map((item) => <TeamCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
