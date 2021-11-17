import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-gray-900 body-font bg-stardust">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 text-xl">
          
          {/* Projects Header */}
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p>
            Web projects I have built using various skills and technologies. <br className="hidden lg:inline-block"/>
            Visit my <a className="inline font-bold text-green-500 hover:text-malibu-700" href="https://github.com/fotinh0">GitHub</a> to view additional projects.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-base title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <p className="leading-relaxed text-gray-200">{project.skills}</p>
                </div>
              </div>
              <div className="relative flex-wrap m-5">
                <a className="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-5" target="_blank" href={project.link}> Live Site</a>
                {project.github && (
                  <a className="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" target="_blank" href={project.github}>GitHub</a>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}