import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const MyCartPage = () => {
  const { user } = useAuth() || {};

  const [item, setItem] = useState([]);
  const [control,setControl] = useState(false);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user,control]);

  const handleDelete = id =>{


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
          fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Product has been deleted.",
                  icon: "success",
                });
                // const remainingProduct = item.filter(p=> p._id !== id);
                // setItem(remainingProduct)
                setControl(!control)
              }
            })
            .catch((error) => console.error(error));
        }
      });
  }


  return (
    <div className="gadgetContainer pt-10">
      {item?.map((p) => (
        <div key={p._id} className="p-2 border-2">
          <h1>Name:{p?.name}</h1>
          <h1>Price:{p.price}</h1>
          <Link to={`/products/${p._id}`}>
            <button className="btn mr-2">Update</button>
          </Link>
          <button onClick={()=>handleDelete(p._id)} className="btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyCartPage;
