import React, { useState } from 'react';
import EightbitTechnologies from '../assets/EightbitLogo.png';
import { Link } from 'react-router-dom';
import "../css/hover.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-auto h-6 sm:h-7" src={EightbitTechnologies} alt="Eightbit Technologies Logo" />
          </Link>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
          <div className="flex flex-col md:flex-row  text-sm font-medium md:mx-6">
            <Link className="my-2 text-gray-800 nav  md:mx-4 md:my-0" to="/home">HOME</Link>
            <Link className="my-2 text-gray-800 nav  md:mx-4 md:my-0" to="/about">ABOUT US</Link>
            <ul className='lg:px-3'> 
            <li className='relative group '>
          <button className=' text-gray-800 text-sm nav  font-medium'>SERVICES</button>
          <ul className='absolute left-0 w-40 mt-1 hidden group-hover:block bg-white border border-gray-200 shadow-lg'>
            <li ><Link className='block px-4 py-2 hover:bg-gray-100' to="/aws">AWS</Link></li>
            <li ><Link className='block px-4 py-2 hover:bg-gray-100' to="/nodejs">NODE JS</Link></li>
            <li ><Link className='block px-4 py-2 hover:bg-gray-100' to="/react-native">REACT NATIVE</Link></li>
            <li ><Link className='block px-4 py-2 hover:bg-gray-100' to="/react-web">REACT WEB</Link></li>
            <li ><Link className='block px-4 py-2 hover:bg-gray-100' to="/ruby-on-rails">RUBY ON RAILS</Link></li>
          </ul>
        </li>
            </ul>
            <Link className="my-2 text-gray-800 nav  md:mx-4 md:my-0" to="/about">CAREER</Link>
            <Link className="my-2 text-gray-800 nav  md:mx-4 md:my-0" to="/about">CONTACT US</Link>
            <Link className="my-2 text-gray-800 nav md:mx-4 md:my-0" to="/about">FREE CONSULTATION</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
