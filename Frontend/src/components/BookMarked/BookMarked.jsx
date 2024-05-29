import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import PostTag from "../PostTag/PostTag";

export default function PostCard({ post, fromBookMarked }) {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Assuming an average reading speed of 200 words per minute
  const readingTime = Math.ceil(post.content.split(" ").length / 200);

  return (
    <div className="bg-white rounded-lg mb-1">
      <div className="flex px-2">
        <img
          src={post.user.image} // Replace with your profile picture
          alt="Profile picture"
          className="w-7 h-7 rounded-full mr-2"
        />
        <div className="flex flex-row text-xs">
          <span className="font-bold">{post.user.username}</span>
          &nbsp; in &nbsp;
          <span className="text-gray-500 font-bold">
            <PostTag tags={post.tags} />
          </span>
        </div>
      </div>
      <div className="flex flex-col px-2">
        <Link to={`/post/${post.slug}`}>
          <div className="py-1">
            <h2 className="font-black">{post.title}</h2>
          </div>
        </Link>
        <div className="flex pb-2 mt-3 gap-x-4">
          <div className="flex">
            <span className="text-gray-500 text-sm mx-1">{formattedDate}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 text-sm mx-1">
              {readingTime} mins read.
            </span>
          </div>
          <div className="flex">
            <FaBookmark className="text-gray-500  mt-1" />
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
