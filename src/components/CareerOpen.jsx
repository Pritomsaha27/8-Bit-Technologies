import React from 'react';
import Hr from './Hr';
import "../css/hover.css"
import bitbanner from "../assets/bitbanner.jpg"
function CareerOpen() {
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <Hr text="OPEN POSITIONS AT 8-BIT TECHNOLOGIES"/>
      </div>
      <div className="flex flex-col md:flex-row container gap-6 mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 my-12">
        <div className="w-full md:w-1/2 border card border-sky-500 shadow-md px-6 py-4 rounded-xl flex flex-col justify-between overflow-hidden">
          <div className="flex-1">
            <p className='text-lg pt-2 md:pt-5 font-bold'>Ruby On Rails Developers</p>
            <p className="mt-2 md:mt-5 text-sm  leading-relaxed">
              We're looking for a skilled developer with extensive Ruby on Rails expertise to join our team of outstanding engineers working in a fast-paced atmosphere to produce software of the highest calibre. We anticipate you to be passionate about producing clear, effective Ruby code. Additionally, you must be able to operate effectively in a team with engineers, developers, and web designers.
            </p>
          </div>
          <p className='mt-2 md:mt-5 my-2 md:my-5 text-sm font-bold text-sky-500'>
            VIEW DETAILS
          </p>
        </div>
        <div className="w-full md:w-1/2 border card border-sky-500 shadow-md px-6 py-4 rounded-xl flex flex-col justify-between overflow-hidden">
          <div className="flex-1">
            <p className='text-lg font-bold pt-2 md:pt-5'>Node.Js Developer</p>
            <p className="mt-2 md:mt-5 text-sm  leading-relaxed">
              We are looking for a highly capable Node.js developer to optimize our web-based application performance. You will be collaborating with our front-end application developers, designing back-end components, and integrating data storage and protection solutions.
            </p> 
          </div>
          <p className='mt-2 md:mt-5 my-2 md:my-5 text-sm font-bold text-sky-500'>
            VIEW DETAILS
          </p>
        </div>
      </div>
      <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <Hr text="8-BIT TECHNOLOGIES GROWTH LADDER"/>
        <div className="flex items-center mt-10">
          <img className="w-full h-auto object-cover" src={bitbanner} alt="Growth Ladder" />
        </div>
      </div>
    </>
  );
}

export default CareerOpen;
