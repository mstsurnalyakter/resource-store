import PropTypes from "prop-types";

const CustomInput = ({ placeholder, type, name, label, id, defaultValue }) => {
  return (
    <div>
      <label className="block mb-2 " htmlFor={name}>
        {label || placeholder}
      </label>
      <input
        className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
        type={type}
        name={name}
        defaultValue={defaultValue ? defaultValue : ""}
        id={id}
        placeholder={placeholder || label}
      />
    </div>
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default CustomInput;
