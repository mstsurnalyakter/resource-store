import React from 'react'
import PropTypes from 'prop-types'

const MarkCountry = ({mark}) => {

  return (
    <div>

      <ul className=' list-disc'>
        <li>{mark.name.common}</li>
      </ul>
    </div>
  );
}

MarkCountry.propTypes = {
  mark:PropTypes.object.isRequired
}

export default MarkCountry