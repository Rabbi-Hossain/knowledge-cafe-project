/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3 border bg-slate-300 ml-2">
            <h2 className="text-3xl font-bold text-center">Bookmarked Blogs: {bookmarks.length} </h2>

            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;