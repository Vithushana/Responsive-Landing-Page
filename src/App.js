import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Templates from './components/Templates';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Section = styled.section`
  padding: auto; /* Adjusted padding-top to 150px to account for fixed header */
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;

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
    <AppContainer>
      <div>
        <Header />
        <Features />
        <Pricing />
        <Templates />
        <Section id="resources">
        <ContactSection />
        <Footer />
        </Section>
      </div>
    </AppContainer>
  );
};

export default App;
