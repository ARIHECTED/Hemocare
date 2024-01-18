import './Home.css';
//import React, { useState } from 'react';
import heartimage from './Assets/heart.png';
import logo from './Assets/Logo.svg';
import submit from './Assets/Submit_btn.svg'
import social from './Assets/Social_Icons.svg'
import './Navbar.css'
import Navbar from '../Components/Navbar';
import ContactUs from '../Components/ContactUs';
import { Link } from 'react-router-dom';

// const EmailRegistrationForm = () => {
//   const [email, setEmail] = useState('');

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);~
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the registration logic here (e.g., send the email to a server, etc.)
//     console.log(`Email submitted: ${email}`);
//   };

function Home() {

  // const scrollToElement = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }


  
  return (
    <div>
      <Navbar />
      <div className="home">
        <svg xmlns="http://www.w3.org/2000/svg" width="946" height="968" viewBox="0 0 946 968" fill="none">
          <g filter="url(#filter0_d_93_102)">
            <path d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z" fill="url(#paint0_linear_93_102)" />
          </g>
          <defs>
            <filter id="filter0_d_93_102" x="-488" y="-53" width="1433.96" height="1021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_102" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_102" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_93_102" x1="-169.5" y1="26.9997" x2="330.5" y2="874.999" gradientUnits="userSpaceOnUse">
              <stop offset="0.221679" stop-color="#B32346" />
              <stop offset="0.66922" stop-color="#6A0B37" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className='Head'>
          Save Life Donate Blood
        </h1>
        <p className='HeadPara'>
          Blood donation is a selfless act that directly saves lives, offering a lifeline to patients facing surgeries, trauma, and medical conditions. By contributing a small amount of time and blood, donors become a hero in someone's life.Each donation can make a significant impact, emphasizing the profound connection between individual generosity and the preservation of life.
        
        </p>
        <Link to='/FindBlood'>
        <button className='getBldBtn'>
          Get Blood Now
        </button>
        </Link>
        <h2 className='MissHead'>
          Our Mission
        </h2>
        <p className='MissPara'>
          Our mission is to create a seamless and compassionate platform that connects blood donors with organizations in need, fostering a strong community dedicated to saving lives. Our goal is to streamline the blood donation process, ensuring efficient and timely matches while promoting transparency and trust. Through technological innovation and community engagement, we aim to increase blood donation participation, raise awareness about the importance of blood donation, and ultimately make a significant, positive impact on the well-being of individuals and communities. HemoCare strives to be a lifesaving bridge, bringing together those who can give with those who urgently require this life-sustaining resource.
        
        </p>
        <h3 className='Collab'>
          Our Collaborators
        </h3>
        <div className='CollabDivCont'>
          <div className='CollabDiv' id='d1'><p>NCC</p></div>
          <div className='CollabDiv' id='d2'><p>NSS</p></div>
          <div className='CollabDiv' id='d3'><p>YMCA</p></div>
        </div>
        <h3 className='HTGB'>
          How does the process work?
        </h3>
        <div className='Steps'>

          <div id="slide-in-from-left">
          <div className='Step' id='step1'>
            <h1>1</h1>
          </div>
          <div className='Steptext'>
            Begin by registering as a donor or an organization on the HemoCare platform, providing necessary details and preferences.
          </div>
          </div>

          <div id="slide-in-from-right">
          <div className='Step' id='step2'><h1>2</h1></div>
          <div className='Steptext' id='steptext2'>
            HemoCare employs a sophisticated matching algorithm that analyzes donor profiles and specific blood requests, ensuring accurate and efficient matches based on various criteria.
          </div>
          </div>

          <div id="slide-in-from-left">
          <div className='Step' id='step3'><h1>3</h1></div>
          <div className='Steptext'>
            The donor and organization can then coordinate and schedule a convenient appointment for the blood donation process, facilitated through the HemoCare platform.
          </div>
          </div>
        </div>
        <div className='imgContainer'>
          <img id='heart' src={heartimage} alt=''></img>
        </div>
        <footer className='foot'>
          <div id='footfrstdiv'>
            <img id='logo' src={logo} alt=''></img>
            <span>
              Ready to donate?
              <button>Donate</button>
            </span>
          </div>
          <div id='line'></div>

          <div id='footscnddiv'>
            <div id='subscribe'>
              <p>Subscribe to our newsletter</p>
              <form id='emailform'>
                <input id='emailinput' type="email" placeholder='Email Address' />
                {/* <button id='emailbtn' type="submit"> */}
                <img id='emailbtnimg' src={submit} alt=''></img>
                {/* </button> */}
              </form>
            </div>
            <div id='services'>
              <ul>
                <li>Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
                <li>Offline</li>
              </ul>
            </div>
            <div id='about'>
              <ul>
                <li>About</li>
                <li><Link to="/AboutUs#our-story">Our Story</Link></li>
                <li><Link to="/AboutUs">Benefits</Link></li>
                <li><Link to="/AboutUs">Team</Link></li>
                <li><Link to="/AboutUs">Careers</Link></li>
              </ul>
            </div>
            <div id='help'>
              <ul>
                <li>Help</li>
                <li>FAQs</li>
                <Link to='/contact-us'>
                <li>Contact Us</li></Link>
              </ul>
            </div>
          </div>

          <div id='footthrddiv'>
            <span>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </span>
            <span>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src={social} alt=''></img></a>
              {/* <a href="https://google.com" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> */}
            </span>
          </div>
          © 2021 SaveLifeDonateBlood. All rights reserved | Design
        </footer>
      </div>
    </div>
  );
}

export default Home;
