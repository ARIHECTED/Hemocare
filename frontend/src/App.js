import React from 'react';
import Home from './Components/Home'
import FindBlood from './Components/FindBlood';
import Register from './Components/RegisterDonor';
import RegisterOrganization from './Components/RegisterOrganization';
import Dashboard from './Components/Dashboard';
import EditProfile from './Components/EditProfile';
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
          {/* <Route path="/AboutUs" element={<AboutUs/>} /> */}
          <Route path="/FindBlood" element={<FindBlood/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path='/RegisterOrganization' element={<RegisterOrganization/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/EditProfile' element={<EditProfile/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
