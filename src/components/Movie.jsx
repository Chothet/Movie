import React from "react";
import photo from "../img/blue_cloud_2.jpg";

const Movie = ({ name, price }) => {
  return (
    // <div className="text-gray-500">
    //   <ul>
    //     <li>{name}</li>
    //     <li>{price}</li>
    //   </ul>
    // </div>
    <div className="w-30 my-4 h-30 rounded shadow bg-gray-300  flex-auto p-1 hover:bg-white">
       <img src = {photo} alt="" className="mx-auto px-3 my-3" width = "100" height="50"/>
       <p className="text-center">h1</p>
     </div>
  );
};

export default Movie;
