import React from 'react'
import PropTypes from 'prop-types'

const Item3 = ({isPacked,name}) => {
  if (isPacked) {
    return <li>{name} ✔</li>;
  }
  return <li>{name}</li>
}

Item3.propTypes = {
    isPacked:PropTypes.bool.isRequired,
    name:PropTypes.string.isRequired,
}

export default Item3