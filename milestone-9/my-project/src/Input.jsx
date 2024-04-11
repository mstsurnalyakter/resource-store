import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder },ref) => {
  return <input ref={ref} type={type} placeholder={placeholder} />;
};

const ForwardedInput = React.forwardRef(Input);

Input.propTypes = {};

export default ForwardedInput;
