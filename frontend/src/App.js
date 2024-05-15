import React from 'react';
import Home from './Components/Home'
import FindBlood from './Components/FindBlood';
import Register from './Components/RegisterDonor';
import RegisterOrganization from './Components/RegisterOrganization';
import Dashboard from './Components/Dashboard';
import EditProfile from './Components/EditProfile';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
import ContactUs from './Components/ContactUs';
import DonorList from './Components/donorList';
import { Error } from './Components/Error';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
      {/* <Navbar/> */}
        <div>
          <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route exact path="/Home" element={<Home/> } />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/FindBlood" element={<FindBlood/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path='/RegisterOrganization' element={<RegisterOrganization/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/EditProfile' element={<EditProfile/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/DonorList' element={<DonorList/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
