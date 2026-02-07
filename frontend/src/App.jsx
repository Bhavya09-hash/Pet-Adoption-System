import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';
import Services from './Components/Services/Services';
import AdminLogin from './Components/AdminPanel/AdminLogin';
import Pets from './Components/Pets/Pets';
import ProtectedRoute  from './Components/ProtectedRoute';
import Contact from './Components/Contact/Contact';

function App() {
  

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navbar />
            <Home />
            <Footer />
          </ProtectedRoute>
        }
      />
      <Route path="/services" element={
         <ProtectedRoute>
            <Navbar />
            <Services />
            <Footer />
          </ProtectedRoute>
      }/>
     
     <Route path="/pets" element={
         <ProtectedRoute>
            <Navbar />
            <Pets />
            <Footer />
          </ProtectedRoute>
      }/>
      <Route path="/contact" element={
         <ProtectedRoute>
            <Navbar />
            <Contact />
            <Footer />
          </ProtectedRoute>
      }/>

      <Route path="/auth" element={<Auth />} />

        <Route 
          path="/admin" 
          element={<AdminLogin />} 
        />
    </Routes>
  );
}

export default App
