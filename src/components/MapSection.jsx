import React from "react";
import Hr from "./Hr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MapSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });}, []);  

  return (
    <>
   <div data-aos="fade-zoom-in">
   <Hr text="Software Development Centre in Kolkata"/>
   </div>
      <div className="container mt-10 flex gap-10 mx-auto px-3 h-80">
        <div className="overflow-hidden rounded-lg h-96 lg:h-auto flex-1" style={{ flexBasis: "70%" }}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.154786183231!2d88.45435176178151!3d22.577655985070912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753b60388a8d%3A0x1c62b9fad740851f!2sAction%20Area%20I%2C%20Newtown%2C%20New%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1722865503433!5m2!1sen!2sin"
          ></iframe>
        </div>
        <p className="text-sm text-gray-800 flex-1" style={{ flexBasis: "30%" }}>
          <span className="font-semibold">8-Bit Technologies Pvt. Ltd.</span> <br />
          17/1 Lord Sinha Rd., Lords building,<br />
          Room No. 301, Kolkata 700001
        </p>
      </div>
    </>
  );
}

export default MapSection;
