import React from "react";
const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row" style={{ backgroundColor: "#EEEEEE" }}>
              <div
                className="col-lg-6"
                style={{ margin: "auto", paddingLeft: "170px" }}
              >
                <p>Summer 2022</p>
                <h1>New Arrival Collection</h1>
                <button className="btn btn-dark">Explore Now</button>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://i.ibb.co/5Wvr7H4/Slider1-1512x.jpg"
                  className="d-block w-100"
                  style={{ height: "500px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row" style={{ backgroundColor: "#E2D8D6" }}>
              <div className="col-lg-6">
                <img
                  src="https://i.ibb.co/1dS95r7/Slider2-1512x.jpg"
                  className="d-block w-100"
                  style={{ height: "500px" }}
                  alt="..."
                />
              </div>
              <div
                className="col-lg-6"
                style={{
                  margin: "auto",
                  textAlign: "right",
                  paddingRight: "140px",
                }}
              >
                <p>Summer 2022</p>
                <h1>New Arrival Collection</h1>
                <button className="btn btn-dark">Explore Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row" style={{ backgroundColor: "#ECF4F6" }}>
              <div
                className="col-lg-6"
                style={{ margin: "auto", paddingLeft: "170px" }}
              >
                <p>Summer 2022</p>
                <h1>New Arrival Collection</h1>
                <button className="btn btn-dark">Explore Now</button>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://i.ibb.co/nkpwTKx/Slider3-1512x.jpg"
                  className="d-block w-100"
                  style={{ height: "500px" }}
                  alt="..."
                />
              </div>
            </div>
          </div >
        </div >
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >
    </div >
  );
};

export default Banner;
