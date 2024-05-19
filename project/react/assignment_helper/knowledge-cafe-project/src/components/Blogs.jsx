import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog';

const Blogs = ({ handleAddToBooksMark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const res = await fetch("blogs.json");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs data");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogsData();
  }, []);



  

  //   console.log(blogs);
  return (
    <div className="lg:col-span-2">
      <h2>Blogs :{blogs.length}</h2>
      <section className="">
        {blogs.map((blog) => (
          <Blog
            handleReadingTime={handleReadingTime}
            handleAddToBooksMark={handleAddToBooksMark}
            key={blog.id}
            blog={blog}
          />
        ))}
      </section>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBooksMark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs