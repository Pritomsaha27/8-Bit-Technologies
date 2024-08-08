import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import Hr from "./Hr";
import { Link } from "react-router-dom";
import "../css/hover.css"

const Template = ({ banimg, bantext, bantext2, hr, hr2, landingtext, landingtext2 }) => {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-192 mb-10"
        style={{
          backgroundImage: `url('https://bitcanny-prod.s3.ap-south-1.amazonaws.com/images/react_banner.jpg')`,
        }}
      >
        <div className="flex items-center container mx-auto h-full px-32">
          <div className="flex-1 flex flex-col justify-center pr-10 text-white">
            <h2 className="text-4xl font-bold mb-4">{bantext}</h2>
            <p className="mb-2 text-xl">We are experts at it!</p>
            <p className="text-gray-400 mt-5">{bantext2}</p>
            <button className="bg-gray-900  rounded w-96 h-16 mt-8 text-cyan-300 tracking-wider flex btn3 items-center justify-center">
              <Link to="/contact">Schedule a free consultation with us</Link>
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
          <div className="flex-1">
            <img src={banimg} alt="AWS Banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Hr text={hr} />
      <p className="container px-32 mx-auto text-center my-10">{landingtext}</p>
      <div className="flex justify-center mb-10 gap-5">
        <div className="border flex btn4 flex-col justify-evenly items-center w-72 h-60">
          <img className="h-16 w-16" src="https://www.bitcanny.com/images/webdev.png" alt="" />
          <p>
            App Development <br />
            and Maintenance
          </p>
        </div>
        <div className="border flex btn4 flex-col justify-evenly items-center w-72 h-60">
          <img className="h-16 w-16" src="https://www.bitcanny.com/images/Hire-dedicated-team-icon.png" alt="" />
          <p className="text-center">
            Hire Dedicated Team <br />
            of Developers
          </p>
        </div>
        <div className="border flex btn4 flex-col justify-evenly items-center w-72 h-60">
          <img className="h-16 w-16" src="https://www.bitcanny.com/images/development-icon.png" alt="" />
          <p className="text-center">
            Agile Development <br /> & SCRUM
          </p>
        </div>
        <div className="border flex  btn4 flex-col justify-evenly items-center w-72 h-60">
          <img className="h-16 w-16" src="https://www.bitcanny.com/images/Minimum-Viable-icon.png" alt="" />
          <p className="text-center">
            Minimum Viable product or Scalable Enterprise Application
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-10 gap-5">
     
      </div>
      <div className="">
        <Hr text={hr2} />
        <p className="container px-32 mx-auto text-center pb-10 my-10">{landingtext2}</p>
      </div>
      <div className="">
        <Hr text="OUR BUSINESS MODEL" />
      </div>
      <div className="container px-32 flex gap-5 mx-auto">
        <div className="pt-5 w-1/2 card text-center border shadow-xl my-12 h-160 w-104 text overflow-hidden">
          <div className="flex  justify-center">
          <img
            src="https://www.bitcanny.com/images/full-time-icon.png"
            className="w-24"
            alt="Full Time Billing Icon"
          />
          </div>
          <div className="pt-10"> 
            <p className="text-xl font-bold mb-5">Full Time billing</p>
           <div className="flex flex-col gap-5">
           <div>
              <p className="font-semibold">Team Size</p>
              <p>For a single resource, each scrum team will have 4 to 8 team members.</p>
            </div>
            <div>
              <p className="font-semibold">Billing</p>
              <p>Monthly fixed price for 160 - 170 hours</p>
            </div>
            <div>
              <p className="font-semibold">Hiring Period</p>
              <p>Minimum 1 Month</p>
            </div>
            <div>
              <p className="font-semibold">Scope of work</p>
              <p>As decided on a continuous basis</p>
            </div>
            <div>
              <p className="font-semibold">Team Management</p>
              <p>Dedicated Development manager for 6+ team members</p>
            </div>
            <div>
              <p className="font-semibold">Methodology</p>
              <p>Agile/scrum</p>
            </div>
           </div>
          </div>
        </div>

        <div className="p-5 w-1/2 card text-center border shadow-xl my-12 h-160 w-104 text overflow-hidden">
          <div className="flex justify-center">
          <img
            src="https://www.bitcanny.com/images/part-time-icon.png"
            className=" w-24"
            alt="Project Based Billing Icon"
          />
          </div>
          <div className="pt-10"> 
            <p className="text-xl font-bold pb-10">Project based billing</p>
           <div className="flex flex-col gap-6">
           <div>
              <p className="font-semibold">Scope of work is pre ascertained</p>
            </div>
            <div>
              <p className="font-semibold">Price is quoted for work.</p>
            </div>
            <div>
              <p className="font-semibold">We develop as per the specifications</p>
            </div>
            <div>
              <p className="font-semibold">Team Management is our responsibility</p>
            </div>
            <div>
              <p className="font-semibold">Methodology - Agile or Waterfall</p>
            </div>
           </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Template;
