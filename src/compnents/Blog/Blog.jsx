/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';



const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    
    const {id, title, cover_img, hashtag,reading_time, author_img, author, posted_date} = blog;
    
    return (
        <div className="border-2 m-10 p-5">
            <img src={cover_img} alt="" />
            <div className="flex justify-between items-center  p-5 ">
                <div className="flex gap-3">
                    <img src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className='flex gap-3 '>
                
                    <p>{reading_time} min read</p>
                    <button
                    onClick={()=> handleBookmarks(blog)}
                    ><FaBookmark></FaBookmark></button>
                </div>
                
            </div>
            <div className="p-5">
            <h3 className="text-2xl font-bold  ">{title}</h3>
            <p>{hashtag}</p>
            <a className="text-blue-700 cursor-pointer hover:underline" onClick={()=>handleMarkAsRead(id, reading_time)}>Mark as read</a>
            </div>
        </div>
    );
};



export default Blog;