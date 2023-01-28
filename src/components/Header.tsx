import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <div
      className={`${
        header ? "bg-gray-200 shadow-lg" : "bg-transparent"
      } fixed z-50 w-full transition-all duration-400`}
    >
      <div className="container mx-auto relative">
        <div className="py-5 mx-4 md:mx-6 ">
          <div className="flex items-center justify-between py-4 lg:px-14">
            <h1 className="font-bold tracking-[3px] text-[24px]">Shop</h1>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="favorite">
                <MdOutlineFavoriteBorder className="text-2xl" />
              </Link>
              <Link to="productInCart">
                <BsCart className="text-2xl" />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(true)}
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
              >
                <RxHamburgerMenu size={30} />
              </button>
            </div>
          </div>
        </div>
        <div
          //id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          }  md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-gray-200 pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-end mx-4">
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 mt-3"
              >
                <IoIosAdd size={30} />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-300 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <Link
                  to="/favorite"
                  className="flex items-center gap-x-2 text-[22px]"
                >
                  <MdOutlineFavoriteBorder />
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/productInCart"
                  className="flex items-center gap-x-2 text-[22px]"
                >
                  <BsCart />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
