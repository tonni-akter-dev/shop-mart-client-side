import React from "react";
import "./DashboardPort.css";
import useAuth from './../../hook/useAuth';
const  DashboardPort = () => {
  const { user } = useAuth();
  return (
    <div className="dash_bg">
      <div>
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-lg-6">
              <h2
                className="logo text-bold reviews p-3"
                style={{ borderBottom: "2px solid skyblue" }}
              >
                Hi {user.displayName} !!!
              </h2>
              <h1>Welcome to our site</h1>
            </div>
            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPort;
