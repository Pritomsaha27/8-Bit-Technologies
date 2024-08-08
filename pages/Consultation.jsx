import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import ConsultationHero from '../src/components/ConsultationHero'
import DevServices from '../src/components/DevServices'
import HiringModel from '../src/components/HiringModel'
import TechUse from '../src/components/TechUse'
import OurServices from '../src/components/OurServices'
import ConstMidBanner from '../src/components/ConstMidBanner'
import Projects from '../src/components/Projects'
import ClientParalax from '../src/components/ClientParalax'
import ScrollToTop from '../src/components/ScrollToTop'


function Consultation() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <ConsultationHero/>
    <DevServices/>
    <HiringModel/>
    <TechUse/>
    <OurServices/>
    <ConstMidBanner/>
    <Projects/>
    <ClientParalax/>
    <Footer/>
    </>
  )
}

export default Consultation