import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../css/herobanner.css";
import { Link } from 'react-router-dom';
import "../css/hover.css"

function HeroBanner() {
  return (
    <>
      <div className="banner">
        <div className="banner-content ">
          <p className="text-xl md:text-2xl lg:text-3xl pb-3">
            Building the <span> Future with Technology,</span><br /><span> Smart Equipment</span> and <br /> <span>State of the Art Software</span>  
          </p>
          <p className="text-sm md:text-base lg:text-xl">
            We take pride in demonstrating excellence in software <br />
            services and product development
          </p>
          <button className="bg-sky-500 rounded w-48 h-10 mt-8 btn">
            <Link to="/contact">GET IN TOUCH</Link>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
