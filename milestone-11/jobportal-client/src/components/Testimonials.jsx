import img from '/test-img.webp'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard';

const Testimonials = () => {
  return (
    <div>
      <div className=' w-2/3 mx-auto text-center space-y-4'>
        <h2 className='text-3xl font-bold dark:text-gray-200'>What Our Candidates Say</h2>
        <p>
          Discover the voices of success! Our candidates speak for themselves
          about their transformative experiences
        </p>
      </div>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

          <TestimonialsCard/>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials