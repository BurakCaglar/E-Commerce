import React from "react";
import { SampleProducts, TopSlider, WhyChoose, Contact } from "../components";
import NavbarV2 from "../components/Navbar&Sidebar/NavbarV2";
import SliderFooter from "../components/SliderFooter";
import { SliderHeadline } from "../components";

const HomePage = () => {
  return (
    <main>
      <NavbarV2 />
      <SliderFooter />
      <SliderHeadline />
      <TopSlider />
      <SampleProducts />
      <WhyChoose />
      <Contact />
    </main>
  );
};

export default HomePage;
