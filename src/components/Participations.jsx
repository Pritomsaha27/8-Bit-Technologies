import React from 'react'
import Hr from "../components/Hr"
import { PARTICIPANTS } from '../assets/StandOut'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "../css/hover.css"
function Participations() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });}, []);  
  return (
    <>
    <div className="container mx-auto px-32">
    <div data-aos="fade-zoom-in">
    <Hr text="COMMUNITY PARTICIPATION"/>
    </div>
    </div>
    <div className='container mx-auto justify-center gap-40 flex'>
        {PARTICIPANTS.map((part,index)=>(
            <div key={index}>
                <img className='h-auto tech w-32 mt-10' src={part.image} alt="" />
            </div>
        ))}
    </div>
    </>
  )
}

export default Participations