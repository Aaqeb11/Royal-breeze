"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logoWhite.png";
import RBlogo from "../assets/RBlogo.jpeg";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { useWindowSize } from "@uidotdev/usehooks";

interface NavBarProps {
  // Define your props here, for example:
  route?: string;
}
export const NavBar: React.FC<NavBarProps> = ({ route }) => {
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (size?.width ?? 0 >= 768) {
      setIsMenuOpen(false);
    }
  }, [size.width]);
  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBodyLocked(!isBodyLocked);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:pb-8 w-full max-h-[80px] ">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
        <Image
          src={logoWhite}
          height={500}
          quality={100}
          width={500}
          className="w-20 bg-transparent md:h-20  md:w-30 "
          alt="Royal Breeze Logo"
        />
      </a>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 "
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <RxCross1 className="w-10 h-8 text-white" />
        ) : (
          <RxHamburgerMenu className="w-10 h-8 text-white" />
        )}
      </button>
      <div
        className={`${
          isMenuOpen
            ? "block fixed top-[70px] left-screen right-0 bottom-0 pr-2"
            : "hidden"
        } w-3/4 lg:h-auto h-1/2 md:block md:w-auto z-50  transition ease-in-out delay-150 `}
        id="navbar-default"
      >
        <ul
          className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 overflow-y-auto h-full ${
            isMenuOpen ? "" : "lg:bg-transparent"
          }`}
          style={
            isMenuOpen
              ? {
                  background:
                    "linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(3,20,62,1) 0%, rgba(5,68,80,1) 100%)",
                }
              : {}
          }
        >
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 roundedhover:text-[#1a8efd] hover:bg-blue-950 hover:border-[1px] hover:border-[#1a8efd]md:hover:bg-transparent md:border-0 md:hover:border-0 md:hover:text-blue-800 md:p-0 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent rounded-lg md:hover:rounded-0 text-lg"
              aria-current="page"
              onClick={() => {
                setIsMenuOpen(false);
                setIsBodyLocked(false);
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#payment"
              className="block py-2 px-3 text-gray-900 roundedhover:text-[#1a8efd] hover:bg-blue-950 hover:border-[1px] hover:border-[#1a8efd]md:hover:bg-transparent md:border-0 md:hover:border-0 md:hover:text-blue-800 md:p-0 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent rounded-lg md:hover:rounded-0 text-lg"
              onClick={() => {
                setIsMenuOpen(false);
                setIsBodyLocked(false);
              }}
            >
              Payment
            </a>
          </li>
          <li>
            <a
              href="#form"
              className="block py-2 px-3 text-gray-900 roundedhover:text-[#1a8efd] hover:bg-blue-950 hover:border-[1px] hover:border-[#1a8efd]md:hover:bg-transparent md:border-0 md:hover:border-0 md:hover:text-blue-800 md:p-0 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent rounded-lg md:hover:rounded-0 text-lg "
              onClick={() => {
                setIsMenuOpen(false);
                setIsBodyLocked(false);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block flex lg:mt-2 lg:block border-b-[0.2px] border-yellow-700 w-[90%] mx-auto lg:w-[100%]  h-1 "></div>
    </div>
  );
};
