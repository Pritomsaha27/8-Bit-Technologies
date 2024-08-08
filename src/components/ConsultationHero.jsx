import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

function ConsultationHero() {
  return (
    <>
      <div className="relative">
        <img className='w-full h-160 object-cover' src="https://www.bitcanny.com/_next/static/media/background_image.68d72b03.jpg" alt="" />
        <div className="absolute inset-0 flex items-center justify-center mt-10">
          <section className="text-white body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-bold text-5xl leading-relaxed text-white">
                  Let us turn your <span className='text-sky-500'>Concepts</span> into <span className='text-sky-500'>Reality</span>
                </h1>
                <p className="leading-relaxed text-3xl mt-4">
                  Hire Remote Developers For Your Projects
                </p>
                <div className='mt-5 text-lg leading-relaxed'>
                  <p className='inline-flex items-center gap-2'><span className='text-sky-500'><AiOutlineCheck /></span>Hire a Dedicated Developer for your Project</p><br />
                  <p className='inline-flex items-center gap-2'><span className='text-sky-500'><AiOutlineCheck /></span>90% Less Cost, Top-Quality Results!</p><br />
                  <p className='inline-flex items-center gap-2'><span className='text-sky-500'><AiOutlineCheck /></span>Proven Expertise in Industry-leading Development</p><br />
                  <p className='inline-flex items-center gap-2'><span className='text-sky-500'><AiOutlineCheck /></span>On-Time Delivery, Every Time!</p>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-3xl font-medium text-center title-font mb-5">
                  Get 15 Days FREE Development And Hiring Consultation...!!!
                </h2>
                <h2 className="text-gray-900 text-sm text-center font-medium title-font mb-5">
                  No Strings Attached, Whether We Partner or Not!
                </h2>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="+91"
                  />
                </div>
                <button className="text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">
                  Book Free Consultation Now
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  We promise we hate spam as much as you do 
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ConsultationHero;
