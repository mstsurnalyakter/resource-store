import useTestimonial from "../../hooks/useTestimonial";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
    const { data } = useTestimonial();
  return (
    <div>
      <h1 className="bg-gradient-to-r mt-10 text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        Testimonials
      </h1>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {data?.length &&
          data?.map((item) => <TestimonialCard item={item} key={item._id} />)}
      </div>
    </div>
  );

};

export default Testimonials;
