import React from "react";
import "./Gallary1.css";
const Gallary1 = () => {
  return (
    <div>
      <section class="container mt-5">
        <div class="row">
          <div class="col-lg-5 col-sm-12 card border-0 ">
            <div class="over">
              <img
                class="sec51pic img-fluid"
                src="https://i.ibb.co/txfy15s/1.jpg"
                alt=""
              />
            </div>
            <button type="button" class="btn btn-light womenbtn px-5 fw-bolder">
              Women
            </button>
          </div>
          <div class="col-lg-3 col-sm-12 card border-0 overflow-hidden ">
            <img
              class="mb-4 pic over img-fluid"
              src="https://i.ibb.co/tKb4wgV/2.jpg"
              alt=""
            />
            <button type="button" class="btn btn-light bagbtn px-5 fw-bolder">
              Accessories
            </button>
            <img
              style={{ height: "335px" }}
              class="pic img-fluid mb-5"
              src="https://i.ibb.co/93fTC4X/3.jpg"
              alt=""
            />
            <button type="button" class="btn btn-light shoebtn px-5 fw-bolder">
              Footwear
            </button>
          </div>
          <div class="col-lg-4 col-sm-12 card border-0 overflow-hidden ">
            <img
              class="pic img-fluid"
              style={{ height: "650px" }}
              src="https://i.ibb.co/3WZyTW6/4.jpg"
              alt=""
            />
            <button type="button" class="btn btn-light watchbtn px-5 fw-bolder">
              Watches
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary1;
