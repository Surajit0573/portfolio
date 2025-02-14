import React from "react";
import ProjectCard from "./ProjectCards";
import commune from "../../assets/Projects/commune.jpg";
import skillSwap from "../../assets/Projects/skillSwap.png";
import recipe from "../../assets/Projects/recipeBook.jpg";
import todo from "../../assets/Projects/todo.jpg";

function Projects() {
  return (
    <div className="relative pt-36 pb-8 bg-gradient-to-b from-gray-900 to-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center mb-4">
          My Recent <strong className="text-purple-400">Works</strong>
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Here are a few projects I've worked on recently.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <ProjectCard
            imgPath={commune}
            isBlog={false}
            title="Commune"
            description="Developed a fully responsive chat application with real-time messaging, group voice and video calls, and one-to-one communication. The platform supports server creation, invite links, role-based management, customizable settings, and moderator/admin tools for message deletion and member removal. Leveraging Socket.IO and LiveKit, it enables seamless group chats, voice, and video calls using WebSocket and WebRTC. Integrated Google login via Clerk, emoji support, and file sharing for images and PDFs using UploadThing to enhance user interaction. Built with Next.js, TypeScript, Clerk, Socket.IO, LiveKit, UploadThing, Prisma, and Avien."
            ghLink="https://github.com/Surajit0573/Commune"
            demoLink="https://let-s-connect-jade.vercel.app/"
          />
           <ProjectCard
            imgPath={skillSwap}
            isBlog={false}
            title="SkillSwap"
            description="Developed an Edtech platform featuring seamless video streaming, secure payments via Stripe with 100% issue-free transactions, and JWT-based authentication with 95% email verification using Nodemailer. Designed an instructor dashboard with performance analytics using Chart.js, boosting engagement by 30%. Built with React.js, Node.js, Express.js, MongoDB, JWT, Stripe, Cloudinary, Chart.js, Tailwind CSS, and Material-UI."
            ghLink="https://github.com/Surajit0573/SkillSwap"
            demoLink="https://skill-swap-frontend-xi.vercel.app/"
          />
           <ProjectCard
            imgPath={recipe}
            isBlog={false}
            title="Recipe Book "
            description="Built a full-stack responsive recipe management web application integrating TheMealDB API for advanced filtering and browsing by country or ingredient, increasing user engagement by 40%. Enhanced user experience with a random recipe generator, boosting time spent on the site by 20%. Technologies: React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, TheMealDB API."
            ghLink="https://github.com/Surajit0573/Recipe-Book"
            demoLink="https://github.com/Surajit0573/Recipe-Book"
          />
           <ProjectCard
            imgPath={todo}
            isBlog={false}
            title="ToDo-List_Wather-app"
            description="This is a user-friendly productivity app made with HTML, CSS, JavaScript, and a Weather API. There are....1.To-Do List 2.Alarm Features 3.Weather Updates"
            ghLink="https://github.com/Surajit0573/ToDo-List_Wather-app"
            demoLink="https://github.com/Surajit0573/ToDo-List_Wather-app"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
