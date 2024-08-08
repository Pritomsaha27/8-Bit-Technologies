import React, { useEffect } from 'react';
import { TECHNOLOGIES } from '../assets/StandOut';
import { FaArrowRightLong } from "react-icons/fa6";
import Hr from './Hr';
import "../css/hover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TechnologyCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className='container my-14 mx-auto px-4 sm:px-8 md:px-16 lg:px-32'>
        <div 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          data-aos-offset="0"
        >
          <Hr text="OUR TEAM IS PROFICIENT IN TECHNOLOGIES AND TOOLS THAT ARE WIDELY USED TODAY" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-16'>
          {TECHNOLOGIES.map((tech, index) => {
            const isLastTwo = index >= TECHNOLOGIES.length - 2;
            return (
              <div 
                data-aos="fade-up" 
                className={`bg-gray-100 p-6 flex card flex-col py-12 justify-between`} 
                key={index}
              >
                <div>
                  <img className={`h-auto mb-4 ${isLastTwo ? 'w-40' : 'w-16'}`} src={tech.image} alt="" />
                  <div className='font-semibold mt-4'>{tech.heading}</div>
                  <div className='text-sm mt-2'>{tech.description}</div>
                </div>
                <button className="border border-sky-500 rounded font-semibold w-36 h-10 flex items-center justify-center btn2 mt-8">
                  Read More <FaArrowRightLong className='ml-2' />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TechnologyCards;
