import { MdAlarmAdd } from "react-icons/md";
import CustomInput from "../../components/CustomInput/CustomInput";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import { baseURL } from "../../utilities/url";

const AddCraftItem = () => {


  const handleAddCraftItem = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const user_name = form.userName.value;
    const user_email = form.userEmail.value;
    const processing_time = form.processing_time.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const short_description = form.short_description.value;


    const itemInfo = {
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

    console.log(itemInfo);


    fetch(`${baseURL}/paperGlasses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Art & Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch(error=>{
        toast.error(error.message);
      })
  };

  return (
    <div className="pt-10">
      <DynamicTitle pageTitle="Add Craft Item" />
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="flex items-center justify-center text-3xl font-semibold bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
            <span className="mr-3 text-[#9856AC]">
              <MdAlarmAdd />
            </span>
            <span className="">Add Art & Craft Item</span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddCraftItem}>
          <div className="flex gap-8 ">
            <div className="flex-1 space-y-4">
              <CustomInput
                type="url"
                placeholder="Image"
                label="Image"
                id="image"
                name="image"
              />

              <CustomInput
                type="text"
                placeholder="Item Name"
                label="Item Name"
                id="item_name"
                name="item_name"
              />

              <select
                name="subcategory_Name"
                id="subcategory_Name"
                className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                type="text"
                placeholder="Select Subcategory Name"
                required
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
                name="price"
              />

              <div>
                <label className="block  mb-2 " htmlFor="rating">
                  Rating
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                  maxLength={5}
                  max={5}
                  min={0}
                  required
                  type="number"
                  placeholder="Enter Rating"
                  id="rating"
                  name="rating"
                />
              </div>
            </div>
            {/* Right side */}
            <div className="flex-1 space-y-6">
              <CustomInput
                type="text"
                placeholder="Enter Processing Time"
                label="Processing Time"
                id="processing_time"
                name="processing_time"
              />

              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
                type="text"
                placeholder="Select Customization"
                required
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
              >
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>

              <CustomInput
                type="text"
                placeholder="User Name"
                label="User Name"
                id="userName"
                name="userName"
              />
              <CustomInput
                type="text"
                placeholder="User Email"
                label="User Email"
                id="userEmail"
                name="userEmail"
              />
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
              className="textarea textarea-bordered w-full focus:outline-[#9856AC]"
            ></textarea>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
