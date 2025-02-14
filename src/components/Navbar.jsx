import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour
          ? "bg-[#1b1a2ea9] backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1>SURAJIT</h1>

        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setExpand(!expand)}
        >
          <span className={`bg-[#be50f4] h-1 w-7 transition-transform ${expand ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`bg-[#be50f4] h-1 w-7 transition-all ${expand ? "opacity-0" : ""}`}></span>
          <span className={`bg-[#be50f4] h-1 w-7 transition-transform ${expand ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            expand ? "block" : "hidden"
          } md:flex md:items-center space-x-6 absolute md:static top-16 left-0 w-full bg-[#181a27] md:bg-transparent md:w-auto text-white transition-all`}
        >
          <Link to="" className="px-4 py-2 block md:inline hover:text-[#c95bf5]">
            <AiOutlineHome className="inline mb-1" /> Home
          </Link>
          <Link to="#about" className="px-4 py-2 block md:inline hover:text-[#c95bf5]">
            <AiOutlineUser className="inline mb-1" /> About
          </Link>
          <Link to="#project" className="px-4 py-2 block md:inline hover:text-[#c95bf5]">
            <AiOutlineFundProjectionScreen className="inline mb-1" /> Projects
          </Link>

          {/* GitHub Button */}
          <a
            href="https://github.com/Surajit0573"
            target="_blank"
            className="bg-[#be50f4] text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-[#c95bf5] transition"
          >
            <CgGitFork className="text-lg" />
            <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
