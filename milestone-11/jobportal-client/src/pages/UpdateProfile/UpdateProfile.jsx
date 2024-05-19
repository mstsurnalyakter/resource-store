
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import DynamicTitle from "../../components/DynamicTitle";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });

  const onSubmit = (data) => {
    const { fullName, photoURL } = data;

    updateUserProfile(fullName, photoURL)
      .then(() => {
        setUser({ fullName, photoURL });
        toast.success("User Profile updated successfully");
        setTimeout(() => {
          navigate("/profile");
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className=" border border-[#FF4153]">
      <DynamicTitle pageTitle="Update Profile" />
      <div className="shadow-lg  p-5  dark:bg-[#1a2641d5] dark:text-gray-100">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="flex items-center justify-center text-3xl font-semibold bg-gradient-to-r from-[#e58891] via-purple-400 to-[#FF4153] bg-300% text-transparent bg-clip-text animate-gradient">
            <span className="">Update Profile</span>
          </p>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 dark:text-gray-900"
        >
          <div>
            <label className="block mb-2 " htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
              type="text"
              placeholder="Full Name"
              name="fullName"
              {...register("fullName")}
            />
          </div>
          <div>
            <label className="block mb-2 " htmlFor="image">
              Email
            </label>
            <input
              className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
              type="email"
              placeholder="email"
              readOnly
              {...register("email")}
            />
          </div>
          <div>
            <label className="block mb-2 " htmlFor="image">
              Photo URL
            </label>
            <input
              className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
              type="url"
              placeholder="Photo URL"
              {...register("photoURL")}
            />
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#FF4153] via-purple-600 to-[#FF4153] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
