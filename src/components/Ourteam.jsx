import React from "react";
import Hr from "./Hr";
import Participations from "../components/Participations";
import "../css/hover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Ourteam() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className="container text-center mx-auto px-4 md:px-32">
        <div data-aos="fade-zoom-in">
          <Hr text="OUR TEAM" />
        </div>
      </div>
      <div className="flex container flex-col md:flex-row gap-6 mx-auto px-4 md:px-32 h-auto my-12">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-full md:w-1/2 blog rounded-xl h-full flex items-center justify-center"
        >
          <img
            className="rounded-xl w-full h-auto object-cover"
            src="https://d1brrfe9oh6qhi.cloudfront.net/teamimg.jpg"
            alt="Our Team"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-1/2 blog bg-gray-100 px-6 rounded-xl"
        >
          <p className="mt-5 pb-5 leading-relaxed">
            We understand the process and have assembled a multidisciplinary
            team to work with you and deliver delightful solutions. <br /><br />
            The team at 8-Bit  Technologies is made up of enthusiastic young
            and seasoned professionals that collaborate to ensure that high-quality
            solutions are obtained. With our expertise in cloud-based platforms
            and web technologies, we take pride in engineering software solutions
            that our clients trust to run critical business applications.
          </p>
        </div>
      </div>
      <Participations />
    </>
  );
}

export default Ourteam;
