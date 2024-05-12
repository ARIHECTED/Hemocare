import React, { useState } from "react";
// import "./Regstyle.css";
import { Link } from "react-router-dom";
import "./RegisterDonor.css";
import Navbar from "./Navbar";

export default function Register() {
  const [user, setUser] = useState({
    fullName: "",
    Email: "",
    Password: "",
    Address: "",
    Phone: "",
    Age: "",
    BloodGroup: "",
    LastDonation: "",
  });
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:3001/Register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Correct header
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("Donor Registration", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="Banner">Register As Donor</div>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Full Name</label>
          <input
            type="text"
            id="fname"
            name="fullName"
            value={user.fullName}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={user.Email}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="Address"
            value={user.Address}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            value={user.Phone}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="Age"
            value={user.Age}
            onChange={handleInput}
            required
          />
          <br />
          <br />

          <label htmlFor="bg">Blood Group</label>
          <select
            id="bg"
            name="bloodGroup"
            value={user.bloodGroup}
            onChange={handleInput}
            required
          >
            {/* <option selected>AB+</option> */}
            <option value="AB+">AB+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB-">AB-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
          </select>
          <br />
          <br />

          <label htmlFor="lastdon">Last Donation Date</label>
          <input
            type="date"
            id="lastdon"
            name="LastDonation"
            value={user.LastDonation}
            onChange={handleInput}
            required
          />
          <br />
          <br />
          
          <label htmlFor="medical">Medical History</label>
          <textarea
            id="medical"
            rows="5"
            placeholder="Previous Medical History"
            name="disease"
            value={user.disease}
            onChange={handleInput}
            //style={{ width: "86%", marginBottom: "20px", marginTop: "50px", border: 2px solid #000 }}
          ></textarea>
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to="/RegisterOrganization">
        <button id="regOrg">Register Organization</button>
      </Link>
    </div>
  );
}
