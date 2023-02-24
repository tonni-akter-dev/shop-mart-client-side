

import { Button } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ChatIcon from '@material-ui/icons/Chat';
import useAuth from "../../hook/useAuth";
import "./NavBar.css";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = ({ name, ...props }) => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <NavLink to='/'>
            <img className=" img-fluid" src="/logo.webp" alt="" />
          </NavLink>

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
                <Button sx={{ color: 'black' }}>Home</Button>

              </NavLink>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/about"
              >
                <Button sx={{ color: 'black' }}>About Us</Button>
              </NavLink>

              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/shop"
              >

                <Button sx={{ color: 'black' }}> Shop</Button>
              </NavLink>
              <Button>
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
                      <Button sx={{ color: 'black' }}>
                        <Button sx={{ color: 'black' }}>About</Button>
                      </Button>
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
                      <Button sx={{ color: 'black' }}> Contact us</Button>

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
                      <Button sx={{ color: 'black' }}>Blog</Button>

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
                      <Button sx={{ color: 'black' }}>Portfolio</Button>
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
              </Button>
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to="/dashboard"
              >
                <Button sx={{ color: 'black' }}>Dashboard</Button>
              </NavLink>

            </Nav>
            <Nav>
              <NavLink
                className="mt-2 "
                style={{ color: "black", marginRight: "20px" }}
                to="/"
              >
                <button className="search_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="fas fa-search"></i></button>

              </NavLink>
              {/* offcanvas */}

              {/* offcanvas */}
              {/* login */}
              <NavLink
                className="mt-2"
                style={{ color: "black" }}
                to="/"
              >
                <button className="search_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i className="fab fa-opencart"></i></button>
              </NavLink>


              {/* <NavLink
                className="mt-2"
                style={{ color: "black"}}
                to="/chat"
              >
                <Button size="small" sx={{ color: "black" }}><ChatIcon /></Button>
              </NavLink> */}
              {/* <NavLink to='/'><Button sx={{ color: 'black' }}>{user.displayName}</Button></NavLink> */}
              {
                user.email ? <Button sx={{ color: 'black' }} onClick={() => logOut(location, history)}>
                  <i className="fa fa-sign-out mt-2" aria-hidden="true"></i>
                </Button> :
                  <NavLink to='/Login' style={{
                    color: "black",
                    textDecoration: "none",
                    // marginRight: "20px" 
                    // margin: "10px",
                  }}><Button sx={{ color: 'black', textDecoration: "none" }}>Login</Button></NavLink>
              }
              {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel" className="search_text">Search Any Item</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="What are you looking for?" />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* cart offcanvas */}
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Total Cart(0)</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <small className="search_text">No products in the cart.</small>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

