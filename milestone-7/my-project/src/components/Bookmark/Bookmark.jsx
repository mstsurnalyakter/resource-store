import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div className='bg-[#fff] rounded-xl p-10'>
        <h2 className='text-xl font-semibold'>{bookmark.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}

export default Bookmark