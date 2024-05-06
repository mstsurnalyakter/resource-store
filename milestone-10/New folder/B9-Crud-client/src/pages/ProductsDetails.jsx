import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { baseURL } from "../utilitis/Url";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";



const ProductsDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:5000/updateProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  },[id])

  const handleUpdateProduct = e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const brand = form.brand.value;

    const info = { name, price, image, type, rating, brand };

    fetch(`http://localhost:5000/singleProduct/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
       if (data?.modifiedCount) {
         Swal.fire({
           title: "Success!",
           text: "Product Update Successfully",
           icon: "success",
           confirmButtonText: "Cool",
         });
       }
    })
    .catch(error=>console.error(error))


  }




  return (
    <div className="pb-10 mt-10 gadgetContainer">
      <form onSubmit={handleUpdateProduct}>
        <div className="flex gap-8 ">
          <div className="flex-1">
            <label className="block mb-2 dark:text-white" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={product.name}
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Name"
              id="name"
              name="name"
            />

            <label className="block mt-4 mb-2 dark:text-white" htmlFor="brand">
              Brand Name
            </label>
            <select
              name="brand"
              defaultValue={product.brand}
              id="brand"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Select Brand"
            >
              <option value="Test" selected>
                Test
              </option>
              <option value="Test2" selected>
                Test2
              </option>
              <option value="Test3" selected>
                Test3
              </option>
            </select>

            <label className="block mt-4 mb-2 dark:text-white" htmlFor="price">
              Price
            </label>
            <input
              defaultValue={product.price}
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Enter Price"
              id="Price"
              name="price"
            />
          </div>
          {/* Right side */}
          <div className="flex-1">
            <label className="block mb-2 dark:text-white" htmlFor="image">
              Image
            </label>
            <input
              defaultValue={product.image}
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="url"
              placeholder="Enter Image URL"
              id="image"
              name="image"
            />
            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
              Type
            </label>
            <input
              defaultValue={product.type}
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Enter type"
              id="type"
              name="type"
            />

            <label className="block mt-4 mb-2 dark:text-white" htmlFor="rating">
              Rating
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              maxLength={5}
              max={5}
              min={0}
              type="number"
              placeholder="Enter Rating"
              id="rating"
              defaultValue={product.rating}
              name="rating"
            />
          </div>
        </div>

        <input
          className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default ProductsDetails;
