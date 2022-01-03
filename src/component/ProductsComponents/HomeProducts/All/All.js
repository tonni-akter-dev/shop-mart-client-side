import React, { useEffect, useState } from "react";
import Clothes from "../Clothes/Clothes";
const All = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/homeproducts/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHomeProducts(data));
  }, []);
  return (
    <div>
      <h2>All Products</h2>
      {homeProducts.map((homeProduct) => <Clothes key={homeProduct._id} title={homeProduct.title}></Clothes>)}
    </div>
  );
};

export default All;
