/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, spentTime }) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3 border bg-slate-300 ml-2">


            <h2 className="text-center text-3xl text-green-400 font-bold mt-4"> Spent time on read : {spentTime}</h2>
            <div className="mt-4">
                <h2 className="text-3xl font-bold text-center">Bookmarked Blogs: {bookmarks.length} </h2>

                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;