
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({ handleReadingTime, handleBookmarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const loadBlogs = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadBlogs();
  }, []);
  return (
    <div className="col-span-2">
      {blogs.map((blog) => (
        <Blog
          handleReadingTime={handleReadingTime}
          handleBookmarks={handleBookmarks}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleReadingTime: PropTypes.func.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
};

export default Blogs