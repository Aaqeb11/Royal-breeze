"use client";
import React from "react";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect } from "react";
import DP from "../assets/DP.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import Image from "next/image";
import InformationCard from "@/components/InformationCard";
import { FaBuilding } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { auto } from "@popperjs/core";
import AppointmentForm from "@/components/AppointmentForm";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);
  return (
    <div className="flex flex-col ">
      <div
        style={{
          background:
            "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%);",
        }}
        className="flex mt-[15vh]"
      >
        <p className="text-3xl text-white font-serif md:p-10 p-6 ">
          Discover Royal Breeze Caribbean Villas
        </p>
      </div>
      <section className="h-screen">
        <div className="w-full relative h-[50vh] md:h-[70vh] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${
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
                transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
              }}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                quality={100}
                objectFit="cover"
                className=""
                priority={index === currentImageIndex}
              />
            </div>
          ))}
        </div>
        <section
          className="flex flex-col lg:flex-row p-4 gap-[5vh] lg:gap-[13vw] lg:min-h-[100vh]"
          style={{
            background:
              "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%);",
          }}
        >
          <div className="flex flex-col lg:w-1/2 justify-center">
            <p className="text-white text-2xl p-6 leading-10">
              We present you Royal Breeze Caribbean Villas, an exclusive project
              that combines the charm of the Caribbean with the luxury and
              comfort that you have always dreamed of.
            </p>
            <p className="text-[#625c5c] text-2xl p-6 pt-8 leading-10">
              This residential development of 3 homes offers you an unparalleled
              living experience in one of the most dazzling destinations in the
              world: PUNTA CANA
            </p>
            <div className="flex justify-start p-6">
              <button
                className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-4 py-2 text-xl border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd]"
                onClick={() => {
                  router.push("#form");
                }}
              >
                Fill Form
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center w-1/2 w-[75vw] lg:w-1/2   lg:w-[50vw] md:min-w-[30vw] mx-auto ">
            <Image
              src={DP}
              alt="DP"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col">
          <div className="border-b-[1px] border-yellow-800 mx-10 mt-10"></div>
          <div className="flex flex-col p-6">
            <p className="text-2xl leading-10 text-blue-950 text-2xl">
              Enjoy a unique experience 5 minutes from Downtown and 15 minutes
              from the airport. Great for groups and families looking for
              comfort and elegance. Prime location Private Pool BBQ Area Mini
              Golf Course
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white mt-4">
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
              description="Breeze
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
              description="Amani has been carefully
designed to reflect
contemporary Caribbean
style, with details and finishes
that create a sophisticated
and relaxing environment.
"
              icon={<FaBuilding />}
            />
          </div>
        </section>
        <section
          className="flex flex-col lg:flex-row-reverse p-4 gap-[5vh] lg:gap-[13vw] lg:min-h-[100vh] mt-10"
          style={{
            background:
              "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%);",
          }}
        >
          <div className="flex flex-col lg:w-1/2 justify-center">
            <p className="text-white text-2xl p-6 leading-10">
              Luxurious Villa near the Heart of the City* Enjoy a unique
              experience 5 minutes from Downtown and 15 minutes from the
              airport. Great for groups and families looking for comfort and
              elegance.
            </p>
            {/* <p className="text-[#625c5c] text-2xl p-6 pt-8 leading-10"> */}
            <ul className="list-disc p-4">
              <li className="text-[#625c5c] text-2xl p-2 leading-7 ">
                Prime location: Close to attractions and the airport.
              </li>
              <li className="text-[#625c5c] text-2xl p-2 leading-7">
                Private Pool: Relax and soak up the sun.
              </li>
              <li className="text-[#625c5c] text-2xl p-2 leading-7">
                BBQ Area: Perfect for outdoor gatherings.
              </li>
              <li className="text-[#625c5c] text-2xl p-2 leading-7">
                Mini Golf Course: Have fun playing.
              </li>
              <li className="text-[#625c5c] text-2xl p-2 leading-7">
                Spacious Rooms: Each with a private bathroom
              </li>
            </ul>
            <div className="flex justify-end p-6">
              <button
                className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-4 py-2 text-xl border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd] "
                onClick={() => {
                  router.push("https://www.airbnb.com/slink/otsC9SPd");
                }}
              >
                Book AirBnb
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center w-1/2 w-[75vw] lg:w-1/2   lg:w-[50vw] md:min-w-[30vw] mx-auto ">
            <Image
              src={img5}
              alt="DP"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-10 p-4 mt-10">
          <div className="flex justify-center items-center w-full">
            <p className="text-4xl text-blue-950 ">Familia Acosta</p>
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="text-lg text-blue-950 ">
              From the iconic Chicago skyline to the beautiful beaches of Punta
              Cana. Live the experience of investing whith Royal Breeze
            </p>
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
