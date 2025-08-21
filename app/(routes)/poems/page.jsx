"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/poems");
      const data = await res.json();

      const sorted = data.sort((a, b) => b.id - a.id);
      setPosts(sorted);
      console.log(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen mx-10 josefin-text">
      <div className="flex flex-col gap-0 items-center">
        <h1 className="text-4xl font-bold my-10">POETRY</h1>
        {/* small quote*/}
        <div className="w-full h-[200px] relative">
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
                className="bg-white p-6 border-r-[2px]"
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
