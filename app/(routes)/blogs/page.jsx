"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
const page = () => {
   const [posts, setPosts] = useState([]);
   const [showFull, setShowFull] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      const sorted = data.sort((a, b) => b.id - a.id);
      setPosts(sorted);
      console.log(data)
    };
    fetchPosts();
  }, []);

   const getPreview = (content) => {
    const words = content.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  return (
    <div className="min-h-screen mx-10 josefin-text">
      <h1 className="text-4xl font-bold my-10">I GUESS YOU COULD CALL THIS A BLOG</h1>

      {posts.length > 0 && (
        <>
          {/* Featured Post (first one) */}
          <div className="mb-10">
            <div className="bg-[#C5CDC6]  p-6 text-black shadow-lg">
              <div className="relative w-full h-64 mb-6 overflow-hidden">
                <Image
                  src={posts[0]?.coverImage}
                  alt={posts[0]?.title || "cover"}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-sm opacity-90">{posts[0]?.datePosted}</h2>
              <h2 className="text-2xl font-bold mb-3">{posts[0]?.title}</h2>
              <p className="text-sm leading-relaxed">
                {showFull === posts[0]?.id
                  ? posts[0]?.content
                  : getPreview(posts[0]?.content)}
              </p>
              <h2
                onClick={() =>
                  setShowFull(showFull === posts[0]?.id ? false : posts[0]?.id)
                }
                className="text-xs relative z-30 my-4 p-2 w-[120px] text-center bg-black text-white"
              >
                {showFull === posts[0]?.id ? "SHOW LESS" : "READ MORE"}
              </h2>
            </div>
          </div>

          <div className="w-full h-[2px] bg-black"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden">
                  <Image
                    src={post?.coverImage}
                    alt={post?.title || "cover"}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xs text-gray-400 mb-2">
                  {post?.datePosted}
                </h2>
                <h2 className="text-lg font-bold mb-2">{post?.title}</h2>
                <p className="text-gray-600 text-sm">
                  {showFull === post?.id
                    ? post?.content
                    : getPreview(post?.content)}
                </p>
                <h2
                  onClick={() =>
                    setShowFull(showFull === post?.id ? false : post?.id)
                  }
                  className="text-xs text-center relative w-[120px] z-40 my-4 p-2 bg-black text-white"
                >
                  {showFull === post?.id ? "SHOW LESS" : "READ MORE"}
                </h2>
              </div>
            ))}
          </div>
        </>
      )}

      {posts.length === 0 && (
        <p className="text-center text-gray-400">
          No blog posts available.
        </p>
      )}

      <div className="w-full h-[2px] bg-black"></div>
    </div>
  )
}

export default page