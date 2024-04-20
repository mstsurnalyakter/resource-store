import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-easing
      className="shadow-lg border rounded-l-xl px-6 items-center min-h-[500px] "
    >
      <h3 className="w-2/3 mx-auto text-center mt-10 font-bold text-xl">
        Contact us today if you’d like to know more about how we help buy, sell
        or rent your home
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-6 ">
        <div>
          <img src="https://i.ibb.co/pxMpv1X/home-finder.png" alt="" />
        </div>
        <form className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <textarea
            className="textarea textarea-bordered textarea-lg"
            placeholder="Message"
          ></textarea>
          <div className="form-control mt-6">
            <button className="btn bg-[#0073e1] hover:bg-[#0073e1] text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
