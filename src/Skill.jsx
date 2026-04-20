import React from "react";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS / Tailwind", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Java", level: "70%" },
  { name: "Wordpress", level: "80%" },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black text-white px-6 py-10">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-500">Skills</span>
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded transition-all duration-1000"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;