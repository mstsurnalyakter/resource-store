
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const CustomInput = ({ placeholder, type, name, label, id, defaultValue }) => {
  return (
    <div>
      <label className="block mb-2 " htmlFor={name}>
        {label || placeholder}
      </label>
      <input
        className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
        type={type}
        name={name}
        defaultValue={defaultValue ? defaultValue:""}
        id={id}
        required
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

export default CustomInput