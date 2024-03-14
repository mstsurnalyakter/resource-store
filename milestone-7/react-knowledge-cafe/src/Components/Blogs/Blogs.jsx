import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
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
    <div className="lg:col-span-2">
      <h2 className="text-4xl"> blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
