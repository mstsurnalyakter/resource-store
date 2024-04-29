import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffeeData, setCoffeeData }) => {
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-lilac-one.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            const remaining = coffeeData.filter((cof) => cof._id !== _id);
            setCoffeeData(remaining);
          })
          .catch((error) => console.error(error));

        console.log("delete confirmed");
      }
    });
  };

  return (
    // <Link to={`/updateCoffee/${coffee?._id}`}>
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={coffee?.photoURL} alt="Movie" />
      </figure>
      <div className="card-body flex-row justify-around items-center">
        <div>
          <h2 className="card-title">Name:{coffee?.name}</h2>
          <h2 className="card-title">Taste:{coffee?.taste}</h2>
          <h2 className="card-title">Taste:{coffee?.quantity}</h2>
          <h2 className="card-title">Taste:{coffee?.supplier}</h2>
          <h2 className="card-title">Supplier:{coffee?.category}</h2>
          <p>Details:{coffee?.details}</p>
        </div>
        <div className="">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link className="btn join-item" to={`/updateCoffee/${coffee?._id}`}>
              <button>Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(coffee?._id)}
              className="btn join-item"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffeeData: PropTypes.array.isRequired,
  setCoffeeData: PropTypes.func.isRequired,
};

export default CoffeeCard;
