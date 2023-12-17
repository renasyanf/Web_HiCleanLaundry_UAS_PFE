import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Registrasion from "./Pages/Home/Registrasion";
import Login from "./Pages/Home/Login";
import ForgotPassword from "./Pages/Home/ForgotPassword";
import Riwayat from "./Pages/riwayat/User";
import Services from "./Pages/Home/Services";
import Contactus from "./Pages/Home/Contactus";
import About from "./Pages/Home/About";
import AddUser from "./Pages/riwayat/AddUser";
import Edit from "./Pages/riwayat/EditUser";
import Sidebar from "./Pages/Home/Sidebar";
import Cart from "./Pages/Home/Cart";
import FormReservasi from "./Pages/Home/FormReservasi";
import Proses from "./Pages/Home/Proses";
import Harga from "./Pages/Home/Harga";

function App() {
  return (
    <div>
       <Router>
    <div>
      {/* Navbar should probably be outside of the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrasion" element={<Registrasion />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Riwayat" element={<Riwayat />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/EditUser" element={<Edit/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/FormReservasi" element={<FormReservasi/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Proses" element={<Proses/>} />
        <Route path="/Harga" element={<Harga/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  </Router>,
    </div>
  )
};
export default App;
