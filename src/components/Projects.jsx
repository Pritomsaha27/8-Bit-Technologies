import React, { useEffect } from "react";
import Slider from "react-slick";
import Hr from "./Hr";
import { PROJECTS } from "../assets/StandOut";
import { FaArrowRightLong } from "react-icons/fa6";
import "../css/hover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  };

  return (
    <>
      <div className="container my-20 mx-auto px-4 md:px-16 lg:px-32">
        <div data-aos="fade-zoom-in">
          <Hr text="OUR PROJECTS AND CASE STUDIES" />
        </div>
        <Slider {...settings} data-aos="fade-up">
          {PROJECTS.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 p-6 flex flex-col py-12 justify-between card">
                <div>
                  <img className="h-auto mb-4 w-72" src={project.image} alt="" />
                  <div className="font-semibold mt-4">{project.heading}</div>
                  <div className="text-sm mt-2">{project.description}</div>
                </div>
                <button className="border border-sky-500 rounded btn2 font-semibold w-36 h-10 flex items-center justify-center mt-8">
                  Read More <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Projects;
