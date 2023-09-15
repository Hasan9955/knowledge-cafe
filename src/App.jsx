
import { useState } from 'react'
import './App.css'
import Blogs from './compnents/Blogs/Blogs'
import BookMarks from './compnents/Bookermarke/BookMarks'
import Header from './compnents/Header/Header'
import Reading from './compnents/Reading'

function App() {

  const [bookMarks, setBookmarks] = useState([])
  const [ readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog => {
    const newBookmarks = [...bookMarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    // remove item from bookmark 
    const removeFromBookMark = bookMarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeFromBookMark)
  }

  return (
    <>
      
      
      <Header></Header>
      <div className='md:flex m-5 p-5'>
      <Blogs
      handleBookmarks={handleBookmarks}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <div>
        <Reading
        readingTime= {readingTime}
        ></Reading>
      <BookMarks
      bookMarks = {bookMarks}
      
      ></BookMarks>
      </div>
      </div>
    </>
  )
}

export default App
