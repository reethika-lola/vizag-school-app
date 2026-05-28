import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import SchoolListing from './pages/SchoolListing';
import SchoolDetail from './pages/SchoolDetail';
import Compare from './pages/Compare';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

// Layout
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Onboarding Flow */}
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />

        {/* Main App with Tab Navigation */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/schools" element={<SchoolListing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Standalone Pages */}
        <Route path="/school/:id" element={<SchoolDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/admin" element={<Admin />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
