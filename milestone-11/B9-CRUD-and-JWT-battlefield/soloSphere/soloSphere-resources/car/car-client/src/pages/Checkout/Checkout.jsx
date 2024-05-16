
import { useLoaderData } from "react-router";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;

  return (
    <div>
      <h2>Book Services:{title}</h2>

      <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Text here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Type"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <textarea
            placeholder="Product Description"
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

Checkout.propTypes = {};

export default Checkout;
