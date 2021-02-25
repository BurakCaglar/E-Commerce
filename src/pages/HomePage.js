import React from "react";
import { SampleProducts, TopSlider, WhyChoose, Contact } from "../components";
import NavbarV2 from "../components/Navbar&Sidebar/NavbarV2";
import SliderFooter from "../components/SliderFooter";
const HomePage = () => {
  return (
    <main>
      <NavbarV2 />
      <SliderFooter />
      <TopSlider />
      <SampleProducts />
      <WhyChoose />
      <Contact />
    </main>
  );
};

export default HomePage;
