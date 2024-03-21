import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({bookmarksHandler,spentTimeHandler}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className="w-2/3 border">
            <h2 className="text-3xl">Blogs:{blogs.length}</h2>

            {
                blogs.map(blog=><Blog key={blog.id} spentTimeHandler={spentTimeHandler} bookmarksHandler={bookmarksHandler} blog={blog}></Blog>)
            }
        </div>
    );
};


export default Blogs;