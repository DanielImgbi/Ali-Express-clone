import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="w-full top-0 left-0 p-3 flex flex-col space-y-3 fixed">
      <section className="flex items-center justify-between">
        <header className="flex items-center space-x-4">
          <LiaBarsSolid className="font-extralight text-xl cursor-pointer hover:text-orange-400" />
          <div className="w-20">
            <img
              src="/logo.png"
              alt="AliExpress logo"
              className="object-contain"
            />
          </div>
        </header>
        <div className="flex items-center space-x-4">
          <CiUser className="font-extralight text-xl cursor-pointer hover:text-orange-400" />
          <PiShoppingCartLight className="font-extralight text-xl cursor-pointer hover:text-orange-400" />
        </div>
      </section>
      <section className="p5 relative">
        <input
          type="text"
          placeholder="find product..."
          className="w-full py-2 px-5 bg-gray-100 text-gray-600 rounded-full font-montserrat text-sm font-normal"
        />
        <BsSearch className="absolute top-3 text-gray-500 right-5" />
      </section>
    </nav>
  );
};

export default NavBar;
