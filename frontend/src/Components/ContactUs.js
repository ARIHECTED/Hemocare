import React from "react";
import './ContactUs.css';
import { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add your logic to send the form data to the server or perform other actions
  };

  return (
    <div className="maindiv">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h4>Phone</h4>
          <p>123-456-7890</p>
        </div>
        <div className="col-md-4">
          <h4>Email</h4>
          <p>hemocare108@blood.com</p>
        </div>
        <div className="col-md-4">
          <h4>Address</h4>
          <p>Baddi, HP, India</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Get In Touch</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                style={{ width: "100%" }}  
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                style={{ width: "100%" }} 
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                style={{ width: "100%", marginBottom:"20px" }}  
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="textArea form-control" 
                rows="5"
                placeholder="Your Message Here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: "100%", marginBottom:"20px"}}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ContactUsForm;
