import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Gallary1 from "../Gallary1/Gallary1";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Gallary1 />
      <Footer />
    </div>
  );
};

export default Home;
