import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Icon } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-green-500">
            Foti Ceci
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-gray-400">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-gray-400">
            Skills
          </a>
        </nav>
        <div className="inline-flex items-center border-0 py-1 px-3 mt-4 md:mt-0">
          <a className="mr-5" href="https://github.com/fotinh0" target="_blank"><Icon circular inverted name='github' /></a>
          <a className="mr-5" href="https://www.linkedin.com/in/foti-ceci/" target="_blank"><Icon circular inverted color='blue' name='linkedin' /></a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center text-base text-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}