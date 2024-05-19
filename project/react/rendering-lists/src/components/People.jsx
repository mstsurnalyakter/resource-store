import React from 'react'
import PropTypes from 'prop-types'

const People = ({people}) => {
  return (
    <li>
        <h3>{people}</h3>
    </li>
  )
}

People.propTypes = {
    people:PropTypes.string.isRequired
}

export default People