import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

function ConsultationHero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-70" 
          src="https://www.bitcanny.com/_next/static/media/background_image.68d72b03.jpg" 
          alt="Background"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-24">
        <div className="md:w-1/2 lg:w-3/5 text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl mt-5 font-bold leading-snug">
            Let us turn your <span className="text-sky-500">Concepts</span> into <span className="text-sky-500">Reality</span>
          </h1>
          <p className="text-2xl sm:text-3xl mt-4">
            Hire Remote Developers For Your Projects
          </p>
          <div className="mt-5 text-lg leading-relaxed space-y-3">
            <p className="flex items-center gap-2">
              <AiOutlineCheck className="text-sky-500" />
              Hire a Dedicated Developer for your Project
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineCheck className="text-sky-500" />
              90% Less Cost, Top-Quality Results!
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineCheck className="text-sky-500" />
              Proven Expertise in Industry-leading Development
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineCheck className="text-sky-500" />
              On-Time Delivery, Every Time!
            </p>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/5 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-medium text-center mb-5">
            Get 15 Days FREE Development And Hiring Consultation...!!!
          </h2>
          <h2 className="text-gray-900 text-sm text-center font-medium mb-5">
            No Strings Attached, Whether We Partner or Not!
          </h2>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="+91"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="w-full text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">
            Book Free Consultation Now
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            We promise we hate spam as much as you do
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConsultationHero;
