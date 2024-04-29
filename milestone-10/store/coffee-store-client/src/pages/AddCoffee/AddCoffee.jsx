import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photo_url.value;

    const coffeeInfo = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    console.log(coffeeInfo);

    //send data to the server
    fetch(`https://coffee-store-server-lilac-one.vercel.app/coffee`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        // form.reset()
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleAddCoffee}>
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
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        <input className="btn btn-block" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
