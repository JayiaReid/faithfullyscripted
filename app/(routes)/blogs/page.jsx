"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
const page = () => {
   const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setPosts(data);
      console.log(data)
    };
    fetchPosts();
  }, []);

   const getPreview = (content) => {
    const words = content.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };
  return (
    <div className="min-h-screen p-6">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Blog</h1> */}
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <div>
          <Link href={`/blog/${encodeURIComponent(post.title)}`} key={post.id}>
            <div className="bg-white cursor-pointer flex gap-5hover:shadow-lg transition-shadow">
            
              <div className="relative w-[700px] h-[500px] object-cover">
                <Image
                  src={post?.coverImage}
                  alt={"title"}
                  fill
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="p-4">
                
                <p className="text-gray-600">{getPreview(post.content)}</p>
              </div>
            </div>
          </Link>

          <div className="my-5 w-full h-[2px] bg-black"></div>

          </div>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-center text-gray-400">No blog posts available.</p>
      )}
    </div>
  )
}

export default page