import React from "react";
import "./Regstyle.css"; 
import Navbar from '../Components/Navbar';

export default function Register() {
  return (
    <div>
      <Navbar/>
    <div className="reg" id="register">
        <div className="rad row mb-3"> Register as Donor </div>
      <form>
        
        <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputNumber" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-10">
            <input
              type="Number"
              class="form-control"
              id="inputNumber"
              placeholder="Number"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Mail Id"
            />
          </div>
        </div>
        <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
                <input
              type="textarea"
              className="form-control"
              id="inputAddress"
              placeholder="Type Here"/>
            </div>
          </div>
          <div className="row mb-3 g-2">
          
            <label for="colFormLabel" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-3">
            <input type="number" className="form-control" placeholder="Age" />
          </div>
          
            <label for="colFormLabel" className="col-sm-2 col-form-label">
              Blood Group
            </label>
            <div className="col-sm-2">
            <select className="form-select" id="autoSizingSelect">
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
            </div>
          </div>
          <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label">
            Location
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                placeholder="District"
              />
            </div>
            <div className="col-sm-5">
              <input type="text" className="form-control" placeholder="State" />
            </div>
          </div>
        
        <div  className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label">
            Pin Code
            </label>
            <div className="col-sm-10">
                <input type="number" class="form-control" placeholder="Zip" aria-label="Zip"/> 
            </div>
        </div>

        <div className="row mb-4 g-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label">Last Donation</label>
            <div className="col-sm-5">
                <input type="text" class="form-control" placeholder="Month" aria-label="Month"/>
            </div>
            <div className="col-sm-5">
                <input type="text" class="form-control" placeholder="Year" aria-label="Year"/>
            </div>
        </div>
        <div className="row mb-5">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" htmlFor="gridCheck1">
          <i>I Agree that all the information given by me is true as of my knowledge.</i>
        </label>
      </div>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary">
    Sumbit
  </button>
      </form>
    </div>
    </div>
  );
}
