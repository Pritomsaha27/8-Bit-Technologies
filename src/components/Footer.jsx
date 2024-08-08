import React from "react";
import EbitLogo from "../assets/EbitLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className="bg-zinc-900 flex justify-evenly items-center py-14 mt-10">
        <div>
          <img className="w-36 mb-4" src={EbitLogo} alt="" />
          <p className="text-sm text-gray-200">
            <span className="font-semibold">8-Bit Technologies Pvt. Ltd.</span> <br />
            17/1 Lord Sinha Rd., Lords building,<br />
            Room No. 301, Kolkata 700001
          </p>
        </div>
        <div className="flex gap-14 text-gray-100 text-sm">
          <ul>
            <h1 className="text-xl font-medium mb-4">COMPANY</h1>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
          </ul>
          <ul>
            <h1 className="text-xl font-medium mb-4">OTHERS</h1>
            <li>Privacy Policies</li>
          </ul>
          <ul>
            <h1 className="text-xl font-medium mb-4">CONTACT US</h1>
            <li className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> +91 6294949768</li>
            <li className="flex items-center mb-4"><IoMdMail className="mr-2" /> pritom2001.saha@gmail.com</li>
            <div className="flex items-start gap-4">
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
