import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ".//donorList.css";
const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const bloodGroup = searchParams.get('bloodGroup');
    const state = searchParams.get('state');

    // Fetch donors based on bloodGroup and state
    fetchDonors(bloodGroup, state);
  }, [location.search]);

  const fetchDonors = async (bloodGroup, state) => {
    try {
      const response = await fetch(`http://localhost:3000/api/donors?bloodGroup=${bloodGroup}&state=${state}t`);
      if (response.ok) {
        const data = await response.json();
        setDonors(data);
      } else {
        console.error('Failed to fetch donors:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  return (
    <div>
      <h1>Donor List</h1>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            {/* Display donor information */}
            {donor.fullName}, {donor.bloodGroup}, {donor.State}, {donor.LastDonation}, {donor.disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
