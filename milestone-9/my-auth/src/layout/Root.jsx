import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
// import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

Root.propTypes = {};

export default Root;
