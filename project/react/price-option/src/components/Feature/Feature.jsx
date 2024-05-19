import PropTypes from 'prop-types'
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
  return (
    <div>
        <p className='flex items-center gap-2'>
            <FaRegCheckCircle className='bg-green-600' /> {feature}
        </p>
    </div>
  )
}

Feature.propTypes = {
    feature:PropTypes.string.isRequired
}

export default Feature