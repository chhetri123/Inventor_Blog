import { Link } from "react-router-dom";
import {
  FaComment,
  FaHeart,
  FaCalendar,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import PostTag from "../PostTag/PostTag";

export default function PostCard({ post }) {
  const date = new Date(post.createdAt);
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
  const day = date.getDate();
  return (
    <div className="bg-white rounded-lg mb-4 py-2 px-3  shadow-sm">
      <div className="flex px-4 pt-4">
        <img
          src={post.user.image} // Replace with your profile picture
          alt="Profile picture"
          className="w-5 h-5 rounded-full mr-2"
        />
        <div className="flex flex-row mt-[-4px]">
          <span className="text-base">{post.user.username}</span>
          &nbsp; in &nbsp;
          <span className="text-gray-500">
            <PostTag tags={post.tags} />
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:w-[72%]">
          <Link to={`/post/${post.slug}`}>
            <div className="px-4 py-2 mt-2">
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="px-4 py-2 mt-1">
              <p className="text-gray-500">{post.content}</p>
            </div>
          </Link>
          <div className="flex px-4 pb-2 justify-between mt-6">
            <div className="flex flex-row gap-2">
              <FaCalendar className="text-gray-500" />
              <span className="text-gray-500 text-sm">{`${month} ${day}`}</span>
            </div>
            <div className="flex flex-row gap-7">
              <div className="flex flex-row">
                <FaHeart className="text-red-500 mt-1" />
                <span className="text-blue-500 mx-3">{post.likes.length}</span>
              </div>
              <div className="flex flex-row">
                <FaComment className="text-blue-500 mt-1" />
                <span className="text-green-500 mx-3">
                  {post.comment.length}
                </span>
              </div>
              <div className="flex flex-row">
                <FaRegBookmark className="text-gray-500  mt-1" />
              </div>
            </div>
          </div>
        </div>
        <Link to={`/post/${post.slug}`}>
          <div className="md:px-4">
            <img
              src={post.image}
              alt="Post image"
              className="w-52 h-52 object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
