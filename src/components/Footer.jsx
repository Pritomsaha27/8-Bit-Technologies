import React from "react";
import EbitLogo from "../assets/EbitLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="bg-zinc-900 flex flex-col md:flex-row justify-evenly items-center py-10 px-4 md:py-14 mt-10 space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <img className="w-36 mb-4 mx-auto md:mx-0" src={EbitLogo} alt="" />
          <p className="text-sm text-gray-200">
            <span className="font-semibold">8-Bit Technologies Pvt. Ltd.</span> <br />
            17/1 Lord Sinha Rd., Lords building,<br />
            Room No. 301, Kolkata 700001
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 text-gray-100 text-sm">
          <ul className="text-center md:text-left">
            <h1 className="text-xl font-medium mb-4">COMPANY</h1>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
          </ul>
          <ul className="text-center md:text-left">
            <h1 className="text-xl font-medium mb-4">OTHERS</h1>
            <li>Privacy Policies</li>
          </ul>
          <ul className="text-center md:text-left">
            <h1 className="text-xl font-medium mb-4">CONTACT US</h1>
            <li className="flex justify-center md:justify-start items-center mb-2"><FaPhoneAlt className="mr-2" /> +91 6294949768</li>
            <li className="flex justify-center md:justify-start items-center mb-4"><IoMdMail className="mr-2" /> pritom2001.saha@gmail.com</li>
            <div className="flex justify-center md:justify-start items-start gap-4">
              <a href="https://www.facebook.com/pritom.saha.12935/"><TiSocialFacebook className="text-2xl" /></a>
              <a href="https://www.instagram.com/"><TiSocialInstagram className="text-2xl" /></a>
              <a href="https://x.com/?lang=en&lang=en"><TiSocialTwitter className="text-2xl" /></a>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-black text-center text-gray-50 text-sm font-medium py-3">
        © 8-Bit Technologies Pvt. Ltd. All rights reserved
      </div>
    </>
  );
}

export default Footer;
