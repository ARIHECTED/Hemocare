import React, { useState } from "react";
import "./RegisterDonor.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";


export default function Register() {
  const [Ruser, RsetUser] = useState({
    hospital_name: "",
    Email: "",
    Password: "",
    Address: "",
    Phone: "",
  });
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    RsetUser({
      ...Ruser,
      [name]: value,
    });
  };
  // handle submission form
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(Ruser);
    try {
      
      const response = await fetch(`http://localhost:3001/RegisterOrganization`, {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(Ruser),
      });
      console.log(response);
    } catch (error) {
      console.log("OrganisationRegister", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='Banner'>
        Register As Organization
      </div>
      <div className='Form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Organization Name</label>
          <input type="text" id="fname" name="hospital_name" value={Ruser.hospital_name} onChange={handleInput} required /><br /><br />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="Email" value={Ruser.Email} onChange={handleInput} required /><br /><br />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="Password" value={Ruser.Password} onChange={handleInput} required /><br /><br />

          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="Address" value={Ruser.Address} onChange={handleInput} required /><br /><br />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="Phone" value={Ruser.Phone} onChange={handleInput}  required /><br /><br />

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
