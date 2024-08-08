import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });}, []);  

  return (
    <>
      <div className='bg-gray-900 flex flex-col-reverse md:flex-row text-white items-center'>
        <div data-aos="fade-up" data-aos-duration="800" className='p-8 md:pl-28 md:pt-20 text-center md:text-left'>
          <p className='text-4xl pb-2'>About</p>
          <p className='text-3xl font-bold'>8-bit Technologies</p>
          <p className='text-lg pt-5 text-balance'>
            We have over 10 years of experience developing and managing multiple software products in property management, IoT, and event management. We know how to set up competent development and development management teams that manage SaaS products on the Cloud.
          </p>
        </div>
        <img data-aos="fade-up" data-aos-duration="1000" className='w-full md:h-screen pt-10 md:pt-0' src="https://d1brrfe9oh6qhi.cloudfront.net/abbnr-img.png" alt="" />
      </div>
    </>
  );
}

export default AboutHero;
