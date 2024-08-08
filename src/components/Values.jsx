import React from 'react';
import "../css/visionmission.css";
import { VALUES } from '../assets/Values';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Values() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className='container mx-auto px-4 md:px-32'>
        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gray-100 mt-10 p-10'>
          <img className='I' src="https://d1brrfe9oh6qhi.cloudfront.net/abticon-1.png" alt="Our Values" />
          <p className='text-xl font-semibold pt-5'>Our Values</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mt-6'>
            {VALUES.map((values, index) => (
              <div key={index} className='flex blog p-5 flex-col'>
                <img data-aos="fade-up" data-aos-duration="800" className='w-16' src={values.image} alt="" />
                <div data-aos="fade-up" data-aos-duration="900" className='font-semibold mt-4'>{values.heading}</div>
                <div data-aos="fade-up" data-aos-duration="1000" className='mt-2'>{values.description}</div>
              </div>
            ))}
          </div>
          <p className='text-center mt-16 text-xl px-4 md:px-10'>
            By upholding these values, we aim to be a trusted partner for businesses seeking transformative software and web app solutions, driven by a commitment to excellence, innovation, and ethical business practices.
          </p>
        </div>
      </div>
    </>
  );
}

export default Values;
