import React from "react";
import "./RegOrgstyle.css"; 


export default function Register() {
  return (
    <div>
    
    <div className="reg" id="register">
    
        <div className="rad row mb-3"><br/> Register as Organisation <br/></div>
      <form>
        
        <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-2 col-form-label" >
            Organization Name: 
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
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
            <textarea name="Text1" cols="60" rows="5" placeholder="Type here"></textarea>
            </div>
          </div>
          <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-2 col-form-label">
            Head of Organization: 
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              aria-label="Full name"
            />
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
