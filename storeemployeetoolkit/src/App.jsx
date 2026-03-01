import React from "react";
import {   Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShiftPage from "./pages/ShiftPage";
import CartPage from "./pages/CartPage";
import CreditCardSignup from "./pages/CreditCardPage";
import "./index.css";


export default function App() {
  return (
    <>
    <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clock" element={<ShiftPage />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/creditcard" element={<CreditCardSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </>
  );
}