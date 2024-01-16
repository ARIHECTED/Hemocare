import React, { useEffect, useState } from 'react';


const Hospital = () => {


    const [data, setData] = useState([]);
    const targetBloodType = 'A+';


    useEffect(() => {
        // Replace 'your-backend-api-url' with your actual backend API endpoint
        fetch('your-backend-api-url')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredData = data.filter(item => item.bloodType === targetBloodType);

    return (
        <div>
            <h1>Hospital Data</h1>
            {filteredData.length === 0 ? (
                <p>No data available for the specified blood type.</p>
            ) : (
                filteredData.map(item => (
                    <div key={item.id}>
                        {/* Display individual data items here */}
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.bloodType}</p>
                        {/* <img></img> */}
                        {/* Add more properties as needed */}
                    </div>
                ))
            )}
        </div>
    );
};

export default Hospital;