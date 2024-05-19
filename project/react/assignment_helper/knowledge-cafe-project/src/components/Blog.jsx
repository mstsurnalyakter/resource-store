import React from 'react'
import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBooksMark, handleReadingTime }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  // console.log(id);
  return (
    <div className="space-y-4 mb-10">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the ${title}`}
      />
      <section className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="w-16" src={author_img} alt={`picture of ${author}`} />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span>{reading_time} min reading </span>
          <button
            onClick={() => handleAddToBooksMark(blog)}
            className="text-red-600"
          >
            <FaBookmark />
          </button>
        </div>
      </section>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}># {hash}</span>
        ))}
      </p>
      <button
        onClick={() => handleReadingTime(id,reading_time)}
        className="text-red-600 font-bold underline"
      >
        Make As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBooksMark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog