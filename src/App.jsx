import React from 'react'
import Navbar from './components/Navbar'
import Pageno1 from './Pageno1'
import Pageno2 from './pageno2'
import Pageno3 from './pageno3'
import Pageno4 from './pageno4'
import Roadmap from './components/Roadmap'
import About from './Aboutp1'
import Skills from './Skill'
import Projects from './Project'
import Contact from './Contact'



const App = () => {

  
  return (
    <div className="  min-h-screen w-full bg-black " >
 
     <Navbar/>
    <Pageno1/>
    <Pageno3/>
    <Pageno2/>
    
  <About/>
    <Roadmap/>
  <Skills/>
  <Projects/>
  <Contact/>
    <Pageno4/>
  



    </div>
  )
}

export default App