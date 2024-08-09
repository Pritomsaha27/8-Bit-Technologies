// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Consultation from '../pages/Consultation';
import Template from './components/Template';
import { DATA } from './assets/TempData';
import ScrollToTop from './components/ScrollToTop';
import "./App.css"
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTopButton/>
      <ScrollToTop/>
        <Routes>
          <Route
            exact
            path="/aws"
            element={
              <Template 
                banimg={DATA[0].banimg}
                bantext={DATA[0].bantext}
                bantext2={DATA[0].bantext2}
                hr={DATA[0].hr}
                hr2={DATA[0].hr2}
                landingtext={DATA[0].landingtext}
                landingtext2={DATA[0].landingtext2}
              />
            }
          />

          <Route
            exact
            path="/nodejs"
            element={
              <Template 
                banimg={DATA[1].banimg}
                bantext={DATA[1].bantext}
                bantext2={DATA[1].bantext2}
                hr={DATA[1].hr}
                hr2={DATA[1].hr2}
                landingtext={DATA[1].landingtext}
                landingtext2={DATA[1].landingtext2}
              />
            }
          />

    
          <Route
            exact
            path="/react-web"
            element={
              <Template 
                banimg={DATA[2].banimg} 
                bantext={DATA[2].bantext}
                bantext2={DATA[2].bantext2}
                hr={DATA[2].hr}
                hr2={DATA[2].hr2}
                landingtext={DATA[2].landingtext}
                landingtext2={DATA[2].landingtext2}
              />
            }
          />

          <Route
            exact
            path="/react-native"
            element={
              <Template 
                banimg={DATA[3].banimg} 
                bantext={DATA[3].bantext}
                bantext2={DATA[3].bantext2}
                hr={DATA[3].hr}
                hr2={DATA[3].hr2}
                landingtext={DATA[3].landingtext}
                landingtext2={DATA[3].landingtext2}
              />
            }
          />

          <Route
            exact
            path="/ruby-on-rails"
            element={
              <Template 
                banimg={DATA[4].banimg} 
                bantext={DATA[4].bantext}
                bantext2={DATA[4].bantext2}
                hr={DATA[4].hr}
                hr2={DATA[4].hr2}
                landingtext={DATA[4].landingtext}
                landingtext2={DATA[4].landingtext2}
              />
            }
          />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/consultation" element={<Consultation />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/career" element={<Careers />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
