import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photo_url.value;

    const updatedCoffeeInfo = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    console.log(updatedCoffeeInfo);

    //send data to the server
    fetch(
      `https://coffee-store-server-lilac-one.vercel.app/coffee/${coffee?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffeeInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        // form.reset()
      })
      .catch((error) => console.error(error));
  };

  console.log(coffee);
  return (
    <div>
      <Link to={"/"}>Black</Link>

      <h2>Update Coffee:{coffee?.name}</h2>

      <form className="space-y-6" onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="flex items-center justify-center gap-5">
          <div className="form-control">
            <label className="label-text">
              <span>Coffee Name</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                defaultValue={coffee?.name}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label-text">
              <span>Available Quantity</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                defaultValue={coffee?.quantity}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* form Supplier and Taste row */}
        <div className="flex items-center justify-center gap-5">
          <div className="form-control">
            <label className="label-text">
              <span>Supplier Name</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                defaultValue={coffee?.supplier}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label-text">
              <span>Taste</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                defaultValue={coffee?.taste}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="flex items-center justify-center gap-5">
          <div className="form-control">
            <label className="label-text">
              <span>Category</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={coffee?.category}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label-text">
              <span>Details</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={coffee?.details}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* form photo url row */}
        <div className="flex items-center justify-center gap-5">
          <div className="form-control">
            <label className="label-text">
              <span>Photo URL</span>
            </label>
            <label className="input-ground">
              <input
                type="text"
                name="photo_url"
                placeholder="Photo URL"
                defaultValue={coffee?.photoURL}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        <input className="btn btn-block" type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
