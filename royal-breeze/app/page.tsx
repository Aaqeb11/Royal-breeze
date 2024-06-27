"use client";
import React from "react";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DP from "../assets/DP.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import floorPlan1 from "../assets/floorPlan1.jpeg";
import floorPlan2 from "../assets/floorPlan2.jpeg";
import FamiliaCosta from "../assets/FamiliaCosta.jpeg";
import { Data } from "@/public/Data";
import Image from "next/image";
import InformationCard from "@/components/InformationCard";
import { FaBuilding } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { auto } from "@popperjs/core";
import AppointmentForm from "@/components/AppointmentForm";
import { useRouter } from "next/navigation";
import PaymentMethod from "@/components/PaymentMethod";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const imageSlideShow1 = [img1, img2, img3, img4, floorPlan2, floorPlan1];
  const imageSlideShow2 = [image6, image7, image8];
  const imageSlideShow3 = [image9, image10, image11];
  const [readMore, setReadMore] = useState(false);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex1(
          (prevIndex) => (prevIndex + 1) % imageSlideShow1.length
        );
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex2(
          (prevIndex) => (prevIndex + 1) % imageSlideShow2.length
        );
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex3(
          (prevIndex) => (prevIndex + 1) % imageSlideShow3.length
        );
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col ">
      <div
        style={{
          background:
            "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%)",
        }}
        className="flex lg:items-center items-start justify-start lg:mt-[90px] h-screen  flex-col  gap-2 p-2"
      >
        <p className="lg:text-4xl md:text-5xl text-5xl leading-snug text-white font-serif md:p-10 p-4 lg:text-center">
          Discover Royal Breeze Caribbean Villas
        </p>
        <div className="flex mt-8 lg:mt-2 lg:block border-b-2 border-white w-[90%] mx-auto lg:w-[90%]  h-1 "></div>
        <div className="flex items-start ">
          <p className="text-white text-lg p-4">
            Invest in luxury from the ground up with our collection of 3
            exclusive villas in
            <span className="italic font-semibold"> Punta Cana.</span>
          </p>
        </div>

        <div className="flex justify-center items-center mx-auto lg:w-[56vw] w-[90vw] md:w-[80]  h-[35vh] md:h-[55vh] lg:h-[90vh] overflow-hidden rounded-xl">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            className="object-cover  h-full w-full   py-4 rounded-xl "
          >
            <source src="/VIDEO_15.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <section className="">
        <section className="flex flex-col lg:flex-row-reverse p-4 gap-[5vh] lg:gap-[10vw] lg:min-h-[100vh] bg-white">
          <div className="flex flex-col lg:w-1/2 justify-center">
            <p className="text-blue-950 md:text-2xl p-4 leading-loose font-serif text-lg">
              Discover the allure of Punta Cana! Stunning beaches, vibrant
              nightlife, and endless outdoor adventures await. Experience
              paradise with tax incentives and world-class amenities. Your dream
              Caribbean escape starts here!
            </p>
            <p className="text-blue-950 md:text-2xl p-4 leading-loose font-serif text-lg">
              Embrace the magic of Punta Cana! Dive into turquoise waters,
              unwind on pristine beaches, and explore lush tropical landscapes.
              With luxurious amenities and exciting cultural experiences, your
              perfect Caribbean getaway is within reach
            </p>
          </div>
          <div className="relative lg:w-1/2 h-[60vw] md:h-[400px] lg:w-[50vw] overflow-hidden flex items-center justify-center my-auto">
            {imageSlideShow3.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-1000 flex justify-center items-center overflow-hidden${
                  index === currentImageIndex3
                    ? "transform translate-x-0 opacity-100"
                    : index ===
                      (currentImageIndex3 + 1) % imageSlideShow3.length
                    ? "transform translate-x-full opacity-0"
                    : index ===
                      (currentImageIndex3 - 1 + imageSlideShow3.length) %
                        imageSlideShow3.length
                    ? "transform -translate-x-full opacity-0"
                    : "opacity-0"
                }`}
                style={{
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out",
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </section>
        <section
          className="flex flex-col lg:flex-row p-4 gap-[7vh] lg:gap-[13vw] lg:min-h-[100vh] "
          style={{
            background:
              "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%)",
          }}
        >
          <div className="flex flex-col lg:w-1/2 justify-center">
            <p className="text-white md:text-2xl p-4 leading-loose font-serif text-lg hidden md:block">
              An exclusive investment opportunity invest in luxury with our
              limited collection of 3 high-end villas in
              <span className="italic font-semibold"> Punta Cana.</span>
            </p>
            <p className="text-white md:text-2xl p-4 leading-loose font-serif text-lg">
              Prime location, strong rental potential and scarcity value make
              Royal Breeze the ideal choice for discerning investors seeking
              premium returns in a world-class Caribbean destination. Secure
              your stake in paradise today.
            </p>
            <div className="flex justify-start p-4">
              <button
                className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-4 py-2 text-xl border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd] animate-pulse"
                onClick={() => {
                  router.push("#form");
                }}
              >
                Register Now
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center  w-[80vw] lg:w-[50vw]  mx-auto ">
            <Image
              src={DP}
              alt="DP"
              quality={100}
              width={500}
              height={500}
              className=""
            />
          </div>
        </section>
        <section className="flex flex-col">
          <div className="border-b-[1px] border-yellow-800 mx-10 mt-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white mt-4">
            <InformationCard
              title="Privileged location"
              description="Enjoy
                        the enviable location of our
                        villas, just a few minutes from
                        the crystal-clear waters and
                        white sands of the beaches
                        and entertainment centers of
                        Punta Cana."
              icon={<FaMapMarkerAlt />}
            />

            <InformationCard
              title="Privacy and security"
              description="Royal Breeze
                        is located in a private
                        residential area with 24-hour
                        controlled access, which
                        guarantees maximum security
                        and peace of mind for you
                        and your family"
              icon={<FaShieldAlt />}
            />

            <InformationCard
              title="Design and architecture"
              description="It has been carefully
                      designed to reflect
                      contemporary Caribbean
                      style, with details and finishes
                      that create a sophisticated
                      and relaxing environment.
                      "
              icon={<FaBuilding />}
            />
          </div>
          <div className="border-b-[1px] border-yellow-800 mx-10 mt-10"></div>
          <div className="flex flex-col p-4 ">
            <p className="md:text-2xl text-lg leading-loose text-blue-950 text-2xl text-center font-serif">
              Our homes have large interior areas that maximize the entry of
              natural light and offer a continuous flow between spaces, giving
              you a feeling of spaciousness and comfort.
            </p>
          </div>
        </section>
        <section
          className="flex flex-col-reverse lg:flex-row-reverse p-4 gap-[5vh] lg:gap-[10vw] lg:min-h-[100vh] mt-10"
          style={{
            background:
              "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%)",
          }}
        >
          <div className="flex flex-col lg:w-1/2 justify-center">
            <p className="text-white md:text-2xl p-4 leading-loose font-serif text-lg">
              Luxurious Villa near the heart of the city. Enjoy a unique
              experience 5 minutes from Downtown and 15 minutes from the
              airport. Great for groups and families looking for comfort and
              elegance.
            </p>
            <div className="flex justify-center p-6">
              <Link
                href="https://www.airbnb.com/slink/otsC9SPd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-14 py-2 text-xl border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd] animate-pulse"
              >
                View More
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/2 h-[60vw] md:h-[400px] lg:w-[50vw] overflow-hidden flex items-center justify-center my-auto">
            {imageSlideShow2.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-1000 flex justify-center items-center overflow-hidden${
                  index === currentImageIndex2
                    ? "transform translate-x-0 opacity-100"
                    : index ===
                      (currentImageIndex2 + 1) % imageSlideShow2.length
                    ? "transform translate-x-full opacity-0"
                    : index ===
                      (currentImageIndex2 - 1 + imageSlideShow2.length) %
                        imageSlideShow1.length
                    ? "transform -translate-x-full opacity-0"
                    : "opacity-0"
                }`}
                style={{
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out",
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </section>
        <section
          className=" slide-container "
          style={{
            background:
              "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%)",
          }}
        >
          <div className="lg:w-1/2 w-3/4  mx-auto">
            <Slider {...settings}>
              {Data.map((data, index) => (
                <div key={index} className=" p-6 gap-10 mt-10">
                  <div className="flex items-center justify-center ">
                    <Image
                      src={data.img}
                      width={500}
                      height={500}
                      alt={"acitivity1"}
                      className="w-full rounded-lg"
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-10">
                    <p className="lg:text-3xl sm:text-sm  mt-6 text-white">
                      {data.title}
                    </p>
                    <p className="text-xl text-center text-white">
                      {data.info}
                    </p>
                    <p className="text-xl text-center text-white">
                      {readMore ? data.readmore : ""}
                    </p>
                    <button
                      className="bg-white text-black"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      read more
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 lg:gap-10 p-4  mt-6">
          <PaymentMethod />
          <div
            className="w-full relative h-[50vh] md:h-[58vh] lg:h-[95vh] lg:w-[70vw] overflow-hidden"
            id="photos"
          >
            {imageSlideShow1.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-1000 flex justify-center items-center overflow-hidden ${
                  index === currentImageIndex1
                    ? "transform translate-x-0 opacity-100"
                    : index ===
                      (currentImageIndex1 + 1) % imageSlideShow1.length
                    ? "transform translate-x-full opacity-0"
                    : index ===
                      (currentImageIndex1 - 1 + imageSlideShow1.length) %
                        imageSlideShow1.length
                    ? "transform -translate-x-full opacity-0"
                    : "opacity-0"
                }`}
                style={{
                  transition:
                    "transform 1s ease-in-out, opacity 1s ease-in-out",
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  quality={100}
                  className="object-contain md:object-cover w-full h-full"
                  priority={index === currentImageIndex1}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src={FamiliaCosta}
              alt={"famil"}
              quality={100}
              className="lg:w-[70vw] w-[100vw] "
            />
          </div>
          <div className="w-full pt-5" id="form">
            <AppointmentForm />
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;
