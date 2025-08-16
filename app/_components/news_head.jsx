"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const News_head = () => {
   const [hid, setHid] = useState(true);
  return (
    <div>
        <div className="w-full items-center relative z-30 bg-[#b6c1b8c7] my-0.5 h-auto p-2">
          {hid ? (
            <div
              onClick={() => setHid(false)}
              className="cursor-pointer  flex items-center justify-center"
            >
              <h2 className="text-center ">
                <span className="text-xl font-bold">→</span> MENU{" "}
                <span className="text-xl font-bold">←</span>
              </h2>
            </div>
          ) : (
            <div className="flex text-lg items-center justify-evenly">
              <h2
                className="text-xl font-bold cursor-pointer"
                onClick={() => setHid(true)}
              >
                ←
              </h2>
              <Link href={"/blogs"}>
                <h2>Blogs</h2>
              </Link>
              <Link href={"/poems"}>
                <h2>Poems</h2>
              </Link>
              <Link href={"/gallery"}>
                <h2>Gallery</h2>
              </Link>
              <Link href={"/subscribe"}>
                <h2>Subscribe</h2>
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="mx-10">
          {/* header */}
          <div className="flex justify-between items-center mt-5">
            {/* socials */}
            <div className='text-xs flex flex-col h-full gap-3'> 
              <h2>Let's connect:</h2>
              <div className='flex flex-col gap-[5px]'>
                <div className='gap-[5px] font-extralight text-xs flex'> <Image src="/logos/pinterest-logo.png" height={15} width={15} /> faithfullyscripted</div>
                
                <div className='gap-[5px] flex font-extralight text-xs'><Image src="/logos/instagram.png" height={15} width={15} /> iguessyoucouldcallthisablog</div>
                
              </div>
              </div>
            {/* title */}
            <div className="flex relative z-30 flex-col ">
              <Link href={'/'}><h2 className="cursor-pointer text-[70px] font-qwigley">FAITHFULLY SCRIPTED</h2></Link>
            </div>

            {/* ect */}
            <div>
              <h2>etc.</h2>
            </div>
          </div>
          <div className="w-full h-[2px] bg-black"></div>
          </div>
    </div>
  )
}

export default News_head