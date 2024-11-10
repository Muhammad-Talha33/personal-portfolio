"use client";

import Typewriter from "typewriter-effect";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <title>Talha | Portfolio</title>
      {/* Header section*/}
      {/* NavBar */}
      <header className="text-gray-600 body-font bg-gradient-to-r from-slate-900 to-slate-700 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-white font-sans">
              {"</>"} Portfolio
            </span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-sans">
            <a
              href="/"
              className="mr-5 text-white text-lg hover:text-[#4fa4ff] cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
            >
              About
            </a>

            <a
              href="#projects"
              className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <a
            href="https://github.com/Muhammad-Talha33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center bg-[#708090] text-white border-0 py-1 px-3 focus:outline-none hover:bg-[#5F6A77] rounded text-base mt-4 md:mt-0 font-sans">
              <img
                className="w-5 h-5 ml-1 mr-2"
                src="images/github-mark-white.png"
                alt="GitHub image"
              />
              GitHub
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="text-gray-400 bg-gradient-to-r from-slate-900 to-slate-700 body-font"
      >
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center font-sans">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center font-sans">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ml-3 font-sans">
              <Typewriter
                options={{
                  strings: [
                    "Hi, I’m Talha",
                    "Front-End Web Developer",
                    "AI Enthusiast",
                    "And currently learning NEXT JS.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed ml-3 font-sans">
              Passionate about AI (Artificial Intelligence) and Web development
              <br />
              Currently enrolled in the Governor's Initiative IT Program. <br />
              Also, a digital creator sharing AI-generated art on Instagram.
            </p>
            <div className="flex justify-center">
              <a
                href="https://instagram.com/synthsensations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none rounded text-lg ml-3 font-sans">
                  <FaInstagram className="w-6 h-6 ml-1 mr-2" />
                  Visit My Instagram
                </button>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <img
              className="object-cover object-center rounded-3xl w-full max-w-[250px] mt-[20px] mb-[20px] mx-auto p-[10px]"
              alt="hero"
              src="images/pro-pic2.jpg"
            />
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <hr className=" border-t-2 border-gray-500 bg-gray-500" />
      {/* Feature section */}
      <section
        id="projects"
        className="text-gray-400 bg-gradient-to-r from-slate-900 to-slate-700 body-font "
      >
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4 font-sans">
              CMD-Based Projects: NPX Commands
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans">
              These are four basic projects built with TypeScript, Node.js, and
              the Inquirer library.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white font-sans">
                  npx calclteasy-simple-calculator
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white font-sans">
                  npx mindnum-simple-number-guessing
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white font-sans">
                  npx paypoint-simple-atm-machine
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white font-sans">
                  npx tsdo-simple-todo-list
                </span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="text-gray-400 body-font  py-10">
            <div className="container px-5 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white font-sans">
                  More Projects
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {/* Card 1 */}
                <div className="p-4 md:w-1/2">
                  <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">
                      PROJECT
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      Resume Builder
                    </h1>
                    <p className="leading-relaxed mb-3">
                      This project is a simple and interactive Resume Builder
                      that allows you to easily create resumes. You can fill in
                      your personal details, upload a profile picture, and
                      provide information about your education, work experience,
                      and skills. Once completed, you can generate and download
                      the resume as a PDF file. Key Features: • Add Personal
                      Details: Input your name, contact details, and education.
                      • Upload Profile Picture: Add a personal touch by
                      uploading your profile picture to your resume. • Work
                      Experience and Skills: Include your job experience, skill
                      set and more. • Download as PDF: Once all fields are
                      filled, generate and download your resume as a PDF file.
                    </p>
                    <a
                      href="https://resume-builder-by-talha.vercel.app/"
                      className="text-indigo-400 inline-flex items-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 md:w-1/2">
                  <div className="h-full bg-gray-800 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">
                      PROJECT
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      MultiPage Website
                    </h1>
                    <p className="leading-relaxed mb-3">COMING SOON...</p>
                    <a
                      href="https://resume-builder-by-talha.vercel.app/"
                      className="text-indigo-400 inline-flex items-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a
            href="https://github.com/Muhammad-Talha33?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-600 flex mx-auto mt-10 py-3 px-5 rounded-lg items-center hover:bg-[#5F6A77] focus:outline-none">
              <img className="w-6 h-6" src="images/github-mark-white.png" />
              <span className="ml-2 flex items-start flex-col leading-none">
                <span className="text-s text-white mb-1 font-sans">GitHub</span>
                <span className="title-font font-medium text-gray-200 font-sans">
                  @Muhammad-Talha33
                </span>
              </span>
            </button>
          </a>

          {/*Skills Section*/}
          <section id="skills" className="text-gray-400 body-font">
            <div className="container px-5 py-20 mx-auto">
              <div className="flex flex-wrap w-full mb-15 mt-10">
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
          </section>

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
                  <span className="mt-2 text-lg text-black font-sans">
                    HTML
                  </span>
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
          <section>
            <div className="flex flex-wrap justify-center items-center w-full text-2xl">
              {/* Type Effect */}
              <h1 className="title-font sm:text-4xl text-3xl mt-4 mb-4 font-medium text-white font-sans w-full text-center">
                Development Tools And Frameworks
              </h1>

              {/* Icons Container */}
              <div className="flex flex-wrap justify-center items-center w-full">
                <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <FaGithub className="text-gray-700 text-6xl" />
                  <span className="mt-2 text-lg text-black font-sans">
                    GitHub
                  </span>
                </div>

                <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <SiVisualstudiocode className="text-blue-600 text-6xl" />
                  <span className="mt-2 text-lg text-black font-sans">
                    Visual Studio Code
                  </span>
                </div>

                <div className="flex flex-col items-center bg-white border-2 p-4 m-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <RiNextjsFill className="text-black text-6xl" />
                  <span className="mt-2 text-lg text-black font-sans">
                    Next.JS
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-slate-900 to-slate-700 text-gray-200 body-font"
      >
        <div className="container px-5 py-10 mt-[-5px] mx-auto text-center font-sans">
          <h2 className="sm:text-4xl text-2xl font-medium title-font text-white">
            Contact Me
          </h2>
          <p className="sm:text-lg text-2xl font-medium title-font mb-2">Via</p>
          <p className="text-lg leading-relaxed">
            Email: mtalha0574758@gmail.com
          </p>
          <p className="text-lg leading-relaxed">Phone: 0308-2279429</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-400 bg-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad Talha —
            <a
              href="https://github.com/Muhammad-Talha33"
              className="text-gray-400 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Muhammad-Talha33
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100090125664405"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-white"
            >
              <FaFacebook className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Muhammad-Talha33"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-white"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/synthsensations"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-white"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
/* 
  Change the bg color of the icons because when i change the color of the icons, it's would look more good and attractive 
  */
