import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/SignupForm';
import Profile_component from './Component/Profile_component';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
           
           <Route path = "/signup" element = {<SignupForm />}/>
          
           <Route path='/profile' element={<Profile_component />} />
        </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;
