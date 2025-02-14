import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0416] py-4 text-white text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-semibold">Developed by SURAJIT MAITY</h3>
        </div>

        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold">FIND ME ON</h1>
          <p className="mt-4">Feel free to <span className="text-purple-500">connect</span> with me</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://github.com/Surajit0573" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700 transition transform hover:scale-110">
              <AiFillGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/surajit-maity23/" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700 transition transform hover:scale-110">
              <FaLinkedinIn size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
