
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

const App = ()=> {
  const [readingTime,setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);


  const handleReadingTime = (id,time) =>{
    setReadingTime(readingTime + time)
  }

  const handleBookmarks = (blog) =>{
    // setBookmarks([...bookmarks,title])
    // console.log(blog);
    setBookmarks([...bookmarks,blog])
  }



  return (
    <div className="container mx-auto p-4 lg:px-24">
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleBookmarks={handleBookmarks}
        />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}/>
      </section>
    </div>
  );
}

export default App
