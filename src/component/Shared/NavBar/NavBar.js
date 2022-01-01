import React, { useState } from "react";
<<<<<<< HEAD
import { Container, Nav, Navbar } from "react-bootstrap";
=======
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
<<<<<<< HEAD
>>>>>>> 93ac5b1f317763dceeab77b1ea8d7b754b87e0ea
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import "./NavBar.css";
=======
import { NavLink } from "react-router-dom";
import Login from "../../Register/Login/Login";
import Register from "../../Register/Register";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
>>>>>>> rukon
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleChecked = () => setToggle(value => !value);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
<<<<<<< HEAD
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
=======

                    <div class="modal-body">
                      {/* Login */}
                      <div>
                        {!toggle ? <Login /> : <Register />}
                        <span className='text-2xl'> {!toggle ? "Are you New User? Please register" : ' Already Register Please login'}
                          <Checkbox
                            checked={toggle}
                            onChange={toggleChecked}
                            {...label}
                            defaultChecked
                            sx={{
                              color: pink[800],
                              '&.Mui-checked': {
                                color: pink[600],
                              },
                            }}
                          />
                        </span>
                      </div>
>>>>>>> rukon
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
