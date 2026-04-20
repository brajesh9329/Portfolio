import React from 'react'

const Post = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left */}
          <div>
            <h1 className="text-xl font-bold">Brajesh Pathak</h1>
            <p className="text-sm text-blue-500">Full Stack Developer</p>
          </div>

          {/* Center */}
          <div className="flex gap-4 ">
            <a href="http://localhost:5173/#home">Home</a>
            <a href="http://localhost:5173/#about">About</a>
            <a href="http://localhost:5173/#project">Projects</a>
            <a href="http://localhost:5173/#contact">Contact</a>
          </div>

          {/* Right */}
          <div className="flex gap-4">
            <  a href="https://github.com/brajesh9329">GitHub</a>
            <a href="https://www.linkedin.com/in/brajesh-pathak-b1129928b/">LinkedIn</a>
            <a href="https://www.instagram.com/brajesh4453">Instagram</a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-sm mt-4">
          © 2026 Brajesh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Post