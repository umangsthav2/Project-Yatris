import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DestinationPage from './pages/DestinationPage.jsx';
import GuideServicePage from './pages/GuideServicePage.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import DarkModeToggle from './components/DarkModeToggle';  // Dark mode toggle component
import ThemeContextProvider from './context/ThemeContext';  // Import the theme provider

const App = () => {
  const location = useLocation();

  // Check if the current route is Signin or Signup
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <ThemeContextProvider>
      <div>
        {/* Conditionally render Header and Sidebar if not on Auth pages */}
        {!isAuthPage && (
          <>
            <Header />
            <Sidebar />
            <DarkModeToggle /> {/* Dark mode toggle on all pages */}
          </>
        )}

        <main>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/guide-service" element={<GuideServicePage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
