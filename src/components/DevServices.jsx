import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import video from "../assets/video.mp4";
import { Link } from 'react-router-dom';
import thumbnail from "../assets/video_thumbnail.jpg";
import "../css/hover.css";

function DevServices() {
  return (
    <>
      <div className="container px-5 md:px-32 mx-auto my-20">
        <div className="text-center">
          <p className="text-3xl font-bold">
            Get 15 Days of FREE Development Services
          </p>
          <p className="font-semibold text-lg">
            No Obligations. Whether we collaborate or part ways after that, It's
            Your Choice!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row container gap-6 mx-auto px-5 md:px-32 h-auto my-12">
      <div className="w-full md:w-1/2 px-6 rounded-xl">
          <p className="leading-relaxed text-2xl font-semibold">
            Pioneering the Future of Digital Experiences
          </p>
          <p className="mt-4">
            From web platforms to mobile application and everything in between,
            we are the architects of the future
          </p>
          <p className="mt-4  t font-semibold">
            You will get a dedicated developer for your seamless project
            execution.
          </p>
          <p className="font-semibold t mt-5">
            Receive a consultation along with 15 days of development services at
            no cost. No commitments required, regardless of whether we decide to
            collaborate or not.
          </p>
          <button className=" bg-sky-500 rounded w-56 btn h-16 mt-8 text-white text-sm font-semibold flex items-center justify-center">
            <Link to="/contact">CONTACT US NOW</Link> <FaArrowRightLong className="ml-2" />
          </button>
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center justify-center  md:mt-0">
          <video
            className="rounded-xl w-full h-auto object-cover"
            controls
            poster={thumbnail}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </>
  );
}

export default DevServices;
