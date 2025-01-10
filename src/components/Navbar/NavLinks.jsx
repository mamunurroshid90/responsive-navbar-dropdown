import React from "react";
import { Link } from "react-router";

const NavLinks = () => {
  const links = [
    {
      name: "man",
      submenu: true,
      subLinks: [
        {
          Head: "TopWear",
          subLink: [
            {
              name: "T-Shirt",
              link: "/",
            },
            {
              name: "formal-Shirt",
              link: "/",
            },
            {
              name: "casual-Shirt",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      name: "woman",
    },
    {
      name: "kid's",
    },
  ];
  return (
    <>
      <div className=" md:flex md:items-center gap-3">
        {links.map((link, i) => (
          <div>
            <div key={i} className=" px-3 text-left md:cursor-pointer">
              <h2 className=" py-7">{link.name}</h2>
              {link.submenu && (
                <div>
                  <div>
                    <div>
                      {link.subLinks.map((mysublinks) => (
                        <div>
                          <h1>{mysublinks.Head}</h1>
                          {mysublinks.subLink.map((sLink) => (
                            <li>
                              <Link to={sLink.link}>{sLink.name}</Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
