import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { FaClipboardUser, FaUnlock } from "react-icons/fa6";

const SignIn = () => {
  return (
    <div className="upper">
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <FaClipboardUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaUnlock className="icon" />
          </div>
          {/* <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget Password?</a>
          </div> */}
          <button type="submit">Sign in</button>

          <div className="register-link">
            <p>
              Don't have account? Register Here
              <br />
              <Link to='/Register'>
              <a href="#">Donor </a>
              </Link>
               ||
              {/* <a href="#"> Hospitals</a> || */}
              <Link to='/RegisterOrganization'>
              <a href="#"> Organization</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
