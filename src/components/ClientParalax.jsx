import React, { useEffect } from 'react';
import "../css/herobanner.css";
import Hr from './Hr';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS } from '../assets/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ClientParalax() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    centerPadding: '0'  // Center slides with no padding
  };

  return (
    <>
      <div className="banner2 my-20 text-black">
        <div className="container mx-auto pt-24 px-4 sm:px-8 md:px-16 lg:px-32">
          <div className='pt-2'>
            <div data-aos="fade-zoom-in">
              <Hr text="WHAT OUR CLIENT SAY ABOUT US" />
            </div>
          </div>
          <Slider {...settings} className="mySlider">
            {TESTIMONIALS.map((test, index) => (
              <div className='p-8 sm:p-10 md:p-20' key={index}>
                <div data-aos="fade-up" className="testimonial-slide text-center flex flex-col items-center">
                  <img
                    className='inline-block h-12 w-12 sm:h-16 sm:w-16 mb-2 rounded-full ring-2 ring-white'
                    src={test.image}
                    alt={test.name}
                  />
                  <div className='text-lg sm:text-xl font-semibold'>{test.name}</div>
                  <div className='font-medium text-sm'>{test.website}</div>
                  <div className='font-semibold'>{test.role}</div>
                  <div className='text-base sm:text-xl mt-4'>{test.comment}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ClientParalax;
