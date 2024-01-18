import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Assets/Logo1.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
  
    return (
      <div className='Nav'>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={Logo} alt='Hemo'></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
              </li>
              <li className='nav-item'>
                <Link to='/AboutUs' className='nav-links'onClick={closeMobileMenu}> About Us </Link>
              </li>
              <li className='nav-item'>
                <Link to='/FindBlood' className='nav-links' onClick={closeMobileMenu}> Find Blood  </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Register' className='nav-links' onClick={closeMobileMenu}> Register Now  </Link>
              </li>
              <li className='nav-item'>
                <Link to='/SignIn' className='nav-links' onClick={closeMobileMenu}> Sign In  </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Dashboard' className='nav-links' onClick={closeMobileMenu}> Dashboard  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;