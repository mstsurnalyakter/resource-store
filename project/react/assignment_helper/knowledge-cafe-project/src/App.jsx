import { useState } from "react"
import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Header from "./components/Header"

const App = () => {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBooksMark = blog=>{
    const isExist = bookmarks.find(bm => bm.id === blog.id);
    if (isExist) {
      alert("Already exist")
    } else {
      setBookmarks([...bookmarks,blog])
    }
  }
  const handleReadingTime = (id, time ) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark
    // console.log(id);
    const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="container mx-auto p-6 lg:px-16 xl:px-24">
      <section>
        <Header />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Blogs
            handleReadingTime={handleReadingTime}
            handleAddToBooksMark={handleAddToBooksMark}
          />
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
        </section>
      </section>
    </div>
  );
}

export default App