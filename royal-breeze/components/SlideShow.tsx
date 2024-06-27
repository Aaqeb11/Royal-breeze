import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideShowProps {
  images: any[];
  interval?: number;
  transitionDuration?: number;
}

const SlideShow: React.FC<SlideShowProps> = ({
  images,
  interval = 4000,
  transitionDuration = 1000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval, transitionDuration]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 flex justify-center items-center overflow-hidden ${
            index === currentImageIndex
              ? "transform translate-x-0 opacity-100"
              : index === (currentImageIndex + 1) % images.length
              ? "transform translate-x-full opacity-0"
              : index ===
                (currentImageIndex - 1 + images.length) % images.length
              ? "transform -translate-x-full opacity-0"
              : "opacity-0"
          }`}
          style={{
            transition: `transform ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`,
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className=""
            quality={100}
          />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
