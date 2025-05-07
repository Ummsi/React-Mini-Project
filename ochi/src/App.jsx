import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eye from './Components/Eye'
import Feature from './Components/Feature'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full text-white bg-zinc-900 '>
      <Navbar />
      <Landing />
      <Marquee />
      <About/>
      <Eye/>
      <Feature/>
      <Cards/>
      <Footer/>
          </div>
  )
}

export default App
