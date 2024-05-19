import PropTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className=" space-y-3">
      <div className=" bg-purple-100 p-4 rounded-xl text-pink-500">
        <h2 className="text-center text-2xl font-bold">
          Reading Time: {readingTime}
        </h2>
      </div>
      <section className={`p-4 bg-[#1111110D] rounded-xl`}>
        <h2 className="text-2xl text-center mb-3">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        <section>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} />
          ))}
        </section>
      </section>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks