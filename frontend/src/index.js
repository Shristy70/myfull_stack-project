import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./landing_page/support/Hero";
import SignUp from "./landing_page/signup/SignUp";
import About from "./landing_page/about/Hero";
import Product from "./landing_page/products/Hero";
import Pricing from "./landing_page/pricing/Hero";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
