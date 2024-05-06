import { useTypewriter, Cursor } from "react-simple-typewriter";

const ContactUs = () => {

    const [text] = useTypewriter({
      words: ["Contact Us", "For any support just send your query"],
      loop: 0,
    });

  return (
    <div className="shadow-lg mt-20 border rounded-l-xl px-6 items-center min-h-[500px] ">
      <h3 className="w-2/3 mx-auto text-center mt-10 font-extrabold text-2xl">
        <span>{text}</span>
        <Cursor />
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-6 ">
        <div>
          <img src="https://i.postimg.cc/v87k69bD/contact-us.webp" alt="" />
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
            <button className="py-3 bg-[#9856AC] text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
