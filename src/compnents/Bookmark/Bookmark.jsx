/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
    return (
        <div className="p-1 my-5 rounded-2xl bg-white border-2 shadow-md">
            <h1 className="text-2xl font-extrabold my-5">{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;