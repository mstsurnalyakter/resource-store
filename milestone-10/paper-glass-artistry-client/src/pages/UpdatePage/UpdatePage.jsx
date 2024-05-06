import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdAlarmAdd } from "react-icons/md";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput/CustomInput";
import useContextData from "../../hooks/useContextData";
import useMyArtAndCraftList from "../../hooks/useMyArtAndCraftList";
import { toast } from "react-toastify";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import { baseURL } from "../../utilities/url";



const UpdatePage = () => {

  const {user} = useContextData();
  const {  refetch } = useMyArtAndCraftList();

   const { id } = useParams();
   const [item, setItem] = useState({});

   useEffect(() => {
     fetch(`${baseURL}/paperGlasses/singleItem/${id}`)
       .then((res) => res.json())
       .then((data) => {
         setItem(data);
       })
       .catch((error) => toast.error(error.message));
   }, [id]);


   const handleUpdate = (e) => {
     e.preventDefault();

     const form = e.target;

     const image = form.image.value;
     const item_name = form.item_name.value;
     const subcategory_Name = form.subcategory_Name.value;
     const price = form.price.value;
     const rating = form.rating.value;
     const processing_time = form.processing_time.value;
     const customization = form.customization.value;
     const stockStatus = form.stockStatus.value;
     const short_description = form.short_description.value;

     const user_email = user.email;
     const user_name = user.displayName;

     const updateItemInfo = {
       image,
       item_name,
       subcategory_Name,
       price,
       rating,
       processing_time,
       customization,
       stockStatus,
       short_description,
       user_name,
       user_email,
     };


      fetch(`${baseURL}/paperGlasses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateItemInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: "Art & Craft Item Update Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            refetch();
          }
        })
        .catch((error) => toast.error(error.message));
   };


   const {
     image,
     item_name,
     subcategory_Name,
     price,
     rating,
     processing_time,
     customization,
     stockStatus,
     short_description,
   } = item || {};


  return (
    <div className="pt-10">
      <DynamicTitle pageTitle="Update Page" />
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        <div className="mt-5 mb-8">
          <p className="flex items-center justify-center text-3xl font-semibold bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
            <span className="mr-3 text-[#9856AC]">
              <MdAlarmAdd />
            </span>
            <span className="">Update Art & Craft Item</span>
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex gap-8 ">
            <div className="flex-1 space-y-4">
              <CustomInput
                type="url"
                placeholder="Image"
                defaultValue={image}
                label="Image"
                id="image"
                name="image"
              />

              <CustomInput
                type="text"
                placeholder="Item Name"
                defaultValue={item_name}
                label="Item Name"
                id="item_name"
                name="item_name"
              />

              <select
                name="subcategory_Name"
                id="subcategory_Name"
                className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                value={subcategory_Name}
                onChange={(e) =>
                  setItem({ ...item, subcategory_Name: e.target.value })
                }
              >
                <option value="">Select Subcategory Name</option>
                <option value="Card Making">Card Making</option>
                <option value="Scrapbooking">Scrapbooking</option>
                <option value="Paper Quilling & origami">
                  Paper Quilling & origami
                </option>
                <option value="Glass Painting">Glass Painting</option>
                <option value="Lampworking">Lampworking</option>
                <option value="Glass Dying & Staining">
                  Glass Dying & Staining
                </option>
              </select>

              <CustomInput
                type="text"
                placeholder="Enter Price"
                label="Price"
                id="price"
                defaultValue={price}
                name="price"
              />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label className="block mt-4 mb-2 " htmlFor="rating">
                  Rating
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                  maxLength={5}
                  defaultValue={rating}
                  max={5}
                  min={0}
                  required
                  type="number"
                  placeholder="Enter Rating"
                  id="rating"
                  name="rating"
                />
              </div>

              <CustomInput
                type="text"
                placeholder="Enter Processing Time"
                label="Processing Time"
                id="processing_time"
                name="processing_time"
                defaultValue={processing_time}
              />

              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                type="text"
                placeholder="Select Customization"
                required
                value={customization}
                onChange={(e) =>
                  setItem({ ...item, customization: e.target.value })
                }
              >
                <option value="">Select Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <select
                name="stockStatus"
                required
                id="stockStatus"
                className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                type="text"
                placeholder="Select StockStatus"
                value={stockStatus}
                onChange={(e) =>
                  setItem({ ...item, stockStatus: e.target.value })
                }
              >
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value=" Made to Order">Made to Order</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 " htmlFor="short_description">
              Short Description
            </label>

            <textarea
              required
              id="short_description"
              name="short_description"
              placeholder="Enter Short Description"
              defaultValue={short_description}
              className="textarea textarea-bordered w-full focus:outline-[#9856AC]"
            ></textarea>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdatePage