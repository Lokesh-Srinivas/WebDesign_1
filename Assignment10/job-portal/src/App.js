import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import AdminRoute from './Components/AdminRoute';
//import JobListings from './pages/JobListings';
import Jobs from './pages/Jobs'; // Import the Jobs page component
import Contact from './pages/Contact';
import CompanyShowcase from './pages/CompanyShowcase';
import Login from './pages/Login';
import AddJob from './pages/AddJob';
import AdminEmployees from './pages/AdminEmployees';
import './index.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />

        {/* Protected Routes for Authenticated Users */}
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
          <Route path="jobs" element={<Jobs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="companies" element={<CompanyShowcase />} />
        </Route>

        {/* Admin-Only Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute isAuthenticated={isAuthenticated} role={role}>
              <Layout isAuthenticated={isAuthenticated} logout={logout} />
            </AdminRoute>
          }
        >
          <Route path="employees" element={<AdminEmployees />} />
          {/* Add more admin routes here */}
          <Route path="add-job" element={<AddJob />} /> {/* Add the AddJob route here */}

        </Route>

        {/* Catch-All Redirect */}
        <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
