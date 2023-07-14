import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
