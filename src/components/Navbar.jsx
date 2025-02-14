import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? "bg-[#1b1a2ea9] backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <motion.h1
          className="text-3xl font-semibold text-white tracking-wide"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          SURAJIT
        </motion.h1>

        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          <span
            className={`bg-white h-1 w-7 transition-transform ${expand ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`bg-white h-1 w-7 transition-all ${expand ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`bg-white h-1 w-7 transition-transform ${expand ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            expand ? "block" : "hidden"
          } md:flex md:items-center space-x-6 absolute md:static top-16 left-0 w-full bg-[#181a27] md:bg-transparent md:w-auto text-white transition-all`}
        >
          {[{ name: "Home", icon: <AiOutlineHome />, to: "/" },
            { name: "About", icon: <AiOutlineUser />, to: "#about" },
            { name: "Projects", icon: <AiOutlineFundProjectionScreen />, to: "#projects" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.to}
                onClick={() => {
                  if (item.to === "#about") {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  } else if (item.to === "#projects") {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3 rounded-lg md:inline hover:bg-[#3b3f4b] hover:text-[#c95bf5] flex items-center space-x-3 transition-all duration-300"
              >
                <div className="flex">
                  <span className="text-2xl text-white">{item.icon}</span>
                  <span className="font-medium decoration-none text-lg text-white">{item.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/Surajit0573"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#be50f4] text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-[#c95bf5] transition-all duration-300"
          >
            <CgGitFork className="text-xl" />
            <AiFillStar className="text-xl" />
            <span className="font-medium">GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
