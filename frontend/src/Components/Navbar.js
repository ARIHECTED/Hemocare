import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              HemoCare
              {/* <i class='fab fa-typo3' /> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
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
            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;