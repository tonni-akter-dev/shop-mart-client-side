import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Col, Row } from "react-bootstrap";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
const ProductDetails = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/homeProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [id]);
  return (
    <div>
      <NavBar/>
      <div className="container-fluid row mt-5 pt-5">
        <div className="col-lg-4 col-sm-12 ">
          <img
            className="mb-4 centering img-fluid"
            src={productDetail?.img}
            style={{ width: "400px", height: "550px" }}
            alt=""
          />
        </div>
        <div className="col-lg-5 col-sm-12  mb-5 ">
          <h6>{productDetail.title}</h6>
          <span style={{ color: "#E47277", fontWeight: "bold" }}>
            ${productDetail.price}.00 USD
          </span>{" "}
          <br />
          <span>No reviews</span>
          <hr />
          <p>{productDetail.detailS}</p>
          <div className="d-flex full-width">
            <div>
              <div className="d-flex">
                <input
                  style={{ width: "50px", textAlign: "center" }}
                  type="text"
                  className="js-qty__num"
                  value="1"
                  min="1"
                  data-id=""
                  aria-label="quantity"
                  pattern="[0-9]*"
                  name="quantity"
                  id="Quantity"
                />
                <div>
                  <button
                    type="button"
                    className="btn6"
                    data-id=""
                    data-qty="11"
                  >
                    <span className="fa fa-plus"></span>
                  </button>
                  <br />
                  <button
                    type="button"
                    className="btn6"
                    data-id=""
                    data-qty="0"
                  >
                    <span className="fa fa-minus"></span>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="ms-3  addToCart"
              value="Add to Cart"
              style={{ opacity: 1 }}
            >
              ADD TO CART
            </button>
          </div>
          <Link to={`/order/${productDetail._id}`}>
            {" "}
            <button className="btn3 mt-5">BUY IT NOW</button>
          </Link>
          <br />
          {productDetail.categories ? (
            <small>Categories: {productDetail.categories}</small>
          ) : (
            <small>Shop Products</small>
          )}
        </div>
        {/* col-3 */}
        <div className="col-lg-3 col-sm-12 col-xs-12">
          <div className="card border1 p-2">
            <div className="card-body text-center">
              <h5 className="card-title">Why Choose Us ?</h5>
              <p className="card-text details1">
                Official Herschel stockist Australian warranty assistance &
                support Australian shipping & returns.Customer first experience
                environmentally focused
              </p>
            </div>
          </div>
          <div className="card border1 p-2 mt-4">
            <div className="card-body text-center">
              <h5 className="card-title">Returns</h5>
              <p className="card-text details1">
                Return this product within 100 days if you change your mind. Get
                a refund/replacement & free return shipping if it arrives
                damaged or not as described
              </p>
            </div>
          </div>
          <div className="card border1 p-2 mt-4 mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Shipping</h5>
              <p className="card-text details1">
                Free if stated near price. $9.95 Australia wide (up to 10
                items). $18.95 for Express Post (generally 1 business day).
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="container-fluid mb-5 pb-5 ">
        <Row lg={2}>
          <Col sm={12}>
            <img
              style={{ width: "500px" }}
              className="img1 img-fluid"
              src="https://i.ibb.co/9V0B7W0/photo-1523260578934-e9318da58c8d.jpg"
              alt=""
            />
          </Col>
          <Col sm={12}>
            {/*
             */}
            <h3 className="mt-5 pt-5">
              Calf-Length Dress In Airy, Textured Cotton Fabric With A Printed
              Pattern
            </h3>
            <span className="details1">
              Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id,
              varius estibulum ante ipsum primis in faucibus
            </span>{" "}
            <br />
            <img
              style={{ width: "600px", height: "450px" }}
              className="mt-5 img2 img-fluid"
              src="https://i.ibb.co/TcLpn4x/freestocks-3-Q3ts-J01nc-unsplash.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
