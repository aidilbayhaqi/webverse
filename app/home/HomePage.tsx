import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from '../about/components/AboutSection'
import About from './components/aboutHome/AiAbout'
import Contact from '../Contact'
import Navbar from '../layout/navbar'
import VideoSlider from './components/aboutHome/VideoAbout'

const HomePage = () => {
  return (

    <>
    <Navbar/>
   <div className="">
    <HeroSection/>
    <VideoSlider/>
    <About/>
    <Contact/>
    
   </div>
    </>
  )
}

export default HomePage