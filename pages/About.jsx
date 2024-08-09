import React from 'react'
import Navbar from '../src/components/Navbar'
import AboutHero from '../src/components/AboutHero'
import OurStory from '../src/components/OurStory'
import VisonMission from '../src/components/VisonMission'
import Values from '../src/components/Values'
import Ourteam from '../src/components/Ourteam'
import MapSection from '../src/components/MapSection'
import Footer from '../src/components/Footer'



function AboutPage() {
  return (
    <>
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