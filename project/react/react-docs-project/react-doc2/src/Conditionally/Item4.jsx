
import PropTypes from 'prop-types'

const Item4 = ({name,isPacked}) => {
  if (isPacked) {
    return null
  }
  return <li>{name}</li>
}

Item4.propTypes = {
    name:PropTypes.string.isRequired,
    isPacked:PropTypes.bool.isRequired
}

export default Item4