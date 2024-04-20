import { Helmet } from "react-helmet-async";
import useContextData from "../../hooks/useContextData";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const UpdateProfile = () => {
const { user, updateUserProfile,  setUser} = useContextData();
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
          setUser({ fullName,  photoURL });
          toast.success("User Profile updated successfully");
          setTimeout(() => {
            navigate('/profile');
            window.location.reload();
          }, 2000);
      })
      .catch((error) => {
        toast.error(error.message );
      });
  };




 return (
   <div className="flex  min-h-[500px] flex-col  items-center justify-center">
     <Helmet>
       <title>HomeScapeHub | Update Profile</title>
     </Helmet>

     <div className="shrink-0 w-full ">
       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
         <h3 className="text-3xl font-bold bg-gradient-to-r from-[#328EFF] via-purple-600 to-pink-300 bg-300% text-transparent bg-clip-text animate-gradient text-center">
           Update Profile
         </h3>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Full Name</span>
           </label>
           <input
             type="text"
             placeholder="Full Name"
             className="input input-bordered"
             {...register("fullName")}
           />
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input
             type="email"
             placeholder="email"
             readOnly
             className="input input-bordered"
             {...register("email")}
           />
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Photo URL</span>
           </label>
           <input
             type="url"
             placeholder="photoURL"
             className="input input-bordered"
             {...register("photoURL")}
           />
         </div>

         <div className="form-control mt-1">
           <button
             //  onClick={() => setEdit(!edit)}
             className=" bg-gradient-to-r shadow-md text-center text-3xl from-pink-300 via-purple-600 to-[#328EFF] bg-300% rounded-xl animate-gradient text-white px-5 py-3"
           >
             Save
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default UpdateProfile