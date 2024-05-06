
import PropTypes from 'prop-types'

const UpdatePageInput = ({
  placeholder,
  type,
  name,
  label,
  id,
  defaultValue,
}) => {
  return (
    <div>
      <label className="block mb-2 " htmlFor={name}>
        {label || placeholder}
      </label>
      <input
        className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
        type={type}
        name={name}
        defaultValue={}
        id={id}
        required
        placeholder={placeholder || label}
      />
    </div>
  );
};

UpdatePageInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default UpdatePageInput