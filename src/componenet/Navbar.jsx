import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a className="hover:text-blue-700">Home</a>
      </li>
      <li>
        <a className="hover:text-blue-700">For School</a>
      </li>
      <li>
        <a className="hover:text-blue-700">Performance</a>
      </li>
      <li>
        <a className="hover:text-blue-700">Register</a>
      </li>
      <li>
        <a className="hover:text-blue-700">About Us</a>
      </li>
      <li>
        <a className="hover:text-blue-700">Contact Us</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
    ${
      sticky
        ? "bg-slate-100 shadow-md duration-300 transition-all ease-in-out"
        : ""
    }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {/* mobile view */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost">
              <img src={Logo} alt="Company Logo" className="h-10" />
            </a>
            {/* desktop view */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-lg">{navItems}</ul>
          </div>
          <div className="navbar-end">
          <a className="btn bg-blue-700 text-white hover:bg-blue-900 px-7">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
