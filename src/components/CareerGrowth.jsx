import React from 'react'
import Hr from './Hr'

function CareerGrowth() {
  return (
    <>
      <div className="relative">
        <img className='w-full h-60 object-cover' src="https://d1brrfe9oh6qhi.cloudfront.net/about_banner.jpg" alt="Banner" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">CAREERS</h2>
        </div>
      </div>
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mx-auto relative">
        <Hr text="CAREER GROWTH AT 8-Bit TECHNOLOGIES" />
        <p className='mt-5 leading-relaxed text-sm sm:text-base md:text-base lg:text-base'>
          8-Bit  has Clients across territories. We work with a diversified range of clients from India and overseas. One of the much known organisations across India with a dominant presence in East India, 8-Bit  has established itself as one of the leading recruiters among educational institutions. Even at the time of Pandemic, 8-Bit  has made its recruitment presence at the various Technological Campuses thereby becoming a preferred employer of choice. 
          8-Bit  has Clients across territories. We work with a diversified range of clients from India and overseas. One of the much known organisations across India with a dominant presence in East India, 8-Bit  has established itself as one of the leading recruiters among educational institutions. Even at the time of Pandemic, 8-Bit  has made its recruitment presence at the various Technological Campuses thereby becoming a preferred employer of choice. <br /><br />
          We have our unique modules of Internship and Training that includes group based learning, excellent mentor mentee support, various flexible projects to learn, rigorous evaluation process that make sure that Interns mature themselves in their Learning and Development Process. Simulations, continuous exercises and real life case studies are a part of the curriculum. Here we prepare the Interns to be highly competitive, knowledgeable and focused towards the role they perform.<br /><br />
          Working with cross functional teams and under the credible leadership of our highly learned management, we make sure they learn all the integrities of the technical development. Every day brings a new challenge for them, gradually bringing the best out of them.
        </p>
        <ul className='list-disc mb-10 text-sm sm:text-base md:text-base'>
          <p className='text-lg font-medium sm:text-xl md:text-2xl mt-12'>Some of things that our developers have grown their skills in recent times include:</p>
          <li className='mt-2 ml-6 sm:ml-8 md:ml-10 lg:ml-12'>Ruby on Rails instructor lead training spread over 2 months.</li>
          <li className='mt-2 ml-6 sm:ml-8 md:ml-10 lg:ml-12'>ZWave device communication and IOT (Internet of Things) learning through reading documentation, mentoring and research.</li>
          <li className='mt-2 ml-6 sm:ml-8 md:ml-10 lg:ml-12'>On job learning on technologies like Amazon IOT, Android, IOS, NodeJS and many more.</li>
        </ul>
      </div>
    </>
  )
}

export default CareerGrowth
