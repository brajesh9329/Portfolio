import React from 'react'

const Rightside2 = () => {
  return (
    <div className='w-full md:w-[60%] mt-10 md:mt-11 flex justify-center md:justify-start'>
      
      <div className='p-5 md:p-10 lg:p-16 space-y-4 md:space-y-5 text-center md:text-left'>

        {/* Small Heading */}
        <h1 className='text-blue-300 text-xl md:text-3xl'>
          Creative Developer
        </h1>

        {/* Main Heading */}
        <h2 className='font-bold text-white text-2xl md:text-4xl flex flex-wrap justify-center md:justify-start'>
          We are 
          <span className='text-blue-500 ml-2'>Creative</span> 
          Developers
        </h2>

        {/* Description */}
        <p className='text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed max-w-md md:max-w-lg mx-auto md:mx-0'>
          We are creative developers passionate about transforming ideas into modern, user-friendly web experiences. We focus on building visually appealing and highly functional websites that deliver seamless performance across all devices. By combining clean design, efficient code, and the latest technologies, we create digital solutions that not only look great but also provide an engaging and intuitive user experience.
        </p>

      </div>

    </div>
  )
}

export default Rightside2