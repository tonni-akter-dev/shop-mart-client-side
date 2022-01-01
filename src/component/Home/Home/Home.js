import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Gallary1 from "../Gallary1/Gallary1";
import Blog1 from "../Blog1/Blog1";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Gallary1 />
      <Services />
      <Blog1/>
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
