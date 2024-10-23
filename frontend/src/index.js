import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./landing_page/support/Hero";
import SignUp from "./landing_page/signup/SignUp";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import SupportFile from "./landing_page/SupportFile";
import PricingPage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/about/ApoutPage";
import ProductPage from "./landing_page/products/ProductPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<SupportFile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
