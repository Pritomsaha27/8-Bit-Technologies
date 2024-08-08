import React from "react";
import CareerGrowth from "../src/components/CareerGrowth";
import Navbar from "../src/components/Navbar";
import CareerSlider from "../src/components/CareerSlider";
import CareerOpen from "../src/components/CareerOpen";
import Footer from "../src/components/Footer";

function Careers() {
  return (
    <>
      <Navbar />
      <CareerGrowth />
      <CareerSlider />
      <CareerOpen />
      <Footer />
    </>
  );
}

export default Careers;
