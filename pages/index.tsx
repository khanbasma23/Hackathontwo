import React from "react";
import Header from "../src/app/components/Header";
import HeroSection from "../src/app/components/HeroSection";
import Feature from "../src/app/components/Feature";
import Categories from "../src/app/components/Categories";
import Products from "../src/app/components/Products";
import Footer from "../src/app/components/Footer";

const Index = () => {
  return (
    <div className="h-screen w-screen">
      
  <Header />

  
        <HeroSection />
      

   <Feature />

      
      <Categories />

   
       <Products/>

       <Footer /> 
    </div>
  );
};

export default Index;
