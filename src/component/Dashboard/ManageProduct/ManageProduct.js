import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ManageProduct = ({ allProduct,handleDeletBtn }) => {
  const { img, title, price, _id } = allProduct;
  return (
    <div className=" mt-5">
      <div>
        <Col sm={12}>
          <Card style={{ height: "380px" }}>
            <Card.Img variant="top" style={{ height: "250px" }} src={img} />
            <Card.Body>
              <Card.Title>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/homeProducts/${_id}`}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      color: "brown",
                      fontWeight: "bold ",
                      textDecoration: "none",
                    }}
                  >
                    {title}
                  </span>
                </Link>
              </Card.Title>
              <Card.Title className="d-flex justify-content-between">
                <span style={{ fontSize: "18px" }}>${price}.00</span>
              </Card.Title>
              <Card.Title className="d-flex justify-content-between">
                <span style={{ fontSize: "18px" }}>
                  <Link to={`/homeProducts/${_id}`}>Details</Link>
                </span>
                <span style={{ fontSize: "18px" }}>
                <button
              onClick={() => handleDeletBtn(_id)}
              className="btn btn-dark"
            >
              Delete
            </button>
                </span>
                
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default ManageProduct;
