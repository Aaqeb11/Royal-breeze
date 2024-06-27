import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Data } from "@/public/Data";
import img1 from "../assets/img1.jpeg";

export const SliderS = () => {
  const [readMoreArray, setReadMoreArray] = useState(
    new Array(Data.length).fill(false)
  );
  const [selectedImage, setSelectedImage] = useState<typeof img1 | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const handleReadMore = (index: number) => {
    const newReadMoreArray = [...readMoreArray];
    newReadMoreArray[index] = !newReadMoreArray[index];
    setReadMoreArray(newReadMoreArray);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {Data.map((data, index) => (
        <div key={index} className=" p-3 gap-10 mt-4">
          <div className="flex items-center justify-center ">
            <Image
              src={data.img}
              width={500}
              height={500}
              alt={"acitivity1"}
              className="lg:w-[53%]  rounded-lg"
              quality={100}
              onClick={() => setSelectedImage(data.img)}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="lg:text-3xl text-xl  mt-6 text-white">{data.title}</p>
            <p className="lg:text-xl text-lg  text-center text-white">
              {readMoreArray[index] ? data.info : ""}
            </p>
            <p className="lg:text-xl text-lg text-center text-white">
              {readMoreArray[index] ? data.readmore : ""}
            </p>
            <button
              className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-2 py-2 text-sm border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd] animate-pulse"
              onClick={() => handleReadMore(index)}
            >
              {readMoreArray[index] ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};
