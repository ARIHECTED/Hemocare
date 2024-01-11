import React from 'react';
import Home from './Components/Home'
import FindBlood from './Components/FindBlood';
import Register from './Components/Register';
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
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
