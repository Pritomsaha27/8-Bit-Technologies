import React from 'react'
import ClientParalax from '../src/components/ClientParalax'
import Footer from '../src/components/Footer'
import HeroBanner from '../src/components/HeroBanner'
import Navbar from '../src/components/Navbar'
import Participations from '../src/components/Participations'
import Projects from '../src/components/Projects'
import Standout from '../src/components/Standout'
import TechnologyCards from '../src/components/TechnologyCards'
function HomePage() {
  return (
    <>
    <Navbar/>
    <HeroBanner/>
    <Standout/>
    <TechnologyCards/>
    <ClientParalax/>
    {/* <Projects/> */}
    <Participations/>
    <Footer/> 
    </>
  )
}

export default HomePage