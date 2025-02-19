import React, { useState } from 'react';
import styled from 'styled-components';
import FaqSection from './FaqSection';

const Services = () => {
  const [isResidential, setIsResidential] = useState(true);

  return (
    <Section id="services">
      <Container>
        <Header>
          <HeaderContent>
            <div>
              <h1>SERVICES WE OFFER</h1>
              <Title>Comprehensive Garbage Management <br /> for All Needs</Title>
              <Description>
                We provide tailored waste management solutions for residential, <br />
                commercial, and industrial needs. Focused on sustainability and <br />
                efficiency, our services help keep your environment clean.
              </Description>
            </div>
            <Toggle>
              <span1>Residential</span1>
              <Switch>
                <Input
                  type="checkbox"
                  checked={isResidential}
                  onChange={() => setIsResidential(!isResidential)}
                />
                <Slider />
              </Switch>
              <span>Commercial</span>
            </Toggle>
          </HeaderContent>
        </Header>
        <ServiceTiers>
          <ServiceCard>
            <div style={{ padding: '1.5rem' }}>
              <ServiceHeader>BASIC WASTE COLLECTION</ServiceHeader>
              <ServiceDetails>
                Reliable weekly waste pickup for households. Ideal for maintaining <br />
                a clean and healthy environment.
              </ServiceDetails>
              <ServiceList>
                <ServiceFeature>Regular garbage collection</ServiceFeature>
                <ServiceFeature>Recyclables sorting</ServiceFeature>
                <ServiceFeatureDisabled>Composting solutions</ServiceFeatureDisabled>
                <ServiceFeatureDisabled>Special waste handling</ServiceFeatureDisabled>
                <ServiceFeatureDisabled>24/7 support</ServiceFeatureDisabled>
              </ServiceList>
            </div>
          </ServiceCard>
          <ServiceCardHighlighted>
            <ServiceHeader>
              <HighlightBadge>Recommended</HighlightBadge>
              PREMIUM MANAGEMENT
            </ServiceHeader>
            <div style={{ padding: '1.5rem' }}>
              <ServiceDetails>
                Comprehensive waste management for businesses and industries, <br />
                focusing on eco-friendly disposal methods.
              </ServiceDetails>
              <ServiceList>
                <ServiceFeature>Regular garbage collection</ServiceFeature>
                <ServiceFeature>Recyclables sorting</ServiceFeature>
                <ServiceFeature>Composting solutions</ServiceFeature>
                <ServiceFeature>Special waste handling</ServiceFeature>
                <ServiceFeature>24/7 support</ServiceFeature>
              </ServiceList>
            </div>
          </ServiceCardHighlighted>
        </ServiceTiers>
      </Container>
      <FaqSection />
    </Section>
  );
};

export default Services;

// Styled components (with media queries)
const Section = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    color: #34a853;
    font-size: 18px;
    margin-left: 50px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
  text-align: left;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #6b7280;
  margin-bottom: 2rem;
  text-align: left;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 150px;
  font-weight: bold;
  
  span {
    font-size: 24px;
    color: #34a853;
  }

  span1 {
    font-size: 18px;
    color: #9c9c9e;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1rem;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 25px;
  margin: 0 1rem;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #34a853;
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const ServiceTiers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  text-align: center;
  width: 350px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
`;

const ServiceCardHighlighted = styled.div`
  border: 3px solid #34a853;
  border-radius: 0.5rem;
  text-align: center;
  width: 350px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
`;

const ServiceHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #34a853;
  margin-bottom: 1rem;
`;

const HighlightBadge = styled.div`
  background-color: #34a853;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const ServiceDetails = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  color: black;
  margin: 0.5rem 0;
  font-size: 16px;

  &::before {
    content: '✓ ';
    color: #34a853;
    font-weight: bold;
  }
`;

const ServiceFeatureDisabled = styled.li`
  color: #aaa;
  margin: 0.5rem 0;
  font-size: 16px;
  text-decoration: line-through;

  &::before {
    content: '✗ ';
    color: #aaa;
    font-weight: bold;
  }
`;
