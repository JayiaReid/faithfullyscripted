"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/poems");
      const data = await res.json();

      const sorted = data.sort((a, b) => b.id - a.id);
      setPosts(sorted);
      console.log(data);
      setLoading(false)
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="flex items-center justify-center w-full h-screen"><div className="loader"></div></div>

  return (
    <div className="min-h-screen mx-10 josefin-text">
      <div className="flex flex-col gap-0 items-center">
        <h1 className="text-4xl font-bold mt-10">POETRY</h1>
        <h2 className="font-bold italic">"Gracious words are a honeycomb, sweet to the soul and healing to the bones" - Proverbs 16:24</h2>
        <div className="w-full h-[200px] mt-5 relative">
          <Image
            src="/gallery/ai3.png"
            alt={"cover"}
            fill
            className="object-cover"
          />
        </div>
      </div>
      {posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 my-5">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 sm:border-b-[2px] sm:border-r-0 md:border-b-0 md:border-r-[2px]"
              >
                <h2 className="text-xs text-gray-400 mb-2">
                  {post?.datePosted}
                </h2>
                <h2 className="text-lg font-bold mb-2">{post?.title}</h2>
                <p className="text-gray-600 text-sm">
                  {post?.content}
                </p>
                {/* <h2
                  onClick={() =>
                    setShowFull(showFull === post?.id ? false : post?.id)
                  }
                  className="text-xs text-center relative w-[120px] z-40 my-4 p-2 bg-black text-white"
                >
                  {showFull === post?.id ? "SHOW LESS" : "READ MORE"}
                </h2> */}

                
              </div>
            ))}
          </div>
        </>
      )}

      {posts.length === 0 && (
        <p className="text-center text-gray-400">No poems</p>
      )}

      <div className="w-full h-[2px] bg-black"></div>
    </div>
  );
};

export default page;
