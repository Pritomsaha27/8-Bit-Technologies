import React from 'react'
import Hr from './Hr';
import { SERVICES } from '../assets/Services';
import "../css/hover.css"
function OurServices() {
  return (
    <>
      <div className='container my-14 mx-auto px-32'>
        <Hr text="Our Services
" />
        <div className='grid grid-cols-3  gap-x-20 gap-y-8 mt-16'>
          {SERVICES.map((service, index) => {
            return (
              <div className='border card p-6 flex flex-col rounded bg-gray-50 items-center py-12' key={index}>
                <div className='flex justify-center'>
                  <img src={service.image} alt="" />
                </div>
                <div className='font-semibold mt-10 text-center'>{service.heading}</div>
                <div className='text-sm mt-2 text-center'>{service.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default OurServices;
