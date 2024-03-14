import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./AllUsers.css";

const AllUsers = (props) => {
  console.log(props.user);

  const { name, gender, phone, location, email, picture } = props.user;
  //   console.log(location.country);

  return (
    <div className="col-md-4">
      <div className="user-car">
        <div className="user-image">
          <img src={picture.large} alt="" />
        </div>
        <h6>Name: {name.first}</h6>
        <h6>gender: {gender}</h6>
        <h6>Phone: {phone}</h6>
        <h6>Country: {location.country}</h6>
        <h6>Email: {email}</h6>
        {props.user.isAdded ? (
          <button className="btn btn-danger mt-3 mb-3">Already Added</button>
        ) : (
          <button
            onClick={() => props.handleAddToCart(props.user)}
            className="btn  btn-info mt-3 mb-3 "
          >
            Add to group
          </button>
        )}

        <br />
        <ReactModal user={props.user}></ReactModal>
      </div>
    </div>
  );
};

export default AllUsers;
