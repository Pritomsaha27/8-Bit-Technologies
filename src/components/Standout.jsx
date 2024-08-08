import React, { useEffect } from 'react';
import { STAND_OUT } from '../assets/StandOut';
import Hr from './Hr';
import '../css/hover.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Standout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <div className='container mx-auto px-4 lg:px-32'>
        <Hr text="HOW WE STAND OUT" />
        <div className='bg-gray-100 mt-10 p-8 lg:p-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8'>
            {STAND_OUT.map((standout, index) => (
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" key={index} className='flex hover-box card p-6 lg:p-10 flex-col'>
                <img className='w-16' src={standout.image} alt="" />
                <div className='font-semibold mt-4'>{standout.heading}</div>
                <div className='text-sm mt-2'>{standout.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Standout;
