"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
interface NavBarProps {
  // Define your props here, for example:
  route?: string;
}
export const NavBar:React.FC<NavBarProps> = ({route}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-white fixed border-b-[1px] border-blue-950 w-full max-h-[1200px] md:max-h-[95px] overflow-y-auto z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:pb-8 ">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse "
        >
          <Image
            src={logo}
            height={120}
            width={120}
            className="w-[22vw]  md:w-[145px] md:h-[111px]"
            alt="Royal Breeze Logo"
          />
          <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Royal Breeze
          </span>
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
            isMenuOpen ? "block fixed top-[95px] left-0 right-0" : "hidden"
          } w-full md:block md:w-auto z-50 bg-white`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white overflow-y-auto h-full ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0  md:text-black hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#photos"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0  md:text-black hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="#payment"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 text-black hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Payment
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 text-black  hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Pricing
              </a>
            </li> */}
            <li>
              <a
                href="#form"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 text-black hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
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
