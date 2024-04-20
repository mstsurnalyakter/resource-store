import { useLoaderData } from "react-router"


const Update = () => {
const loadedUser = useLoaderData();

const handleUpdateUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name,email);
    const updatedUser ={name,email}

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            alert("User updated Successfully.")
        }
      })
      .catch((error) => {
        console.error(error);
      });
}

  return (
    <div className="flex items-center justify-center mt-32">
      <div className="space-y-5">
        <h3>Update information of {loadedUser.name}</h3>
        <form onSubmit={handleUpdateUser} action="">
          <input
            className="border border-black"
            defaultValue={loadedUser?.name}
            type="text"
            name="name"
            id="name"
          />
          <br />
          <br />
          <input
            className="border border-black"
            defaultValue={loadedUser?.email}
            type="email"
            name="email"
            id="email"
          />
          <br />
          <br />
          <input className="border border-black" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
}

export default Update