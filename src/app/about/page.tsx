"use client";

import Typewriter from "typewriter-effect";
import React from "react";
import { FaInstagram } from "react-icons/fa";
function page() {
  return (
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
          {/* <div className="flex justify-center">
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
          </div> */}
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
  );
}

export default page;
