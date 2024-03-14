import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="bg-gray-300  p-3 m-3 rounded-xl">
      <div>
        <h3 className="text-3xl text-center mb-3">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark,index) => (
        <Bookmark key={index} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
