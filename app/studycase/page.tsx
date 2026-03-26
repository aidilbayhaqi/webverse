import React from "react";
import Navbar from "../layout/navbar";
import CaseStudyHero from "./components/CaseSection";
import CaseStudyChat from "./components/CaseStudyChat";
import ServicesSection from "./components/CaseStudyService";
import FAQSection from "./components/CaseStudyQuestion";
import SolutionsGrid from "./components/CaseStudyCard";
import Footer from "../layout/footer";



export default function page() {
  return (
    <>
    <Navbar/>
    <CaseStudyHero/>
    <CaseStudyChat/>
    <ServicesSection/>
    <FAQSection/>
    <SolutionsGrid/>
    <Footer/>
    </>
  );
}