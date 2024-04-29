import Swal from "sweetalert2";
import useContextAPI from "../../hooks/useContextAPI";
import useUsers from "../../hooks/useUsers";

const SgnIn = () => {
  const { handleSingIn } = useContextAPI();
  const { loadUsers, isLoading, refetch } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    handleSingIn(email, password)
      .then((result) => {
        console.log(result.user);
        const updatedUser = {
          email,
          lastLoggedAt: result?.user?.metadata?.lastSignInTime,
        };

        // update last logged at int the database

        fetch(`https://coffee-store-server-lilac-one.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "User Sign In Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              refetch();
              form.reset();
            }
            console.log(data);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h2>Please Sign In Now</h2>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SgnIn;
