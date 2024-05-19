import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="dark:bg-gray-100  dark:text-gray-800">
      <div className="flex flex-col justify-center  sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center py-6  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 mb-10 2xl:h-128 relative">
          <img
            src={person}
            alt=""
            className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
          <img
            className="w-2/3 border-8 border-[ #FFF] -right-32 top-1/2 absolute"
            src={parts}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-5">
          <span className="text-[#FF3811] text-3xl font-bold pl-6">
            About Us
          </span>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            We are qualified & of experience in this field
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <button className="bg-[#FF3811] px-3 py-2 text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
