import { useForm } from 'react-hook-form';
import useContextData from '../../hooks/useContextData';

const EditForm = () => {
    const { user, updateUserProfile } = useContextData();

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
    const { fullName, email, photoURL } = data;
    updateUserProfile(fullName, email, photoURL)
    .then(()=>{
        console.log("User Profile updated successfully");
    })
    .catch(error=>{
        console.log(error);
    })

  }

  return (
    <div>
      <div className="shrink-0 w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className="text-black text-2xl font-medium">Create an account</h3>

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
        </form>
      </div>
    </div>
  );
}

EditForm.propTypes = {}

export default EditForm