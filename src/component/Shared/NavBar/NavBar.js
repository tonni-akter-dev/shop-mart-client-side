import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Login from "../../Register/Login/Login";
import Register from "../../Register/Register";
import useAuth from "../../hook/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const toggleChecked = () => setToggle((value) => !value);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
                to="/"
              >

                Shop
              </NavLink>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">
                  <NavLink
                    to="/about"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "10px",
                    }}
                  >
                    About us
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/contact">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "10px",
                    }}
                    to="/contact"
                  >
                    Contact us
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/blog">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "10px",
                    }}
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/blog">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "10px",
                    }}
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/error">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "10px",
                    }}
                    to="/error"
                  >
                    Not Found 404
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
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
                className="mt-2"
                style={{ color: "black", marginRight: "20px" }}
                to="/login"
              >
                <i className="fas fa-search"></i>
              </NavLink>

              {/* login */}
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="far fa-user"></i>
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
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
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body">
                      {/* Login */}
                      <div>
                        {!toggle ? <Login /> : <Register />}
                        <span className="text-2xl">
                          {" "}
                          {!toggle
                            ? "Are you New User? Please register"
                            : " Already Register Please login"}
                          <Checkbox
                            checked={toggle}
                            onChange={toggleChecked}
                            {...label}
                            defaultChecked
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                className="mt-2"
                style={{ color: "black", marginRight: "20px" }}
                to="/"
              >
                <i className="far fa-heart"></i>
              </NavLink>

              <NavLink
                className="mt-2"
                style={{ color: "black", marginRight: "20px" }}
                to="/"
              >
                <i className="fab fa-opencart"></i>
              </NavLink>

              {user.email && (
                <NavLink
                  className="mt-2"
                  onClick={logout}
                  style={{ color: "black", marginRight: "20px" }}
                  to="/"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
