import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Socials from "./Component/Socials";
import Services from "./Component/Services";
import Steps from "./Component/Steps";
import Download from "./Component/Download";
import Newsletter from "./Component/Newsletter";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Socials />
      <Steps />
      <Download />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
