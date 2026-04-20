import React from 'react'

const Roadmap = () => {
  return (
    <div className="bg-black text-white py-10 px-4">

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        My Roadmap 🚀
      </h1>

      {/* Desktop Timeline */}
      <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto relative">

        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 -translate-y-1/2"></div>

        {/* Steps */}
        {[
          { title: "Frontend", desc: "HTML, CSS, React" },
          { title: "Backend", desc: "Java, Spring" },
          { title: "Database", desc: "MySQL, MongoDB" },
          { title: "Deployment", desc: "AWS, Vercel" },
        ].map((step, index) => (
          <div key={index} className="relative flex flex-col items-center z-10 text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <h2 className="mt-4 font-bold">{step.title}</h2>
            <p className="text-sm text-gray-300">{step.desc}</p>
          </div>
        ))}

      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="md:hidden flex flex-col gap-8 relative max-w-md mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-blue-500"></div>

        {[
          { title: "Frontend", desc: "HTML, CSS, React" },
          { title: "Backend", desc: "Java, Spring" },
          { title: "Database", desc: "MySQL, MongoDB" },
          { title: "Deployment", desc: "AWS, Vercel" },
        ].map((step, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            
            {/* Dot */}
            <div className="w-8 h-8 bg-blue-500 rounded-full z-10"></div>

            {/* Content */}
            <div>
              <h2 className="font-bold">{step.title}</h2>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Roadmap