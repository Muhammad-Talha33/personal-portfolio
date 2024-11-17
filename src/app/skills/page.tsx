import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

function page() {
  return (
    <section
      id="skills"
      className="text-gray-400 body-font bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-15">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white font-sans">
              Discovering the Depth of <br /> My Skills!
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-100 font-sans">
            Showcasing a diverse skill set and expertise, highlighting the
            impact and value I bring to my projects.
          </p>
        </div>
      </div>

      {/* Programming Languages Section */}
      <section>
        <div className="flex flex-wrap justify-center items-center w-full text-2xl">
          {/* Type Effect */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-sans w-full text-center">
            Programming Languages
          </h1>

          {/* Icons Container */}
          <div className="flex flex-wrap justify-center items-center w-full">
            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaHtml5 className="text-red-500 text-6xl " />
              <span className="mt-2 text-lg text-black font-sans">HTML</span>
            </div>

            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <TbBrandJavascript className="text-yellow-500 text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">
                JavaScript
              </span>
            </div>

            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaCss3Alt className="text-blue-500 text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">CSS</span>
            </div>

            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <SiTypescript className="text-blue-600 text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Development Tools And Frameworks Section */}
      <section className="my-10">
        <div className="flex flex-wrap justify-center items-center w-full text-2xl">
          {/* Type Effect */}
          <h1 className="title-font sm:text-4xl text-3xl mt-4 mb-4 font-medium text-white font-sans w-full text-center">
            Development Tools And Frameworks
          </h1>

          {/* Icons Container */}
          <div className="flex flex-wrap justify-center items-center w-full">
            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaGithub className="text-gray-700 text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">GitHub</span>
            </div>

            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <SiVisualstudiocode className="text-blue-600 text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">
                Visual Studio Code
              </span>
            </div>

            <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              <RiNextjsFill className="text-black text-6xl" />
              <span className="mt-2 text-lg text-black font-sans">Next.JS</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default page;
