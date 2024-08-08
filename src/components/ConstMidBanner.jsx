import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "../css/hover.css"
function ConstMidBanner() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full object-cover"
          src="https://d1brrfe9oh6qhi.cloudfront.net/questions-bg-tech-development1.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-8 p-4">
          <h2 className="text-center mb-10 text-4xl font-bold leading-relaxed">
            We delve deep to <br />
            comprehend your visions <br />
            before we start
          </h2>
          <div className="flex w-full justify-around mb-10 px-20 text-2xl font-bold leading-loose">
            <p>What are your pain points?</p>
            <p>What problems will it solve?</p>
          </div>
          <div className="flex w-full justify-around mb-10 px-20 text-2xl font-bold leading-loose">
            <p>What are the objectives of your application?</p>
            <p>Who is the target audience?</p>
          </div>
          <p className="text-center mt-24 text-3xl leading-relaxed">
            These insights serve as the foundation upon which <br /> every
            subsequent decision is based
          </p>
          <button className="bg-sky-500 rounded w-48 h-16 btn text-white text-sm font-semibold flex items-center justify-center">
          <Link to="/contact">CONTACT US NOW</Link> <FaArrowRightLong className="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ConstMidBanner;
