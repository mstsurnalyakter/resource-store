import React from "react";
import PropTypes from "prop-types";
import useUsers from "../../hooks/useUsers";
import { SpinnerCircular } from "spinners-react";
import UsersCard from "../../components/UsersCard/UsersCard";
import Swal from "sweetalert2";

const Users = () => {
  const { loadUsers, isLoading, refetch } = useUsers();

  const handleDelete = (_id) => {
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
        fetch(`https://coffee-store-server-lilac-one.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-44">
        <SpinnerCircular
          size={88}
          thickness={180}
          speed={165}
          color="rgba(57, 172, 67, 1)"
          secondaryColor="rgba(172, 57, 57, 0.37)"
        />
      </div>
    );
  }

  return (
    <div>
      <h3>Users : {loadUsers?.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreateAt</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {loadUsers?.length &&
              loadUsers?.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.createAt}</td>
                    <td>{user?.lastLoggedAt}</td>
                    <td>
                      <button
                        className="bg-red-500 px-3 py-2 rounded-md text-white"
                        onClick={() => handleDelete(user?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;
