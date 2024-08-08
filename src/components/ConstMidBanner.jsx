import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "../css/hover.css";

function ConstMidBanner() {
  return (
    <>
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://d1brrfe9oh6qhi.cloudfront.net/questions-bg-tech-development1.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 md:space-y-8 p-4 md:p-8 overflow-hidden">
          <h2 className="text-center mb-6 md:mb-10 text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-relaxed">
            We delve deep to <br className="hidden md:block" />
            comprehend your visions <br className="hidden md:block" />
            before we start
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-around mb-6 md:mb-10 px-4 md:px-10 lg:px-20 text-lg md:text-xl lg:text-2xl font-bold leading-snug md:leading-loose">
            <p className="mb-4 md:mb-0 text-center md:text-left">What are your pain points?</p>
            <p className="text-center md:text-left">What problems will it solve?</p>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-around mb-6 md:mb-10 px-4 md:px-10 lg:px-20 text-lg md:text-xl lg:text-2xl font-bold leading-snug md:leading-loose">
            <p className="mb-4 md:mb-0 text-center md:text-left">What are the objectives of your application?</p>
            <p className="text-center md:text-left">Who is the target audience?</p>
          </div>
          <p className="text-center mt-8 md:mt-12 text-base md:text-xl lg:text-3xl leading-relaxed">
            These insights serve as the foundation upon which <br className="hidden md:block" /> every
            subsequent decision is based
          </p>
          <button className="bg-sky-500 rounded w-48 h-12 md:w-60 md:h-16 btn text-white text-xs md:text-sm font-semibold flex items-center justify-center mt-6 md:mt-10">
            <Link to="/contact">CONTACT US NOW</Link> 
            <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ConstMidBanner;
