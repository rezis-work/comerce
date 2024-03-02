"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import userImage from "../assets/khazi-logo.png";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div>
      <div className=" flex items-center justify-between py-4 relative">
        <div className=" flex items-center md:space-x-10 lg:space-x-20">
          <div className=" font-semibold text-2xl">
            <a href="/">TRcomerce</a>
          </div>
          <nav className=" hidden md:block">
            <ul className=" flex items-center md:space-x-3 lg:space-x-10 opacity-70 text-[15px]">
              <li>
                <a href="/" className=" py-3 inline-block w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className=" py-3 inline-block w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className=" py-3 inline-block w-full">
                  My Products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowProfile((cur) => !cur)}
            className="relative cursor-pointer"
          >
            <Image
              src={userImage}
              alt="user"
              className="rounded-full object-cover"
              width={35}
              height={35}
            />
            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <Link href="/sign">SignIn</Link>
            </div>
          </div>
          <Link href="/">
            <div className=" p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => setShowNav((cur) => !cur)}
            className=" p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`trasition ease-in duration-150 cursor-pointer ${
                showNav ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={` md:hidden ${
          showNav ? "pb-4 px-5" : " h-0 invisible opacity-0"
        }`}
      >
        <ul className=" flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/shop" className=" py-3 inline-block w-full">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className=" py-3 inline-block w-full">
              Filters
            </a>
          </li>
          <li>
            <a href="/myproducts" className=" py-3 inline-block w-full">
              My Products
            </a>
          </li>
        </ul>
        <div className=" flex items-center justify-between bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className=" outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px] "
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className=" opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
}
