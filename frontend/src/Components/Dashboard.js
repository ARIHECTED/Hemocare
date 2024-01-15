import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Dashboard.css';
import Bell from './Assets/Bell.svg';
// import EditProfile from './EditProfile';


const Dashboard = () => {
    
  

  const [date, setDate] = useState(new Date());

  

    return (
        <div>
        <Navbar />
        <div className='MainContainer'>
            <div id='Left'>

                <div id='NameTag'>
                    <span id='Profile'>
                        <img alt=''></img>

                        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="366" viewBox="0 0 330 366" fill="none">
                            <g filter="url(#filter0_d_1_1021)">
                                <rect x="66" y="98" width="162" height="162" rx="10" fill="white" />
                            </g>
                            <rect x="74" y="107" width="144" height="144" rx="10" fill="#F4F4F4" />
                            <defs>
                                <filter id="filter0_d_1_1021" x="-36" y="0" width="366" height="366" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1021" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="50" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1021" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1021" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <h1 id='Name'>John Doe</h1>
                    </span>
                    <span id='EditProfile'>
                        <img src={Bell} alt=''></img>
                        <Link to='/EditProfile'>
                            <button id='editBtn'>
                                Edit Profile
                            </button>
                        </Link>
                    </span>
                </div>

                <div id='Bio'>
                    <p>About</p>
                    <table className='table'>
                        <tr>
                            <td>Full Name</td><td>John Doe</td>
                        </tr>
                        <tr>
                            <td>Email</td><td>johndoe@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td><td>Kolkata</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td><td>9672583606</td>
                        </tr>
                        <tr>
                            <td>Age</td><td>20</td>
                        </tr>
                        <tr>
                            <td>Blood Group</td><td>O +ve</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id='Right'>
                <div id='BackendData'>

                    <p>Donation History</p>
                    <table className='table2'>
                        <tr>
                            <th>Date</th><th>Blood Units</th>
                        </tr>
                        <tr>
                            <td>14 Dec 2022</td><td>120</td>
                        </tr>
                        <tr>
                            <td>15 Jun 2023</td><td>100</td>
                        </tr>
                        <tr>
                            <td>20 Dec 2023</td><td>90</td>
                       </tr>
                    </table>

                </div>

                <div id='Calendar'>
                    <h1>Calendar</h1>
                    {/* <Calendar onChange={setDate} value={date} /> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;