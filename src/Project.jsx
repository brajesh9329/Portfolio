import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio using React & Tailwind",
  },
  {
    title: "NFT Marketplace",
    desc: "Blockchain-based NFT project using Solidity",
  },
  {
    title: "Notes App",
    desc: "Full-stack notes app with React + Backend",
  },
];

const Projects = () => {
  return (
    <section id="project" className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-500">Projects</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
              View Project
            </button>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;