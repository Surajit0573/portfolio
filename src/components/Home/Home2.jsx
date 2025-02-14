import React from "react";
import myImg from "../../Assets/avatar.jpg";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "./Projects";

function Home2() {
  return (
    <div className="relative py-16 bg-gray-900 text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold">
              HELLO, I'M <span className="text-purple-500">SURAJIT MAITY</span>
            </h1>
            <p className="mt-6 text-lg">
              A passionate Full Stack Developer with experience in building scalable web applications.
              <br />
              <br />I specialize in
              <span className="text-purple-500"> Java, Python, C, and JavaScript</span>, with a strong foundation in
              <span className="text-purple-500"> React.js, Next.js, Node.js, and Express.js.</span>
              <br />
              <br />My expertise includes developing robust backend solutions with
              <span className="text-purple-500"> MongoDB, MySQL, and Prisma</span>, along with seamless authentication and secure payment integrations.
              <br />
              <br />I have built and contributed to various projects, including a real-time chat application, an Edtech platform,
              and a recipe management system, all leveraging modern web technologies.
              <br />
              <br />Passionate about open source, I secured 1st position in <span className="text-purple-500">JWOC 2024</span>,
              completed Hacktoberfest 2023, and ranked 13th in CODE PEAK.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/surajit" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                <AiFillGithub />
              </a>
              <a href="https://linkedin.com/in/surajit" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
            <img src={myImg} alt="Surajit Maity" className="w-52 h-52 md:w-72 md:h-72 rounded-full" />
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default Home2;
