import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './FindBlood.css';
import Navbar from './Navbar';

const FindBlood = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [State, setState] = useState('');
  // const [ UnitBlood, setUnitBlood] = useState('');
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Current Location:', position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async () => {
    const data = { bloodGroup, State };

    if (!bloodGroup || !State ) {
      console.error('Please fill in all required fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/recipient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Recipient details submitted successfully.');
        navigate("/DonorList");
      } else {
        console.error('Error submitting recipient details:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting recipient details:', error);
    }
  };


  return (
    <div>
      <Navbar />
      <div id='Container'>
        <div id='design'></div>

        <div id='recipient'>
          <h1>Recipient Details</h1>
          <Row className="justify-content-md-center mt-5">
            <Col md={6}>
              <Form>
                <Form.Group controlId="bloodGroup">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  >
                    <option value="" disabled>Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </Form.Select>
                </Form.Group>
                <br></br><br></br>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label><br></br>
                  <Button variant="primary" onClick={getCurrentLocation}>
                    Use Current Location
                  </Button>
                </Form.Group>
                {/* <Form.Group controlId="UnitBlood">
                  <Form.Label>Unit Blood</Form.Label>
                  <Form.Control
                    type="text"
                    value={UnitBlood}
                    onChange={(e) => setUnitBlood(e.target.value)}
                  />
                </Form.Group> */}



                <br></br> <br></br>

                <Form.Group controlId="State">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="" disabled>Select state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </Form.Select>
                </Form.Group><br></br>



                <br></br>
                <Button variant="primary" onClick={handleSubmit} >
                  Proceed
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FindBlood;
