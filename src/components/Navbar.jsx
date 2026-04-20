import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

      const sections = ["home", "about", "skills", "project", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 fixed top-0 w-full h-auto md:h-14 py-2 bg-gray-900 z-50">

      <a href="#home" className={`text-sm md:text-base ${active==="home" ? "text-blue-500 border-b-2 border-blue-500" : "text-white"} hover:text-blue-400 transition`}>
        Home
      </a>

      <a href="#about" className={`text-sm md:text-base ${active==="about" ? "text-blue-500 border-b-2 border-blue-500" : "text-white"} hover:text-blue-400 transition`}>
        About
      </a>

      <a href="#skills" className={`text-sm md:text-base ${active==="skills" ? "text-blue-500 border-b-2 border-blue-500" : "text-white"} hover:text-blue-400 transition`}>
        Skills
      </a>

      <a href="#project" className={`text-sm md:text-base ${active==="project" ? "text-blue-500 border-b-2 border-blue-500" : "text-white"} hover:text-blue-400 transition`}>
        Project
      </a>

      <a href="#contact" className={`text-sm md:text-base ${active==="contact" ? "text-blue-500 border-b-2 border-blue-500" : "text-white"} hover:text-blue-400 transition`}>
        Contact
      </a>

    </nav>
  )
}

export default Navbar