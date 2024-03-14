import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ readingTime, bookmarks }) => {
  return (
    <div className="space-y-3">
      <section className="bg-[#6047EC1A] bottom-2 border-[#6047EC] p-5 rounded-xl">
        <h3 className="text-center text-[#6047EC] text-2xl font-bold ">
          Spent time on read : {readingTime} min
        </h3>
      </section>
      <section className="bg-gray-300 p-5 rounded-xl space-y-4">
        <h2 className='text-[#111] text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h2>
       {
        bookmarks.map((bookmark,index)=><Bookmark bookmark={bookmark} key={index}/>)
       }
      </section>
    </div>
  );
};

Bookmarks.propTypes = {
  readingTime: PropTypes.number.isRequired,
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks