import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
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
  );
}

export default Footer;
