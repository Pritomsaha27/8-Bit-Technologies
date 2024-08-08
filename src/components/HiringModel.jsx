import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../css/hover.css"
function HiringModel() {
  return (
    <>
      <div className="container px-32 mx-auto my-20 flex">
        <div className="w-1/2 ">
          <div className="flex gap-2 card border shadow-md p-5 rounded-lg">
            <img
              className="h-16 w-16"
              src="https://d1brrfe9oh6qhi.cloudfront.net/landing_icon_card_1.png"
              alt=""
            />
            <div className="grid  gap-2">
              <p className="text-2xl font-bold">Our Hiring Model</p>
              <p className="inline-flex items-center gap-2">
                <span className="text-sky-500">
                  <FaCheckCircle />
                </span>
                Project-Based Hiring
              </p>
              <p className="inline-flex items-center gap-2">
                <span className="text-sky-500">
                  <FaCheckCircle />
                </span>
                Dedicated Hiring
              </p>
            </div>
          </div>
          <div className="flex gap-2 card border shadow-md mt-12 p-5 rounded-lg">
            <img
              className="h-16 w-16"
              src="https://d1brrfe9oh6qhi.cloudfront.net/landing_icon_card_2.png"
              alt=""
            />
            <div className="grid gap-2">
              <p className="text-2xl font-bold">
                Take 3 Simple Steps To Hire Our Developers
              </p>
              <p className="inline-flex items-center gap-2">
                <span className="text-sky-500">
                  <FaCheckCircle />
                </span>
                Connect and discuss your project with us
              </p>
              <p className="inline-flex items-center gap-2">
                <span className="text-sky-500">
                  <FaCheckCircle />
                </span>
                Developer will be assigned for your project
              </p>
              <p className="inline-flex items-center gap-2">
                <span className="text-sky-500">
                  <FaCheckCircle />
                </span>
                kick start your project
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img className="tech"
            src="https://d1brrfe9oh6qhi.cloudfront.net/bit-canny-stats-right-3.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HiringModel;
