"use client";
import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import localfont from "next/font/local";
import { IoMdClose } from "react-icons/io";

const druk = localfont({
  src: [
    {
      path: "../../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const Drawer = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="block lg:hidden">
        {showMenu ? (
          <IoMdClose
            className="cursor-pointer text-slate-700 size-6"
            onClick={handleMenu}
          />
        ) : (
          <RiMenu2Line
            className="cursor-pointer text-slate-700 size-6"
            onClick={handleMenu}
          />
        )}
      </div>
      <div
        className={`fixed inset-0 top-[6%] w-full h-screen bg-slate-900/75 transform transition-transform duration-100 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`absolute h-screen w-[70%] bg-white transform transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="w-full mb-3">
            <li>
              <Link
                href="/"
                className="text-black block w-full font-bold uppercase border-b-[1px] border-orange-100 py-5 px-4 transition-all duration-300 hover:text-orange-500"
              >
                Tyre Pressure
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black block w-full font-bold uppercase border-b-[1px] border-orange-100 py-5 px-4 transition-all duration-300 hover:text-orange-500"
              >
                Tyre Sizes
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black block w-full font-bold uppercase border-b-[1px] border-orange-100 py-5 px-4 transition-all duration-300 hover:text-orange-500"
              >
                Bike Tyres
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black block w-full font-bold uppercase border-b-[1px] border-orange-100 py-5 px-4 transition-all duration-300 hover:text-orange-500"
              >
                Contact Us
              </Link>
            </li>
            <h4
              className={`${druk.className} text-xl text-black mb-2 px-4 mt-5`}
            >
              Sign up for daily updates on tyres, tips, and expert advice!
            </h4>
            <form action="" className="px-4 mt-4">
              <input
                type="text"
                className="outline-none bg-white border-[1px] border-slate-200 font-semibold text-sm w-full py-2.5 px-4"
                placeholder="Enter Your Email"
              />
              <button
                className="bg-orange-500 text-white font-semibold rounded w-full py-2 mt-2"
                type="button"
              >Get Updates!</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
