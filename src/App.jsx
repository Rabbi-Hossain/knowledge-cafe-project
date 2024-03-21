
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks, setBookmarks] = useState([]) 

  const [spentTime, setSpentTime] = useState(0)

  const bookmarksHandler = book =>{
    const newBookMarks = [...bookmarks, book]
    setBookmarks(newBookMarks)
  }


  const spentTimeHandler = time =>{
    const newTime = spentTime + time
    setSpentTime(newTime)
  }
 
  return (
    <div className='container mx-auto'>
      <Header></Header>

      <div className='md:flex'>
        <Blogs spentTimeHandler={spentTimeHandler} bookmarksHandler={bookmarksHandler}></Blogs>
        <Bookmarks spentTime={spentTime} bookmarks={bookmarks}></Bookmarks>
      </div>

    </div>
  )
}

export default App
