import React from "react";
// import "./Regstyle.css"; 
import { Link } from "react-router-dom";
import './RegisterDonor.css';
import Navbar from './Navbar';


export default function Register() {
  return (
    <div>
      <Navbar />
      <div className='Banner'>
        Register As Donor
      </div>
      <div className='Form'>
        <form>
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullName" required /><br /><br />

          <label for="email">Email</label>
          <input type="email" id="email" name="Email" required /><br /><br />

          <label for="add">Address</label>
          <input type="text" id="address" name="Address" required /><br /><br />

          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="Phone"required /><br /><br />

          <label for="age">Age</label>
          <input type="number" id="age" name="Age" required /><br /><br />

          <label for="bg">Blood Group</label>
          <select id="bldgrp" required>
            <option selected>AB+</option>
            <option value="AB+">AB+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB-">AB-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
          </select>
          <br /><br />

          <label for="lastdon">Last Donation Date</label>
          <input type="date" id="lastdon" name="LastDonation" required /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to='/RegisterOrganization'>
        <button id='regOrg'>
          Register Organization
        </button>
      </Link>
    </div>
  );
}
