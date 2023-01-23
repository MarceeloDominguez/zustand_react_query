import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto relative">
        <div className="py-4 mx-4 md:mx-6">
          <div className="flex items-center justify-end py-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="favorite">
                <MdOutlineFavoriteBorder className="text-2xl" />
              </Link>
              <BsCart className="text-2xl" />
            </div>
            <div className="md:hidden">
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(true)}
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
              >
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-end mx-4">
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <IoIosAdd />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li className="flex items-center">
                <MdOutlineFavoriteBorder />
                Favorites
              </li>
              <li className="flex items-center">
                <BsCart />
                Cart
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
