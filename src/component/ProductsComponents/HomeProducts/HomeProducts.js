import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./HomeProducts.css";
const HomeProducts = () => {
  return (
    <div>
      <h2>New Arrivals</h2>
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
  );
};

export default HomeProducts;
