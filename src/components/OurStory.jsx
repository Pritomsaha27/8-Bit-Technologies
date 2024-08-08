import React from "react";
import Hr from "./Hr";
import "../css/hover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function OurStory() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);  

  return (
    <>
      <div className="container flex flex-col md:flex-row gap-6 mx-auto px-8 md:px-32 h-auto my-12">
        <div data-aos="fade-up" data-aos-duration="850" className="md:w-1/2 bg-gray-100 px-6 py-6 md:py-0 blog rounded-xl">
          <Hr text="OUR STORY"/>
          <p className="mt-5 leading-relaxed">
            8-Bit Technologies is a software consulting firm that knows what
            is needed to architect and develop high-quality software products. We
            are one of the few companies who are working on domains like IoT and
            Smart Home. We have our niche in cloud-based application development. <br /><br />
            Since our inception in 2013, we have consistently helped our clients
            in building, enhancing, and maintaining their software products. We
            are empanelled software vendors for customizing SaaS products that
            have helped clients build marketplace websites. <br /> <br />With our expertise in
            cloud-based platforms and web technologies, we take pride in
            engineering software solutions that our clients trust to run critical
            business applications.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="md:w-1/2 h-full blog rounded-xl flex items-center justify-center">
          <img className="rounded-xl w-full h-auto object-cover"
            src="https://d1brrfe9oh6qhi.cloudfront.net/abtbimg+(1).png"
            alt="Our Story"
          />
        </div>
      </div>
    </>
  );
}

export default OurStory;
