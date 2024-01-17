import React from "react";
import "./RegisterDonor.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";


export default function Register() {
  return (
    <div>
      <Navbar />
      <div className='Banner'>
        Register As Organization
      </div>
      <div className='Form'>
        <form>
          <label for="fname">Organization Name</label>
          <input type="text" id="fname" name="fullName" required /><br /><br />

          <label for="email">Email</label>
          <input type="email" id="email" name="Email" required /><br /><br />

          <label for="password">Password</label>
          <input type="text" id="password" name="Password" required /><br /><br />

          <label for="add">Address</label>
          <input type="text" id="address" name="Address" required /><br /><br />

          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="Phone"  required /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to='/Register'>
        <button id='regOrg'>
          Register Donor
        </button>
      </Link>
    </div>
  );
}
