import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div className="text-gray-500">
      <ul>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

export default Movie;
