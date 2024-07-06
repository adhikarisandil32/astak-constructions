import React from "react"
import Navbar from "../../components/sections/Navbar"
import HeroSection from "../../components/sections/HeroSection"
import AboutSection from "../../components/sections/AboutSection"
import ProjectsSection from "../../components/sections/ProjectsSection"
import ServicesSection from "../../components/sections/ServicesSection"
import TestimonialsSection from "../../components/sections/TestimonialsSection"
import ContactSection from "../../components/sections/ContactSection"
import Banner from "../../components/sections/Banner"
import FooterSection from "../../components/sections/FooterSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Banner />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}
