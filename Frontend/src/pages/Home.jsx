import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard/PostCard";
import TagNav from "../components/TagNav/TagNav";
import BookMarked from "../components/BookMarked/BookMarked";
const fakePosts = [
  {
    slug: "fake-post",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kv6zwokNHIj0oEdz1bHbsg.png",
    title: "It happened on Medium: April 2024 roundup",
    category: "all",
    tags: ["music", "live"],
    content:
      "fake-post-content lorem ipsum dolor sit amet lore Lorem ipsum dolor sit amet lore lorem ipsum ",
    createdAt: "2019-12-12T19:30:00.000Z",
    updatedAt: "2019-12-12T19:30:00.000Z",
    likes: ["all", "music", "live"],
    _id: "1",
    userId: "1",
    user: {
      _id: "1",
      username: "test_user",
      image:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    },

    comment: [
      {
        _id: "1",
      },
    ],
    slug: "skdjdkl-dskdjs-sdsk",
  },
  {
    slug: "fake-post",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kv6zwokNHIj0oEdz1bHbsg.png",
    title: "Fake Post Title",
    category: "all",
    tags: ["music", "live"],
    content:
      "fake-post-content lorem ipsum dolor sit amet lore Lorem ipsum dolor sit amet lore lorem ipsum ",
    createdAt: "2019-12-12T19:30:00.000Z",
    updatedAt: "2019-12-12T19:30:00.000Z",
    likes: ["all", "music", "live"],
    _id: "1",
    userId: "1",
    user: {
      _id: "1",
      username: "test_user",
      image:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    },

    comment: [
      {
        _id: "1",
      },
    ],
    slug: "skdjdkl-dskdjs-sdsk",
  },
  {
    slug: "fake-post",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kv6zwokNHIj0oEdz1bHbsg.png",
    title: "Fake Post Title",
    category: "all",
    tags: ["music", "live"],
    content:
      "fake-post-content lorem ipsum dolor sit amet lore Lorem ipsum dolor sit amet lore lorem ipsum ",
    createdAt: "2019-12-12T19:30:00.000Z",
    updatedAt: "2019-12-12T19:30:00.000Z",
    likes: ["all", "music", "live"],
    _id: "1",
    userId: "1",
    user: {
      _id: "1",
      username: "test_user",
      image:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    },

    comment: [
      {
        _id: "1",
      },
    ],
    slug: "skdjdkl-dskdjs-sdsk",
  },
  {
    slug: "fake-post",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kv6zwokNHIj0oEdz1bHbsg.png",
    title: "Fake Post Title",
    category: "all",
    tags: ["music", "live"],
    content:
      "fake-post-content lorem ipsum dolor sit amet lore Lorem ipsum dolor sit amet lore lorem ipsum ",
    createdAt: "2019-12-12T19:30:00.000Z",
    updatedAt: "2019-12-12T19:30:00.000Z",
    likes: ["all", "music", "live"],
    _id: "1",
    userId: "1",
    user: {
      _id: "1",
      username: "test_user",
      image:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    },

    comment: [
      {
        _id: "1",
      },
    ],
    slug: "skdjdkl-dskdjs-sdsk",
  },
];
export default function Home() {
  const [posts, setPosts] = useState([]);
  const selectedTag = useSelector((state) => state.user.selectedTag);
  const tags = ["All", "Music", "Live"];
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("/api/post/getPosts");
  //     const data = await res.json();
  //     setPosts(data.posts);
  //   };
  //   fetchPosts();
  // }, []);
  useEffect(() => {
    // if (selectedTag && selectedTag !== "all") {
    //   const filteredPosts = fakePosts
    //     .flat()
    //     .filter((post) => post.category === selectedTag);
    //   setPosts(filteredPosts);
    // } else {
    //   setPosts(fakePosts.flat());
    // }
    setPosts(fakePosts);
  }, [selectedTag]);
  return (
    <section className="w-5/4 m-auto py-4 px-3 max-w-6xl">
      <div className="flex flex-col mx-auto">
        <h2 className=" text-2xl font-bold lg:text-2xl font-pacifico">
          Inventoy Blogs 📝
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mt-3">
          Find the latest posts on various topics ( AI , Web Development and
          many more ..)
        </p>
      </div>
      <div
        className="flex overflow-x-auto whitespace-nowrap py-1 border-[1px] border-slate-100  w-3/5 rounded-full mt-5"
        style={{ scrollbarWidth: "none" }}
      >
        <TagNav tags={tags} />
      </div>
      <div className="flex flex-row">
        <div className="max-w-6xl flex flex-col w-[70%]">
          {posts && posts.length > 0 && (
            <div className="flex flex-col gap-">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>

        <div className="flex w-[30%] mt-[-50px] ml-9">
          <div className="flex flex-row">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row">
                <h2 className="text-bold font-medium text-2xl">Book Mark</h2>
                <span className="text-gray-500 text-sm">({posts.length})</span>
              </div>
              {posts.map((post) => (
                <BookMarked key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
