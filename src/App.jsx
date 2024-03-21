
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks, setBookmarks] = useState([]) 

  const bookmarksHandler = book =>{
    const newBookMarks = [...bookmarks, book]
    setBookmarks(newBookMarks)
  }
 
  return (
    <div className='container mx-auto'>
      <Header></Header>

      <div className='md:flex'>
        <Blogs bookmarksHandler={bookmarksHandler}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </div>
  )
}

export default App
