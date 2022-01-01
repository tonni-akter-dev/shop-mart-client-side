import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Login from "../../Register/Login/Login";
import Register from "../../Register/Register";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
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

                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

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
