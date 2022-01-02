import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error-bg">
      <div className="text-center" >
        <h1 class="text-404">404</h1>
        <h3 class="page-title">Oops... looks like you got lost</h3>
       <div className="text-center"> <h6 style={{borderBottom:"1px solid white",width:"450px",marginLeft:"450px"}}>GET BACK HOME BY CLICKING THE BUTTON</h6></div>
        <div class="btn-go-home">
          <Link style={{backgroundColor:"white",marginTop:"8px"}} class="btn btn-white go-home" to="/">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
