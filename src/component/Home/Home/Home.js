import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Gallary1 from "../Gallary1/Gallary1";
import Blog1 from "../Blog1/Blog1";
import { Link, Outlet } from "react-router-dom";
import Products from "../../ProductsComponents/Products/Products";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Gallary1 />
      <div className="text-center">
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            margin: "10px",
          }}
          to="/homeproducts/all"
        >
          All
        </Link>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            margin: "10px",
          }}
          to="/homeproducts/clothes"
        >
          clothes
        </Link>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            margin: "10px",
          }}
          to="/homeproducts/shoes"
        >
          shoes
        </Link>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            margin: "10px",
          }}
          to="/homeproducts/bags"
        >
          bags
        </Link>
        <div className="main mt-5">
          <Outlet></Outlet>
        </div>
      </div>
      <Products />
      <Services />
      <Blog1 />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
