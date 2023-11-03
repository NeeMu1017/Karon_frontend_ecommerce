import React from "react";
import "./login.scss";

function Login() {



  return (
    <div className="login">
      <div className="con1">
        <h2>Login </h2>
        <div className="singcon">
          {/*<div className="feild">
            
            <input type="text" placeholder="Name" id="" />
          </div>*/}
          <div className="feild">
            <input type="email" placeholder="email"  />
          </div>
          <div className="feild">
            <input type="password" placeholder="Password"  />
          </div>
          <div className="feild">
            <button>Log In</button>
          </div>
          <div className="feild">
          <a href="/signin">New User first Sign In  </a>
          </div>
        </div>
      </div>
      <div className="con2">
        <img src="./image/sing.jpg" alt="loadi" />
      </div>
    </div>
  );
}

export default Login;
