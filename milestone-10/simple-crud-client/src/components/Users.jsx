import { useState } from "react";
import { useLoaderData } from "react-router"
import { Link } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);

    const handleDeleteUser = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = users.filter((user) => user._id !== _id);
            setUsers(remaining);
          }
        })
        .catch(error=>{
          console.error(error);
        })

    }
  return (
    <div className="text-center mt-9 ">
      <h2 className="font-bold text-3xl text-red-600">
        Users: {users.length}{" "}
      </h2>
      <div className="flex flex-col gap-5 mt-16  items-center justify-center">
        {users.map((user) => (
          <div className="border-2 p-5 flex gap-4" key={user._id}>
            <div>
              <h3>Name:{user.name}</h3>
              <h3>Email:{user.email}</h3>
            </div>
            <Link
              className="bg-green-500 flex justify-center text-white px-2 text-sm rounded-md"
              to={`/update/${user._id}`}
            >
              <button>Update</button>
            </Link>
            <button
              onClick={() => handleDeleteUser(user._id)}
              className="bg-red-500 text-white px-2 text-sm rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users