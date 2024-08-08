import React from "react";
import "../css/careerslider.css";
import Hr from "./Hr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CAREERTEST } from "../assets/Testimonial";

function CareerSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: '0px', 
  };

  return (
    <>
      <div className="banner3 h-112 text-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="pt-2">
            <Hr text="WHAT OUR CLIENTS SAY ABOUT US" />
          </div>
          <Slider {...settings} className="mySlider">
            {CAREERTEST.map((test, index) => (
              <div className="p-10 sm:p-10 md:p-16 lg:p-20" key={index}>
                <div className="testimonial-slide text-center">
                  <img
                    className="inline-block h-12 w-12 sm:h-16 sm:w-16 mb-2 rounded-full ring-2 ring-white"
                    src={test.image}
                    alt={test.name}
                  />
                  <div className="text-lg sm:text-xl font-semibold">{test.name}</div>
                  <div className="text-base sm:text-lg md:text-xl mt-4">{test.comment}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-black">
            <Hr text="CAREER OPPORTUNITIES AT 8-BIT TECHNOLOGIES" />
            <p className="my-5 text-sm sm:text-base leading-relaxed">
              At 8-Bit technologies, we are always looking for passionate people to join our
              team. We believe that self-improvement is the key to individual and
              organizational growth. Learning is something that should not stop.
              The more you learn, the more you grow. <br />
              <br />
              8-Bit technologies is a fusion of technology and creativity. We have a number
              of open positions. If you think you are up for the challenge and
              excitement of working with us, then please get in touch using the
              form below or drop us a mail at hire@8bit.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerSlider;
