"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

export default function ImagesPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${clientId}&count=2`
    );
    const imagesResponse = await response.json();
    setImages(imagesResponse);
  }

  return (
    <div>
      <h2>Will this post an image?</h2>
      {images.map((image) => (
        <div key={image.id}>
          <Image
            src={image.urls.raw}
            alt={image.description}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
