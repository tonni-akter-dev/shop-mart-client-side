import React from "react";
import "./Gallary1.css";
const Gallary1 = () => {
  return (
    <div>
      <section className="container mt-5">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-5 col-sm-12 card border-0 ">
            <div className="over">
              <img
                className="sec51pic img-fluid"
                src="https://i.ibb.co/txfy15s/1.jpg"
                alt=""
              />
            </div>
            <button type="button" className="btn btn-light womenbtn px-5 fw-bolder">
              Women
            </button>
          </div>
          <div data-aos="zoom-in" className="col-lg-3 col-sm-12 card border-0 overflow-hidden ">
            <img
              className="mb-4 pic over img-fluid"
              src="https://i.ibb.co/tKb4wgV/2.jpg"
              alt=""
            />
            <button type="button" className="btn btn-light bagbtn px-5 fw-bolder">
              Accessories
            </button>
            <img
              style={{ height: "335px" }}
              className="pic img-fluid mb-5"
              src="https://i.ibb.co/93fTC4X/3.jpg"
              alt=""
            />
            <button type="button" className="btn btn-light shoebtn px-5 fw-bolder">
              Footwear
            </button>
          </div>
          <div data-aos="fade-left" className="col-lg-4 col-sm-12 card border-0 overflow-hidden ">
            <img
              className="pic img-fluid"
              style={{ height: "650px" }}
              src="https://i.ibb.co/3WZyTW6/4.jpg"
              alt=""
            />
            <button type="button" className="btn btn-light watchbtn px-5 fw-bolder">
              Watches
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary1;
