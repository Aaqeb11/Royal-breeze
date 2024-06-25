"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
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
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (size?.width ?? 0 >= 768) {
      setIsMenuOpen(false);
    }
  }, [size.width]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="hidden lg:block border-gray-200 bg-white fixed border-b-[1px] border-blue-950 w-full max-h-[80px] md:max-h-[95px]  z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:pb-8 ">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse "
        >
          <Image
            src={logo}
            height={500}
            quality={100}
            width={500}
            className="w-[150px]  md:w-[145px] md:h-[111px]"
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
            <RxCross1 className="w-10 h-8 text-blue-950" />
          ) : (
            <RxHamburgerMenu className="w-10 h-8 text-blue-950" />
          )}
        </button>
        <div
          className={`${
            isMenuOpen
              ? "block fixed top-[75px] left-0 right-0 h-screen"
              : "hidden"
          } w-full md:block md:w-auto z-50 bg-white transition ease-in-out delay-150 px-2`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white overflow-y-auto h-full ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0  md:text-black hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent text-lg"
                aria-current="page"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#photos"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0  md:text-black hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="#payment"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 text-black hover:bg-gray-700 hover:text-white md:hover:bg-transparent text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Payment
              </a>
            </li>
            <li>
              <a
                href="#form"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 text-black hover:bg-gray-700 hover:text-white md:hover:bg-transparent text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
