import React, { useState } from "react";
import { Link } from "react-router";
import { links } from "./MyLinks";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      <div className=" md:flex md:items-center gap-3">
        {links.map((link, i) => (
          <div>
            <div key={i} className=" px-3 text-left md:cursor-pointer group">
              <h2
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
                className=" py-7 flex justify-between items-center md:pr-0 pr-5 group"
              >
                {link.name}
                <span className=" text-4xl md:hidden inline">
                  {heading === link.name ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </span>
                <span className=" text-4xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 ">
                  <RiArrowDropDownLine />
                </span>
              </h2>
              {link.submenu && (
                <div>
                  <div className=" absolute top-20 hidden group-hover:md:block hover:md:block">
                    <div className=" py-3">
                      <div className=" w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                    </div>
                    <div className=" bg-white p-5 grid grid-cols-3 gap-10">
                      {link.subLinks.map((mysublinks) => (
                        <div className="">
                          <h1 className=" text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.subLink.map((sLink) => (
                            <li className=" text-sm text-gray-600 my-2.5">
                              <Link
                                to={sLink.link}
                                className=" hover:text-blue-500"
                              >
                                {sLink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* mobile menu */}
            <div
              className={` ${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              {/* subLinks */}
              {link.subLinks.map((sLinks) => (
                <div>
                  <div>
                    <h2
                      onClick={() =>
                        subHeading !== sLinks.Head
                          ? setSubHeading(sLinks.Head)
                          : setSubHeading("")
                      }
                      className=" py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      {sLinks.Head}
                      <span className=" text-4xl md:mt-1 md:ml-2 inline">
                        {subHeading === sLinks.Head ? (
                          <RiArrowDropUpLine />
                        ) : (
                          <RiArrowDropDownLine />
                        )}
                      </span>
                    </h2>
                    <div
                      className={` ${
                        subHeading === sLinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {sLinks.subLink.map((sLink) => (
                        <li className=" py-3 pl-14">
                          <Link
                            to={sLink.link}
                            className=" hover:text-blue-500"
                          >
                            {sLink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
