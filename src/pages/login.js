import React, { useState } from "react";
import "./login.css";
import "../bootstrap.min.css";

const Login = () => {
  return (
    <div className="container text-center justify-content-center">
    <div className="row">
    <div className="card col d-flex justify-content-center loginCard">
      <div className="card-body">
        <form>
          <input type="text" className="form-control details" placeholder="Username" />
          <input
            type="password"
            className="form-control details"
            placeholder="Password"
          />
          <input
            type="submit"
            value="Login"
            className="btn float-right login_btn"
          />
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
        <a className="lnk" href="#">Sign Up</a>
          <a className="lnk" href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
