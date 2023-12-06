import React from "react";
import HeroSection from "../Components/homepage/HeroSection";
import Footer from "../Components/Footer";
import CategoriesSection from "../Components/homepage/CategoriesSection";
import Header from "../Components/Header";


function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <Footer />
    </>
  );
}

export default HomePage;
