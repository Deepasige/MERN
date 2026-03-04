// src/App.jsx
import React from "react";
import Reducer from "./hooks/Reducer";
import User from "./components/User";
import Parent from "./components/Parent";
import State from "./hooks/State";
import Form from "./hooks/Form";
import Conditional from "./components/Conditional";
import { Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Reducer/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ProductDetails />} />
      </Routes>
      <h2>Other Components</h2>

      <Conditional />

      <Form />
      <State />
      <Parent />
      <User
        name="xyz"
        age={33}
        skills={["HTML", "CSS", "JS", "JAVA"]}
      />
    </>
     
  );
};

export default App;