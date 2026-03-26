import React from 'react'
import Navbar from '../layout/navbar'
import PricingPage from './components/PricingPlan'
import Footer from '../layout/footer'
import Contact from '../Contact'

const page = () => {
  return (
    <>
    <Navbar/>
    <PricingPage/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default page