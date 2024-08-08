import React from 'react';
import Hr from './Hr';
import "../css/hover.css"
function CareerOpen() {
  return (
    <>
      <div className='container mx-auto px-32'>
        <Hr text="OPEN POSITIONS AT 8-BIT TECHNOLOGIES"/>
      </div>
      <div className="flex container gap-6 mx-auto px-32 my-12 h-64">
        <div className="w-1/2 border card  border-sky-500 shadow-md px-6 rounded-xl flex flex-col justify-between">
          <div>
            <p className='text-lg pt-5 font-bold '>Ruy On Rails Developers</p>
            <p className="mt-5 leading-relaxed">
              We're looking for a skilled developer with extensive Ruby on Rails expertise to join our team of outstanding engineers working in a fast-paced atmosphere to produce software of the highest calibre. We anticipate you to be passionate about producing clear, effective Ruby code. Additionally, you must be able to operate effectively in a team with engineers, developers, and web designers.
            </p>
          </div>
          <p className='mt-5 my-5 text-sm font-bold'>
            VIEW DETAILS
          </p>
        </div>
        <div className="w-1/2 px-6 border shadow-md card border-sky-500 rounded-xl flex flex-col justify-between">
          <div>
            <p className='text-lg font-bold pt-5'>Node.Js Developer</p>
            <p className="mt-5 leading-relaxed">
              We are looking for a highly capable Node.js developer to optimize our web-based application performance. You will be collaborating with our front-end application developers, designing back-end components, and integrating data storage and protection solutions.
            </p> 
          </div>
          <p className='mt-5 my-5 text-sm font-bold'>
            VIEW DETAILS
          </p>
        </div>
      </div>
      <Hr text="8-BIT TECHNOLOGIES GROWTH LADDER"/>
      <div className="container mx-auto px-32 flex items-center mt-10">
  <img className="w-full h-full object-cover" src="https://d1brrfe9oh6qhi.cloudfront.net/hr_bitcanny-1024x605.jpg" alt="" />
</div>
    </>
  );
}

export default CareerOpen;
