import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import ResetPasswordPage from './components/RestPage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.section`
  padding: 50px;
  background-color: #f9f9f9;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Features /> : <Navigate to="/login" />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
        
        {/* Show FAQ and Contact Sections only if logged in */}
        {isLoggedIn && (
          <>
            <Section id="faqSection">
              <FaqSection />
            </Section>
            <Section id="resources">
              <ContactSection />
            </Section>
            <Footer />
          </>
        )}
      </AppContainer>
    </Router>
  );
};

export default App;
