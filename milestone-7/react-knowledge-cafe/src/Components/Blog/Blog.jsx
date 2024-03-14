import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
    id
  } = blog;
  // console.log(blog);
  // console.log(id);
  return (
    <section className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt={`${author} image`} />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <CiBookmark className="text-2xl" />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href=""> #{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadingTime(id,reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;
