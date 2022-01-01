import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import "./About.css";
const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-6 col-sm-12 mb-3">
            <h3>Our Story</h3>
            <p>
              We have worked hand-in-hand with a large scale of customers all
              over the world accomplishing a wide range of industries and
              services for 10+ years. Each of our work represents our dedication
              to the quality. Please browse through our case studies to see the
              difference we can bring to your business. Our comprehensive
              experience is the key to give our Clients best services
            </p>
            <img src="/images/about-img-2.jpg.webp" alt="" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <img
              src="/images/about-img-1-570x364.jpg.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-12">
            <img
              src="/images/about-img-3-570x364.jpg.webp"
              className="img-fluid mb-5"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12 ps-5">
            <h3>Who we are ?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div class="elementor-widget-container">
                  <ul>
                    <li>Maecenas sed diam</li>
                    <li>Blandit sit amet non magna</li>
                    <li>Purus risus varius</li>
                    <li>Egestas sit amet lorem</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div class="elementor-widget-container">
                  <ul>
                    <li>Maecenas sed diam</li>
                    <li>Blandit sit amet non magna</li>
                    <li>Purus risus varius</li>
                    <li>Egestas sit amet lorem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section3 */}
     
<div className="container">
<div className="row">
        <div className="card-wrapper col-lg-4">
          <div className="card card3 profile-two">
            <div className="card-image profile-img--two">
              <img
                src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/team-2.jpg"
                alt="profile two"
              />
            </div>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details jane">
              <h2>Parks Missie </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper col-lg-4">
          <div className="card card3 profile-two">
            <div className="card-image profile-img--two">
              <img
                src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/team-2.jpg"
                alt="profile two"
              />
            </div>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details jane">
              <h2>Parks Missie </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper col-lg-4">
          <div className="card card3 profile-two">
            <div className="card-image profile-img--two">
              <img
                src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/team-2.jpg"
                alt="profile two"
              />
            </div>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details jane">
              <h2>Parks Missie </h2>
            </div>
          </div>
        </div>
      </div>
</div>

    </div>
  );
};

export default About;
