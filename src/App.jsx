import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Checkbox from "./components/Checkbox";
import Loader from "./components/Loader";
import JuniorCouncil from "./pages/JuniorCouncil";
import SeniorCouncil from "./pages/SeniorCouncil";
import SummaryPage from './components/FormSummary';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/login'
import Admin from './pages/adminDasboard'
import User from './pages/userDashboard'

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1a2639;
  color: #fefae0;
  min-height: 100vh;

  /* 🔲 Grid effect */
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;

  /* 📱 Fix mobile background bug */
  @media (max-width: 768px) {
    background-color: #1a2639;
  }
`;

// 🧱 Wrapper for internal content
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 7700);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <Router>
      <Container>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/junior" element={<JuniorCouncil />} />
            <Route path="/Checkbox" element={<Checkbox />} />
            <Route path="/senior" element={<SeniorCouncil />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<User />} />
          </Routes>
        </ContentWrapper>
      </Container>
    </Router>
  );
}

export default App;
