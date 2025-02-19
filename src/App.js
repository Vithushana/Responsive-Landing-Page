import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import RecyclingTips from './components/RecyclingTips';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage'; // Import the SignupPage component
import LoginPage from './components/LoginPage';

const Section = styled.section`
  padding: auto;
  background-color: #fff;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Features />
              <RecyclingTips />
              <Services />
              <Section id="resources">
                <ContactSection />
              </Section>
            </>
          } />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
