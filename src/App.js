import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import { useState } from 'react';


function App() {
  const [user,setUser]=useState({})
  const [login,setLogin]=useState(false)
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home user={user} login={login} />} />
            <Route exact path="/login"  element={<Login setUser={setUser} setLogin={setLogin} />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder"  element={<MyOrder setUser={setUser} user={user} />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
