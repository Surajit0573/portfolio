import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <div className="bg-transparent shadow-md shadow-purple-500 text-white transition-transform duration-500 hover:scale-105 h-full rounded-lg overflow-hidden">
      <img src={imgPath} alt="project-img" className="w-full h-48 object-cover p-5 opacity-80 rounded-lg" />
      <div className="p-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-justify text-sm mt-2">{description}</p>
        <div className="mt-4 flex gap-3">
          <a href={ghLink} target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded flex items-center gap-2">
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded flex items-center gap-2">
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;