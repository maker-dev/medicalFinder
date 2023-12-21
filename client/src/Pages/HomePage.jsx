import React from "react";
import HeroSection from "../Components/homepage/HeroSection";
import Footer from "../Components/Footer";
import CategoriesSection from "../Components/homepage/CategoriesSection";
import Header from "../Components/Header";
import HowItWorkSection from "../Components/homepage/HowItWorkSection";

function HomePage() {
  
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <HowItWorkSection/>
      <Footer />
    </>
  );
}

export default HomePage;
