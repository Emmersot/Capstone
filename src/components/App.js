import React from 'react';
import '.././App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import SignIn from './SignIn'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />  
        </Routes>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
