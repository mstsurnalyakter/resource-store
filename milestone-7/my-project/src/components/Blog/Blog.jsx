import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleReadingTime, handleBookmarks }) => {
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
  // console.log(blog);
  return (
    <div className="mb-14 space-y-5">
      <img className="w-full" src={cover} alt={`cover image ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-12" src={author_img} alt={`${author} picture`} />
          <div>
            <h3 className="text-[#111] text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-[#11111199]">{reading_time} min read</p>
          <button onClick={() => handleBookmarks(blog)}>
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-[#111] text-4xl font-bold">{title}</h2>
      <div>
        {hashtags.map((hash, index) => (
          <span className="text-[#11111199]" key={index}>
            {" "}
            #{hash}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleReadingTime(id, reading_time)}
        className=" text-purple-800 font-semibold text-xl underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
};

export default Blog