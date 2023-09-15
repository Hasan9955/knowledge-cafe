/* eslint-disable react/prop-types */


const Reading = ({readingTime}) => {
    
    return (
        <div className="bg-gray-200 rounded-lg ">
            <p className="text-xl m-5 p-5 text-blue-500 font-bold">Spent time on read : {readingTime} min</p>
        </div>
    );
};

export default Reading;