import React, { useState } from 'react'
import Login from './components/login/Login';
import Kontakt from './components/pages/Kontakt';
import Register from './components/register/Register';
import Unauthorized from './components/login/Unauthorized';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/frontPage/Navbar';
import './components/frontPage/navBar/Navbar.css';
import HomePage from './components/pages/HomePage';
import MyPage from './components/pages/MyPage';
import Bokningar from './components/booking/Bokningar'
import NoPage from "./components/pages/NoPage";
import Services from './components/booking/Services';
import Logout from './components/login/Logout';
import Boka from './components/booking/Boka';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)


  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<HomePage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
          <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
          <Route path='register' element={<Register />} />
          <Route path='logout' element={<Logout />} />
          <Route path='mypage' element={<MyPage loggedInUser={loggedInUser}/>} />
          <Route path='kontakt' element={<Kontakt />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path='bokning' element={<Boka loggedInUser={loggedInUser}/>} />
          <Route path='Bokningar' element={<Bokningar />} />
          <Route path='services' element={<Services />} />
          <Route path='logout' element={<Logout loggedInUser={loggedInUser}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
      </BrowserRouter>
  );
  
}

export default App;
