import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl text-white font-sans">
            {"</>"} Portfolio
          </span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-">
          <a
            href="/"
            className="mr-5 text-white text-lg hover:text-[#4fa4ff] cursor-pointer"
          >
            Home
          </a>
          <a
            href="/about"
            className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
          >
            About
          </a>

          <a
            href="/project"
            className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
          >
            Projects
          </a>

          <a
            href="/skills"
            className="mr-5 text-white hover:text-[#4fa4ff] cursor-pointer"
          >
            Skills
          </a>

          <a
            href="/contact"
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
  );
}

export default Header;
