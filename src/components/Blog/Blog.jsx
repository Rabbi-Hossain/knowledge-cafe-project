import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {

    const {cover,title,author_img,author,reading_time,posted_date,hashtags} = blog

    return (
        <div className="mt-4 space-y-6">
            <img className="w-full" src={cover} alt={`This is image ${title}`} />

            <div className="flex justify-between items-center">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-4">
                        <h2 className="text-2xl font-semibold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read min </span>
                    <button className="text-2xl text-red-400"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>

            <p>
                {
                    hashtags.map((has,index)=><span key={index}><a href=""> #{has} </a></span>)
                }
            </p>

            <button className="text-purple-800 underline">Mark as read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.obj
}

export default Blog;