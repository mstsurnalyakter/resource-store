import React from 'react'
import PropTypes from 'prop-types'

const Item2 = ({isPacked,name}) => {
  return <li>{name} {isPacked && `✔`}</li>
}


Item2.propTypes = {
    isPacked:PropTypes.bool.isRequired,
    name:PropTypes.string.isRequired
}

export default Item2