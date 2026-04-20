import React from 'react'

const Leftside = () => {
  return (
    <div className="w-full md:w-[60%] mt-16 md:mt-7 h-auto flex items-center justify-center md:justify-start">
      
      <div className="p-5 md:p-10 space-y-4 md:space-y-5 text-center md:text-left">

        {/* Small Heading */}
        <h1 className="text-blue-400 text-xl md:text-2xl tracking-wide animate-[fadeIn_1s_ease-in-out]">
          👋 Hello, I'm
        </h1>

        {/* Name */}
        <h1 className="text-3xl md:text-5xl font-bold text-white animate-[fadeIn_1.5s_ease-in-out]">
          Brajesh Pathak
        </h1>

        {/* Main Heading */}
        <h2 className="text-xl md:text-3xl font-semibold text-white flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start whitespace-normal md:whitespace-nowrap">
          <span>I am a</span>
          <span className="text-blue-500 typing inline-block">
            Creative Developer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md md:max-w-lg mx-auto md:mx-0 animate-[fadeIn_2s_ease-in-out]">
          Passionate Full Stack Developer 🚀 skilled in React, Tailwind & Java.  
          I love building modern, responsive and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 justify-center md:justify-start">
          <button className="px-5 md:px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded text-sm md:text-base">
            Hire Me
          </button>

          <button 
           className="px-5 md:px-6 py-2 border border-blue-500 hover:bg-blue-500 transition rounded text-sm md:text-base">
            View Projects
          </button>
        </div>

      </div>

    </div>
  )
}

export default Leftside