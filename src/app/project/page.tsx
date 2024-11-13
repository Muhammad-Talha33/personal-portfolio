import React from "react";

function page() {
  return (
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
                  This project is a simple and interactive Resume Builder that
                  allows you to easily create resumes. You can fill in your
                  personal details, upload a profile picture, and provide
                  information about your education, work experience, and skills.
                  Once completed, you can generate and download the resume as a
                  PDF file. Key Features: • Add Personal Details: Input your
                  name, contact details, and education. • Upload Profile
                  Picture: Add a personal touch by uploading your profile
                  picture to your resume. • Work Experience and Skills: Include
                  your job experience, skill set and more. • Download as PDF:
                  Once all fields are filled, generate and download your resume
                  as a PDF file.
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
    </section>
  );
}

export default page;
