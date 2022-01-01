import React, { useState } from "react";
import useAuth from "../hook/useAuth";

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
      <div>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit} className="login-form mb-5">
            <h4>Please Register</h4>
            <input
              className=" container-fluid"
              required
              placeholder="Your Name"
              id="standard-basic"
              label="Your Name"
              name="name"
              onChange={handleOnchange}
            />{" "}
            <br /><br />
            <input
              className=" container-fluid"
              required
              placeholder="Your Email"
              sx={{ width: 1, m: 2 }}
              id="standard-basic"
              type="email"
              name="email"
              onChange={handleOnchange}
            />{" "}
            <br /><br />
            <input
              className=" container-fluid"
              required
              placeholder="Your Password"
              id="standard-basic"
              type="password"
              label="Your password"
              variant="standard"
              name="password"
              onChange={handleOnchange}
            />{" "}
            <br /><br />
            <input
              className=" container-fluid"
              required
              placeholder="Retype Your Password"
              type="password"
              label="Retype Your password"
              name="password2"
              onChange={handleOnchange}
            />{" "}
            <br /><br />
            <button type="submit" className="btn btn-dark container-fluid">
              Register
            </button>
          </form>
        )}
        {/* {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created Successfully </Alert>
            )} */}
        {/* {error && <Alert severity="error">{error} </Alert>} */}
      </div>
    </div>
  );
};
export default Register;
