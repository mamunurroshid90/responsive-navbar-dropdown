import React, { useState } from "react";
import Logo from "../../../public/navbarLogo.png";
import NavLinks from "./NavLinks";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" bg-white">
        <div className=" flex justify-around items-center font-medium">
          <div className=" z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className=" md:cursor-pointer h-9" />
            <div onClick={() => setIsOpen(!isOpen)} className=" md:hidden">
              {isOpen ? (
                <IoCloseSharp className=" text-3xl" />
              ) : (
                <GiHamburgerMenu className=" text-3xl" />
              )}
            </div>
          </div>
          <ul className=" md:flex hidden items-center uppercase gap-8">
            <li>
              <Link className=" py-7 px-3 inline-block">Home</Link>
            </li>
            <NavLinks />
          </ul>
          <div className=" md:block hidden">
            <Button />
          </div>
        </div>
        {/* Mobile navbar */}
        <ul
          className={` flex flex-col md:hidden bg-slate-200 absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            isOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link className=" py-7 px-3 inline-block">Home</Link>
          </li>
          <NavLinks />
          <div className=" md:hidden block">
            <Button />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
