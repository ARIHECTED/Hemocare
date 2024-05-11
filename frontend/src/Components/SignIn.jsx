import React, {useState} from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { FaClipboardUser, FaUnlock } from "react-icons/fa6";
import axios from 'axios';

const SignIn = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });
 const handleInput =(e) => {
  // console.log(e);
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]: value,
  });
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="upper">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" name="Email" placeholder="Email" value={user.Email} onChange={handleInput} required />
            <FaClipboardUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name="Password" placeholder="Password" value={user.Password} onChange={handleInput} required />
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
