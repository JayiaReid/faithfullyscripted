"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";

const categories = {
  aesthetic: "i",
  "vision board": "v",
  "christian core": "c",
  other: "a",
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const allImages = [
      // Aesthetic (i0-i6)
      "/gallery/i0.png", "/gallery/i1.png", "/gallery/i2.png",
      "/gallery/i3.png", "/gallery/i4.png", "/gallery/i5.png",
      "/gallery/i6.png",
      // Vision Board (v1-v2)
      "/gallery/v1.png", "/gallery/v2.png",
    ];
    setImages(allImages);
  }, []);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };


  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) =>
          img.includes(`/gallery/${categories[selectedCategory]}`)
        );

  return (
    <div className="min-h-screen text-black">
      <div className="z-30 mt-5 flex justify-center gap-6 mb-8">
        <h2
          onClick={() => setSelectedCategory("all")}
          className={`z-30 relative cursor-pointer uppercase ${
            selectedCategory === "all" ? "underline" : ""
          }`}
        >
          All
        </h2>
        {Object.keys(categories).map((cat) => (
          <h2
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`z-30 relative cursor-pointer uppercase ${
              selectedCategory === cat ? "underline" : ""
            }`}
          >
            {cat}
          </h2>
        ))}
      </div>
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-5 gap-2 p-6">
          {filteredImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded overflow-hidden"
              onClick={() => openModal(src)}
            >
              <Image className="z-30 cursor-pointer"
                src={src}
                alt={`gallery-img-${idx}`}
                fill
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">
          No images found for this category.
        </p>
      )}

      {isModalOpen && (
        <div className=" fixed inset-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-transparent p-6 rounded-lg relative max-w-4xl max-h-[90vh] scroll-hide overflow-auto">
            <button
              className="absolute top-[-2px] cursor-pointer right-[-2px] text-black text-4xl"
              onClick={closeModal}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Selected image"
              width={800}
              height={600}
              style={{ objectFit: "contain" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;