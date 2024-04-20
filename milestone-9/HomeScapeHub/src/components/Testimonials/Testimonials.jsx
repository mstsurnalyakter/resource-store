
import useTestimonials from "../../hooks/useTestimonials";
import Spinner from "../Spinner/Spinner";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";


const Testimonials = () => {
  const { testimonials, dataLoading } = useTestimonials();


  return (
    <div className="space-y-9">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold">Testimonials</h3>
        <p className="w-2/3 mx-auto text-[#150B2BB3]">
          Publish the best of your client testimonials and let the world know
          what a great agent or real estate agency you are. Testimonials build
          trust.
        </p>
      </div>
      {dataLoading && (
        <div className="mx-auto w-14 my-7">
          <Spinner />
        </div>
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.length &&
          testimonials.map((item) => (
            <TestimonialsCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
