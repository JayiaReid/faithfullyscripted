"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  const [hid, setHid] = useState(true);

  return (
    <div className="bg-white text-black">
      {/* background */}
      <div className="z-0 fixed inset-0 w-full h-full">
        {/* <Image
          src="/backgound.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>
      {/* <div className="z-20 fixed inset-0 w-full h-full opacity-20">
        <Image
          src="/bg.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
      <div className="relative josefin-text">
        
        <div className="mx-10">
          
          
          {/* hero */}
          <div className="my-5 bg-[url('/gallery/i0.png')] h-screen bg-cover bg-center bg-no-repeat w-full">
             {/* <div className="h-full w-full relative z-20 bg-[rgb(0,0,0,0.2)]"></div> */}
            {/*<Image
              src="/gallery/i0.png"
              alt="background"
              width={1000}
              height={500}
              quality={100}
              className="w-full h-1/2"
            /> */}
            <div className="flex text-4xl p-[100px] text-justify bg-[rgb(0,0,0,0.5)] flex-col text-white h-full items-center justify-center">
              <TypewriterComponent options={{
          strings: [
            'Hi there! and welcome to Faithfully Scripted — a peaceful corner of the internet where faith meets creativity. Whether you are here to read a quiet poem, read an insightful blog or browse scripture-based graphics, I pray this site reminds you that God is always near. One post, one verse, one prayer at a time – all faithfully scripted.',
          ],
          autoStart: true,
          loop: false,
          delay: 75,
          deleteSpeed: 100,
        }}/>
            </div>
           
          </div>

          <div className="w-full h-[2px] bg-black"></div>
          {/* columns */}
          <div className="flex w-full items-stretch">
            <div className="m-2 w-1/3 flex flex-col justify-between gap-3 bg-white p-4 rounded-md h-full">
              <h2 className="josefin-heading">
                1. Read Blogs from iguessyoucouldcallthisablog
              </h2>
              <p className="mb-6 text-base text-gray-700">
                iguessyoucouldcallthisablog is a Christian blogger who writes
                thought-provoking posts on worldly matters. Their work is deeply
                insightful, engaging both heart and mind with reflections rooted
                in faith and experience.
              </p>

              <form className="flex flex-col gap-4 z-30 relative max-w-md">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="p-3 border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-sm placeholder:text-black border-2"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="p-3 border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-sm placeholder:text-black border-2"
                />
                <div className="flex gap-5 flex-col mt-5">
                  <button
                  type="submit"
                  className="text-xs  bg-black text-center text-white p-2 w-[120px]"
                >
                  <h2 className="z-30 relative">SUBSCRIBE</h2>
                </button>
                <Link
                href={"/blogs"}
                className="text-xs  bg-black text-center text-white p-2 w-[120px]"
              >
                <h2 className="z-30 relative">READ THE BLOG</h2>
              </Link>
                </div>
              </form>
              
            </div>
            <div className="w-[2px] bg-black h-auto"></div>
            <div className="m-2 w-1/3 flex flex-col justify-between gap-3 bg-white p-4 rounded-md h-full">
              <Image
                src="/poetry.png"
                alt="background"
                width={900}
                height={500}
                quality={100}
                className="w-full h-auto"
              />
              <h2 className="josefin-heading">2. Read Christian Poetry</h2>
              <h2>
                iguessyoucouldcallthisablog is a christian blogger who writes
                thought provoking posts on worldly matters. I would say they are
                very insighful{" "}
              </h2>
              <Link
                href={"/poems"}
                className="text-xs  bg-black text-center text-white p-2 w-[120px]"
              >
                <h2 className="z-30 relative">READ POETRY</h2>
              </Link>
            </div>
            <div className="w-[2px] bg-black h-auto"></div>
            <div className="m-2 w-1/3 flex flex-col justify-between gap-3 bg-white p-4 rounded-md h-full">
              <h2 className="josefin-heading">3. View the Gallery</h2>
              <h2>
                iguessyoucouldcallthisablog is a christian blogger who writes
                thought provoking posts on worldly matters. I would say they are
                very insighful{" "}
              </h2>
              <Image
                src="/gallery/i6.png"
                alt="background"
                width={900}
                height={500}
                quality={100}
                className="w-full h-auto"
              />
              <Link
                href={"/gallery"}
                className="text-xs  bg-black text-center text-white p-2 w-[120px]"
              >
                <h2 className="z-30 relative">SEE GALLERY</h2>
              </Link>
            </div>
          </div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="my-5">
            {/* <Image
              src="/hero.png"
              alt="background"
              width={1000}
              height={500}
              quality={100}
              className="w-full h-1/2"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
