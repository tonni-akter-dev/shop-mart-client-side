import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import NavBar from "../../../Shared/NavBar/NavBar";
import Shop from "../Shop/Shop";
const Shops = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <NavBar />
      <h3 style={{ borderBottom: "3px solid skyblue", width: "40%" }}>
        Welcome to our shop-mart
      </h3>
      <Row lg="4">
        {allProducts.map((allProduct) => (
          <Shop key={allProduct._id} allProduct={allProduct}></Shop>
        ))}
      </Row>
    </div>
  );
};

export default Shops;
