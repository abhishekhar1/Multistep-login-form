import React from 'react';
import Firstpage from './Components/Firstpage';
import ProfilePage from './Components/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profileinfo from './Components/Profileinfo';
import Profileverify from './Components/Profileverify';
const App = () => {
  return (
    <>
      
      <Router>
        
        <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profileinfo" element={<Profileinfo/>}/>
        <Route path="/profileverify" element={<Profileverify/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
