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
    <div className="min-h-screen p-6 josefin-text">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Blog</h1> */}
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <div key={post.id}>
          <div href={`/blog/${encodeURIComponent(post.title)}`} >
            <div className="p-5 bg-white grid grid-cols-3 gap-0 justify-evenly cursor-pointer gap-5hover:shadow-lg transition-shadow">
            
              <div className='grid grid-cols-3 grid-rows-4 col-span-2 border'>
                <div className='border p-2'>
                  <h2>{post?.datePosted}</h2>
                </div>
                <div className='border p-2 col-span-2'>
                  <h2 className='text-xl font-bold'>{post?.title}</h2>
                </div>
              <div className="p-4 row-span-3 border col-span-3">
                {showFull == post?.id ? 
                <div>
                <p className="text-gray-600">{post?.content}</p> 
                <h2 onClick={()=>setShowFull(false)} className='text-xs relative z-30  bg-black text-center text-white p-2 w-[120px] mt-2'>show less</h2>
                </div>: 
                <div>
                <p className="text-gray-600">{getPreview(post?.content)}</p>
                <h2 onClick={()=>setShowFull(post?.id)} className='text-xs relative z-30  bg-black text-center text-white p-2 w-[120px] mt-2'>Read more</h2>
                </div>}
              </div>
              </div>
              <div className="relative w-full h-full">
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
            </div>
          </div>

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