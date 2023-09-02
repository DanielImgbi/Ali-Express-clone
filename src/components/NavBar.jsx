import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className="w-full top-0 left-0 p-3 flex flex-col space-y-3 bg-red-400 fixed">
      <section className="flex items-center justify-between">
        <header className="flex items-center space-x-4">
          <LiaBarsSolid className="font-extralight text-3xl cursor-pointer hover:text-orange-400" />
          <div className="w-28">
            <img
              src="/logo.png"
              alt="AliExpress logo"
              className="object-contain"
            />
          </div>
        </header>
        <div className="flex items-center space-x-4">
          <CiUser className="font-extralight text-3xl cursor-pointer hover:text-orange-400" />
          <PiShoppingCartLight className="font-extralight text-3xl cursor-pointer hover:text-orange-400" />
        </div>
      </section>
      <section className="p5">
        <input
          type="text"
          placeholder="find product..."
          className="w-full p-2 rounded-full font-montserrat font-normal"
        />
      </section>
    </nav>
  );
};

export default NavBar;
