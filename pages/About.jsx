import React from 'react'
import Navbar from '../src/components/Navbar'
import AboutHero from '../src/components/AboutHero'
import OurStory from '../src/components/OurStory'
import VisonMission from '../src/components/VisonMission'
import Values from '../src/components/Values'
import Ourteam from '../src/components/Ourteam'
import MapSection from '../src/components/MapSection'
import Footer from '../src/components/Footer'
import ScrollToTop from '../src/components/ScrollToTop'



function AboutPage() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <AboutHero/>
    <OurStory/>
    <VisonMission/>
    <Values/>
    <Ourteam/>
    <MapSection/>
    <Footer/>
    </>
  )
}

export default AboutPage