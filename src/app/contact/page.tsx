import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function page() {
  return (
    <section className=" bg-gradient-to-r from-slate-900 to-slate-700 font-sans">
      <div className="container px-6 py-32 mx-auto">
        <div className="text-center">
          <p className="font-medium text-5xl text-white que">Contact Me</p>

          <h1 className="mt-2 text-xl font-semibold text-gray-400 md:text-3xl ">
            via
          </h1>
        </div>

        <div className="mt-6">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
              <MdOutlineEmail className="w-6 h-6" />
            </span>
            <p className="mt-2 text-gray-400">mtalha0574758@gmail.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-6">
            <span className="p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
              <FaWhatsapp className="w-6 h-6" />
            </span>
            <p className="mt-2 text-gray-400">+92 308-2279429</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
