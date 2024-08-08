import React, { useEffect } from 'react';
import Hr from "../components/Hr";
import { PARTICIPANTS } from '../assets/StandOut';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/hover.css";

function Participations() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);  

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div data-aos="fade-zoom-in">
          <Hr text="COMMUNITY PARTICIPATION" />
        </div>
      </div>
      <div className='container mx-auto flex flex-wrap justify-center gap-10 md:gap-20'>
        {PARTICIPANTS.map((part, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-auto">
            <img className='h-auto tech w-32 mt-10 mx-auto' src={part.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Participations;
