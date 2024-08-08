import React from 'react';
import Hr from './Hr';
import "../css/visionmission.css";
import "../css/hover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function VisionMission() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);  

  return (
    <>
      <div className='container text-center mx-auto px-8 md:px-32'>
        <div data-aos="fade-zoom-in">
          <Hr text="OUR VISIONS AND MISSIONS" />
        </div>
        <p className='text-lg font-semibold mt-4'>
          Since our incorporation in 2013 we continue to specialize in custom software development as well as forming and managing world class software engineering teams that can build, maintain and grow software products.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row container gap-6 mx-auto px-8 md:px-32 my-12">
        <div data-aos="fade-up" data-aos-duration="900" className="md:w-1/2 bg-gray-100 px-6 py-6 card rounded-xl">
          <img className=' I' src="https://d1brrfe9oh6qhi.cloudfront.net/visionArrow.png" alt="Our Vision" />
          <p className='text-xl pt-5 font-semibold'>Our Vision</p>
          <p className="mt-5 leading-relaxed">
            8-Bit  Technologies was formed with the vision to be a leading force in shaping the future of technology through innovative software and web app development. <br /> <br />
            Over the years we have built software and engineering teams for Industries such as real estate property management, event management, marketplaces, smarthome and IoT and much more.
            <br /> <br />
            We aspire to be recognized as the go-to partner for businesses to creatively apply cutting-edge technology solutions. We are constant learners who use our learnings to innovate for our clients. By envisioning and creating solutions that empower our clients and users, we aim to contribute to a future where technology serves as a catalyst for positive change in society.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="md:w-1/2 bg-gray-100 px-6 py-6 card rounded-xl">
          <img className=' I' src="https://d1brrfe9oh6qhi.cloudfront.net/abticon-2.png" alt="Our Mission" />
          <p className='text-xl font-semibold pt-5'>Our Mission</p>
          <p className="mt-5 leading-relaxed">
            Our mission is to craft exceptional software and web applications that propel businesses forward. We are committed to delivering tailor-made solutions that align with our clients' unique needs and goals. <br /> <br />
            We are dedicated to understanding and addressing the unique needs of our clients, providing them with scalable, efficient, and secure solutions. Through collaboration, transparency, and a relentless pursuit of innovation, we aim to exceed expectations and contribute to the success and growth of our clients in the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </>
  );
}

export default VisionMission;
