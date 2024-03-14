import React, { useEffect, useState } from "react";
import AllUsers from "../AllUsers/AllUsers";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  //   console.log(users);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const [adddedMember, setAddedMember] = useState([]);

  const handleAddToCart = (newMember) => {
    newMember.isAdded = true;

    const newAddedMember = [...adddedMember, newMember];
    setAddedMember(newAddedMember);
    // console.log(newMember);
  };
  // console.log(adddedMember);

  const totalMale = adddedMember.filter((member) => member.gender == "male");

  const totalFemale = adddedMember.length - totalMale.length;

  const [guider, setGuider] = useState([]);

  useEffect(() => {
    fetch("./guider.JSON")
      .then((res) => res.json())
      .then((result) => setGuider(result));
  }, []);

  return (
    <div>
      <div className="row">
        <h1 className="text-danger">Total Member: {adddedMember.length}</h1>
        <h2>Total Male {totalMale.length}</h2>
        <h2>Total FeMale {totalFemale}</h2>
        <div className="col-md-9 left-side">
          <div className="row">
            {users.map((user) => (
              <AllUsers
                handleAddToCart={handleAddToCart}
                key={user.id.value}
                user={user}
              ></AllUsers>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          {guider.map((pd) => (
            <div className="user-car">
              <div className="user-image">
                <img src={pd.picture.large} alt="" />
              </div>
              <h6>Name: {pd.name.first}</h6>
              <h6>gender: {pd.gender}</h6>
              <h6>Phone: {pd.phone}</h6>
              <h6>Country: {pd.location.country}</h6>
              <h6>Email: {pd.email}</h6>
              <button
                onClick={() => handleAddToCart(pd)}
                className="btn  btn-info mt-3 mb-3"
              >
                Add to group
              </button>
              <br />
              <button className="btn btn-primary mb-3">details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
