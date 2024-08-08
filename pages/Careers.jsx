import React from "react";
import CareerGrowth from "../src/components/CareerGrowth";
import Navbar from "../src/components/Navbar";
import CareerSlider from "../src/components/CareerSlider";
import CareerOpen from "../src/components/CareerOpen";
import Footer from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";

function Careers() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <CareerGrowth />
      <CareerSlider />
      <CareerOpen />
      <Footer />
    </>
  );
}

export default Careers;
