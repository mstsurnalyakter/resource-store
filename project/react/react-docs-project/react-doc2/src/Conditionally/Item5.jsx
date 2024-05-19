
import PropTypes from 'prop-types'

const Item5 = ({isPacked,name}) => {
  return <li>{isPacked ?  name + '✔' :  name }</li>;
}

Item5.propTypes = {
  isPacked:PropTypes.bool.isRequired,
  name:PropTypes.string.isRequired,
};

export default Item5