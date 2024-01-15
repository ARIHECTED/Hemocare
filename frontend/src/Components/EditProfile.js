import React from 'react';
import './EditProfile.css';
import Navbar from './Navbar';

const EditProfile = () => {
    return (
      <div>
        <Navbar />
        <div className='Banner'>
          Edit Profile
        </div>
        <div className='Form'>
          <form>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="fullName" /><br /><br />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" /><br /><br />

            <label htmlFor="add">Address</label>
            <input type="text" id="address" name="Address" /><br /><br />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="Phone" pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}" /><br /><br />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="Age" /><br /><br />

            <label htmlFor="bg">Blood Group</label>
            <input type="text" id="bg" name="bldgrp" /><br /><br />

            <label htmlFor="lastdon">Last Donation Date</label>
            <input type="date" id="lastdon" name="LastDonation" /><br /><br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  };

export default EditProfile;
