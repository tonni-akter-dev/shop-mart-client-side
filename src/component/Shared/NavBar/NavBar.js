import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import "./NavBar.css";
const NavBar = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();
  let navigate = useNavigate();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password, navigate);
    e.preventDefault();
  };
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
              {/* pages */}
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to="/about">About us</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <NavLink to="/contact">Contact Us</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <NavLink to="/notfound">Not Found</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
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
                      <h5 class="modal-title mx-auto" id="exampleModalLabel">
                        Login
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      {/* login form */}
                      <form className="login-form" onSubmit={handleLoginSubmit}>
                        <h4>Login Form</h4>
                        <input
                          className="field"
                          required
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={handleOnchange}
                        />
                        <input
                          className="field"
                          required
                          placeholder="Your password"
                          type="password"
                          name="password"
                          onChange={handleOnchange}
                        />{" "}
                        <br />
                        <button className="btn btn-dark" type="submit">
                          Login
                        </button>{" "}
                        <br />
                        <NavLink
                          to="/register"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "bolder",
                            paddingLeft: "10px",
                          }}
                        >
                          New User? Please Register
                        </NavLink>
                      </form>
                    </div>
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
