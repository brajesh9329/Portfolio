import React from 'react'

const Leftside3 = () => {
  return (
    <div className='w-full md:w-[60%] mt-10 md:mt-7 h-auto flex justify-center md:justify-start'>
      
      <div className='p-5 md:p-10 lg:p-16 space-y-4 md:space-y-5 text-center md:text-left'>

        {/* Heading */}
        <h1 className='text-blue-300 text-xl md:text-3xl'>
          Our Service
        </h1>

        {/* Main Title */}
        <h2 className='font-bold text-white text-2xl md:text-4xl flex flex-wrap justify-center md:justify-start'>
          What <span className='text-blue-500 ml-2'>We</span> Do
        </h2>

        {/* Description */}
        <p className='text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed max-w-md md:max-w-lg mx-auto md:mx-0'>
          🚀 I build modern, responsive web applications  
          using React, Tailwind and Java.  

          🎯 I focus on clean UI, smooth UX  
          and scalable backend systems.
        </p>

        {/* Button */}
        <div className='flex justify-center md:justify-start'>
          <button className='px-5 md:px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-xl text-sm md:text-base text-white'>
            View All
          </button>
        </div>

      </div>

    </div>
  )
}

export default Leftside3