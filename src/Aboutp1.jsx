import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6">
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* Left Side (Text) */}
        <div className="animate-[fadeIn_1s_ease-in-out] text-center md:text-left">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
            Hello 👋, I'm <span className="text-white font-semibold">Brajesh</span>, 
            a passionate <span className="text-blue-400">Full Stack Developer</span>.  
            I love building modern web applications using React, Tailwind, and Java.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I focus on creating clean UI, smooth user experience, and scalable backend systems. 
            Currently learning advanced backend development and working on real-world projects 🚀
          </p>

          {/* Button */}
          <button className="mt-6 px-5 md:px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded text-sm md:text-base">
            Download CV
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center animate-[fadeIn_2s_ease-in-out]">
          <img
            src="brajesh.jpeg"
            alt="profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-70 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default About;