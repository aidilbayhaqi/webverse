import React from 'react'
import Navbar from '../layout/navbar'
import Project from './components/PortofolioCard'
import { TopPortfolioSlider } from './components/PortofolioSlider'
import ServiceCarousel from './components/PortofolioCarousel'
import PortfolioHero from './components/PortofolioSection'
import Contact from '../Contact'
import Footer from '../layout/footer'


const page = () => {
  return (
    <>
    <Navbar/>
    <PortfolioHero/>
    <TopPortfolioSlider/>
    <Project/>
    <ServiceCarousel/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default page