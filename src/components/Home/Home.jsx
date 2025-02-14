import React from "react";
import homeLogo from "../../assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat z-0 pt-8 pb-8 md:pt-12 md:pb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(27,26,46,0.7), rgba(27,26,46,0.9)), url(./Assets/home-bg.jpg)`,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-7/12 text-left">
            <h1 className="text-4xl md:text-5xl font-bold pl-6 md:pl-12">
              Hello There!
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold pl-6 md:pl-12">
              I'M <strong className="text-[#cd5ff8]">SURAJIT MAITY</strong>
            </h1>

            <div className="mt-8 pl-6 md:pl-12">
              <Type />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-5/12 flex justify-center mt-6 md:mt-0">
            <img
              src={homeLogo}
              alt="home pic"
              className="max-h-[450px] w-auto"
            />
          </div>
        </div>
      </div>

      {/* Home2 Component */}
      <Home2 />
    </section>
  );
}

export default Home;
