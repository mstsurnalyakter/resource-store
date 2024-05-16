import React from 'react'
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    const testimonial = [
      {
        id: 101,
        name: "Dana Gilmore",
        position: "Software Engineer",
        image: "https://i.ibb.co/Ssv9BN3/testimonial1.webp",
        testimonial:
          "As a software engineer, I've explored various job platforms, but this one stands out. The personalized job recommendations aligned perfectly with my skills and aspirations. Within weeks, I secured a position at a cutting-edge tech company. Thank you!",
      },
      {
        id: 102,
        name: "Susan Barkley",
        position: "Data Scientist",
        image: "https://i.ibb.co/2cKXqPf/testimonial2.webp",
        testimonial:
          "The job search process was seamless. The platform's intuitive interface allowed me to filter relevant data science positions effortlessly. I'm now part of a dynamic team, working on exciting projects.",
      },
      {
        id: 103,
        name: "Lisa Simpson",
        position: "UX Designer",
        image: "https://i.ibb.co/3hg5m85/testimonial3.webp",
        testimonial:
          "As a UX designer, I appreciate platforms that prioritize user experience. This one exceeded my expectations. The job listings were tailored to my expertise, and the application process was straightforward. I'm now crafting delightful experiences for a forward-thinking company.",
      },
      {
        id: 104,
        name: "Sara Loreley",
        position: "Marketing Specialist",
        image: "https://i.ibb.co/2W49PJy/testimonial4.webp",
        testimonial:
          "Impressive job listings and responsive support. The platform helped me transition smoothly into a marketing role. I'm now part of a dynamic team, driving brand growth and customer engagement.",
      },
      {
        id: 105,
        name: "Jessica Fowley",
        position: "Product Manager",
        image: "https://i.ibb.co/nfHwZGX/testimonial5.webp",
        testimonial:
          "The platform played a pivotal role in my career growth. As a product manager, I needed opportunities that aligned with my vision. This platform delivered. I'm now leading innovative projects and shaping the future of our product.",
      },

      {
        id: 106,
        name: "Sarah Adams",
        position: "Sales Executive",
        image: "https://i.ibb.co/sbkvngy/testimonials6.webp",
        testimonial:
          "Smooth job application process. I'm now part of an amazing sales team, closing deals and building strong client relationships. This platform truly understands the needs of sales professionals.",
      },
    ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonial.length &&
          testimonial.map((item) => (
            <TestimonialsCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default Testimonials