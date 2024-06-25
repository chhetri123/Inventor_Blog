import React from "react";
import { Link } from "react-router-dom";
const LeftComponent = () => {
  return (
    <div className="flex-1">
      <Link to="/" className="font-bold dark:text-white text-4xl">
        <h2 className=" text-2xl font-bold lg:text-2xl font-pacifico">
          Inventoy Blogs 📝
        </h2>
      </Link>
      <p className="text-gray-500 text-sm mt-5">
        Find the latest posts on various topics ( AI , Web Development and many
        more ..)
      </p>
    </div>
  );
};

export default LeftComponent;
