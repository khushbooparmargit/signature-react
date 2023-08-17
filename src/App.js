import React from "react";
import Header from "./Header.js";
// import Eventttt from "./Eventttt.js";
import './App.css';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Contact from "./pages/Contact.js";
import Register from "./pages/Register.js";
import Product from "./pages/Product.js";
import Login from "./pages/Login.js";
import UserList from "./pages/UserList.js"
import { Route, Routes } from "react-router-dom";

  


function App() {
  return (
    // <React.Fragment>
    <div className="App">

    <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/UserList" element={<UserList />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
  
    
      </div>
    
    
    // </React.Fragment>
  );
}

export default App;
