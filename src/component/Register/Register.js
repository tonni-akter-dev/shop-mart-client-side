import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import NavBar from "../Shared/NavBar/NavBar";
const Register = () => {
  const { registerUser, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your password did not match");
      return;
    }
    registerUser(loginData?.email, loginData?.password, loginData.name);
    e.preventDefault();
  };
  return (
    <div>
      <NavBar className="text-dark" />
      <Container style={{ marginTop: "100px" }}>
        <div className="container">
          <div container spacing={2}>
            <div className="pe-5">
              {!isLoading && (
                <form onSubmit={handleLoginSubmit} className="login-form mb-5">
                  <h4>Please Register</h4>
                  <input
                    className="field"
                    required
                    placeholder="Your Name"
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    className="field"
                    required
                    placeholder="Your Email"
                    sx={{ width: 1, m: 2 }}
                    id="standard-basic"
                    type="email"
                    name="email"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    className="field"
                    required
                    placeholder="Your Password"
                    id="standard-basic"
                    type="password"
                    label="Your password"
                    variant="standard"
                    name="password"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    className="field"
                    required
                    placeholder="Retype Your Password"
                    type="password"
                    label="Retype Your password"
                    name="password2"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <button type="submit" className="btn btn-dark">
                    Register
                  </button>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                      paddingLeft: "10px",
                    }}
                  >
                    {" "}
                    <br />
                    Already Register ? Please Login
                  </NavLink>
                </form>
              )}
              {/* {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created Successfully </Alert>
            )} */}
              {/* {error && <Alert severity="error">{error} </Alert>} */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Register;
