import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Components/Layout'; // Corrected import path for Layout
//import Navbar from './Components/Navbar'; // Corrected import path for Navbar
import ProtectedRoute from './Components/ProtectedRoute'; // Corrected import path for ProtectedRoute
import Home from './pages/Home';
import About from './pages/About';
import JobListings from './pages/JobListings';
import Contact from './pages/Contact';
import CompanyShowcase from './pages/CompanyShowcase';
import Login from './pages/Login';
import './index.css'; // Import the global CSS file

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        
        <Route
    path="/"
    element={
      <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Layout isAuthenticated={isAuthenticated} logout={logout} />
    </ProtectedRoute>
  }
>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<JobListings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="companies" element={<CompanyShowcase />} />
        </Route>
        
        <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
