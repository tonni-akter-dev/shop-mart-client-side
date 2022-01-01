import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" expand="lg">
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
               <i class="fas fa-search"></i>
              </NavLink>
              <NavLink
                style={{ color: "black", marginRight: "20px" }}
                to="/login"
              >
                <i className="far fa-user"></i>
              </NavLink>
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
