import React from "react";
import Hr from "./Hr";
import { PROJECTS } from "../assets/StandOut";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/hover.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });}, []);  

  return (
    <>
      <div className="container my-20 mx-auto px-32">
        <div data-aos="fade-zoom-in">
        <Hr text="OUR PROJECTS AND CASE STUDIES" />
        </div>
        <Swiper 
        data-aos="fade-up"
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          {PROJECTS.map((project, index) => {
            return (
              <SwiperSlide 
                key={index}
                className="grid grid-cols-1 gap-x-20  card gap-y-8 mt-16">
                <div
                  className={`bg-gray-100 p-6 flex flex-col py-12 justify-between`}>
                  <div>
                    <img
                      className={`h-auto mb-4 w-16'}`}
                      src={project.image}
                      alt=""/>
                    <div className="font-semibold mt-4">{project.heading}</div>
                    <div className="text-sm mt-2">{project.description}</div>
                  </div>
                  <button className="border border-sky-500 rounded btn2 font-semibold w-36 h-10 flex items-center justify-center mt-8">
                    Read More <FaArrowRightLong className="ml-2" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
