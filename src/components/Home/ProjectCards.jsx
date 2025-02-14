import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <div className="bg-gray-800 shadow-lg shadow-purple-600 text-white transition-transform duration-300 hover:scale-105 hover:shadow-purple-400 rounded-xl overflow-hidden flex flex-col">
      <img src={imgPath} alt="project-img" className="w-full h-52 object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-purple-400">{title}</h2>
        <p className="text-sm mt-3 text-gray-300 flex-grow">{description}</p>
        <div className="mt-5 flex gap-4">
          <a href={ghLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            <BsGithub className="text-lg" /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <CgWebsite className="text-lg" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
