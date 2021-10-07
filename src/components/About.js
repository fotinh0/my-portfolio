import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hello, my name is <span className="font-bold text-malibu-500">Foti</span>.
            <br className="hidden lg:inline-block" /> I love to <span className="font-bold text-malibu-500">learn</span> and <span className="font-bold text-malibu-500">build</span> amazing
            web applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a junior web developer based in New York City. I specialize in front-end development and posssess a working 
            knowledge of back-end development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-malibu-700 rounded text-lg text-center">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-malibu-700 rounded text-lg text-center">
              View My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./avatars.svg"
          />
        </div>
      </div>
    </section>
  );
}