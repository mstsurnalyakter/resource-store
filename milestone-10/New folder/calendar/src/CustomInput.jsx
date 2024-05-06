
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const CustomInput = ({placeholder,type,name,label,id}) => {

  return (
    <div>
      <label className="block mb-2 dark:text-white" htmlFor={name}>
        {placeholder}
      </label>
      <input
        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder || label}
      />

    </div>
  );
}

CustomInput.propTypes = {}

export default CustomInput