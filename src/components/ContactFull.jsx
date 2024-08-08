import React from "react";
import Hr from "./Hr";

function ContactFull() {
  return (
    <>
      <div className="relative mb-5">
        <img
          className="w-full h-60 object-cover"
          src="https://d1brrfe9oh6qhi.cloudfront.net/about_banner.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">CONTACT US</h2>
        </div>
      </div>
      <Hr text="SOFTWARE DEVELOPMENT CENTRE IN KOLKATA" />
      <div className="container mx-auto px-5 sm:px-10 lg:px-32">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-12 md:py-24 mx-auto gap-10  flex xl:flex-nowrap flex-wrap">
            
            <div className="lg:w-1/3 md:w-1/2 w-full bg-white flex px-8 flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feel Free To Contact Us...
              </h2>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
                Let's Talk
              </button>
            </div>
            <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-5 md:p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.154786183231!2d88.45435176178151!3d22.577655985070912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753b60388a8d%3A0x1c62b9fad740851f!2sAction%20Area%20I%2C%20Newtown%2C%20New%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1722865503433!5m2!1sen!2sin"
                frameBorder="0"
              />
              <div className="bg-white relative flex flex-wrap  py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-sm">
                    8-Bit Technologies Pvt. Ltd. <br />
                    17/1 Lord Sinha Rd., Lords building, <br />
                    Room No. 301, Kolkata 700001
                  </p>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    BUSINESS HOURS
                  </h2>
                  <p className="mt-1 text-sm">
                    MON - FRI : 10am – 6pm <br />
                    SAT : 10am – 5pm
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-cyan-600 leading-relaxed">
                    pritom2001.saha@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">6294949768</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactFull;
