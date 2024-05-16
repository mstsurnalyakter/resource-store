import { useLoaderData } from "react-router";
import useContextData from "../hooks/useContextData";
import toast from "react-hot-toast";
// import useContextData from "../../hooks/useContextData";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContextData();

  const handleBookOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const price = form.price.value;
    const description = form.description.value;

    const booking = {
      customerName: name,
      email,
      date,
      service: title,
      service_id: _id,
      price,
      description,
      img,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("service successfully add");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-[#FF3811]">
        Book Services:{title}
      </h2>

      <form onSubmit={handleBookOrder} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="price"
              defaultValue={`$ ${price} `}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <textarea
            placeholder="Product Description"
            name="description"
            className="textarea textarea-bordered w-full "
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white btn-block"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
