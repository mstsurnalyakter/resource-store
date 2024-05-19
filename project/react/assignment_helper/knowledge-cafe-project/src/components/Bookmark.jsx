import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark
  return (
    <div className="bg-base-100 shadow-xl p-4 rounded-xl mb-3">
      <h3>{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark:PropTypes.object.isRequired
};

export default Bookmark