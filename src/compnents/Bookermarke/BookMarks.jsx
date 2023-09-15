/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const BookMarks = ({bookMarks}) => {
   
    return (
        <div className=" border-2  p-5 bg-[#e7e4e4] rounded-xl">
            <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h1>
            {
                bookMarks.map((bookmark, idx) => (
                    <Bookmark
                    key={idx}
                    bookmark={bookmark}
                    
                    ></Bookmark>
                ))
            }
        </div>
    );
};

export default BookMarks;