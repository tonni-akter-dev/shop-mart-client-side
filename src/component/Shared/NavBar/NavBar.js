import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.webp" style={{ height: "50px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/shop"
              >
                Men
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/features"
              >
                Women
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/features"
              >
                Shop
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/"
              >
                Pages
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/"
              >
                Blog
              </NavLink>
              {/* <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/about"
              >
                ABOUT US
              </NavLink> */}
              {/* <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/dashboard"
              >
                DASHBOARD
              </NavLink> */}
            </Nav>
            <Nav>
              <NavLink
                style={{ color: "black", marginRight: "20px" }}
                to="/login"
              >
                <i className="fas fa-search"></i>
              </NavLink>

              {/* login */}
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="far fa-user"></i>
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink style={{ color: "black", marginRight: "20px" }} to="/">
                <i className="far fa-heart"></i>
              </NavLink>

              <NavLink style={{ color: "black", marginRight: "20px" }} to="/">
                <i className="fab fa-opencart"></i>
              </NavLink>

              {/* <NavLink style={{ color: "black", marginRight: "20px" }} to="/">
                <i className="fas fa-sign-out-alt"></i>
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
