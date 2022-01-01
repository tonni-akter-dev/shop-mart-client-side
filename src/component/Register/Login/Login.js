import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hook/useAuth';
const Login = () => {
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
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <h4>Login Form</h4>
                <input
                    className=" container-fluid"
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleOnchange}
                /> <br /><br />
                <input
                    className=" container-fluid"
                    required
                    placeholder="Your password"
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                />
                <br /><br />
                <button className="btn btn-dark container-fluid" type="submit">
                    Login
                </button>
                <br />

            </form>
        </div>
    );
};

export default Login;