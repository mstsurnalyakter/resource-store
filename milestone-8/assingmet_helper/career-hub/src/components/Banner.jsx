
import bg1 from "../assets/images/bg1.png";

const Banner = ({ title }) => {
  return (
    <div className="bg-gradient-to-r mb-32 from-blue-50 to-purple-50 w-full">
      <div className="p-32 relative">
        <h1 className="text-center text-[#1A1919] text-3xl font-extrabold">
          {title}
        </h1>
        <figure className="absolute bottom-0">
          <img src={bg1} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner