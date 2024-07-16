import React, { useState } from 'react';
import styled from 'styled-components';
import FaqSection from './FaqSection';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Section id="pricing">
      <Container>
        <Header>
          <HeaderContent>
            <div>
              <h1>PRICING & PLANS</h1>
              <Title>Perfect Balance of <br /> Features & Affordability</Title>
              <Description>
                Feasto simplifies creating a stunning, professional web store with its <br /> user-friendly templates and quick setup. Our powerful features ensure a <br /> seamless experience.
              </Description>
            </div>
            <Toggle>
              <span1>Monthly</span1>
              <Switch>
                <Input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                <Slider />
              </Switch>
              <span>Annually</span>
            </Toggle>
          </HeaderContent>
        </Header>
        <Plans>
          <Plan>
            <div style={{ padding: '1.5rem' }}>
              <PlanHeader>FREE</PlanHeader>
              <Price>$0</Price>
              <Button>Start for FREE</Button>
              <FeatureList>
                <Feature>Unlimited orders</Feature>
                <Feature>Unlimited products listing</Feature>
                <Feature>Unlimited offer creation</Feature>
                <FeatureDisabled>Monthly 2 hrs Marketing support</FeatureDisabled>
                <FeatureDisabled>Premium customer care</FeatureDisabled>
                <FeatureDisabled>Custom domain</FeatureDisabled>
              </FeatureList>
            </div>
          </Plan>
          <Plan1>
            <PlanHeader>
              <SaveBadge>Save 25%</SaveBadge>
              PRO - Annual plan
            </PlanHeader>
            <div style={{ padding: '1.5rem' }}>
              <Price style={{ color: isAnnual? '#aaa': '#fff', margin: '0.5rem 0', fontSize: '20px', textDecoration: 'line-through' }}>$9.99</Price>
              <Price>${isAnnual ? '7.5' : '9.99'}<PricePeriod>{isAnnual ? 'Monthly, Billed annually' : 'Monthly'}</PricePeriod></Price>
              <Button1>Get 14 days free trial!</Button1>
              <FeatureList>
                <Feature>Unlimited orders</Feature>
                <Feature>Unlimited products listing</Feature>
                <Feature>Unlimited offer creation</Feature>
                <Feature>Monthly 2 hrs marketing support</Feature>
                <Feature>Premium customer care</Feature>
                <Feature>Custom domain</Feature>
              </FeatureList>
            </div>
          </Plan1>
        </Plans>
      </Container>
      <FaqSection />
    </Section>
  );
};

export default Pricing;

// Styled components (with media queries)
const Section = styled.section`
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
    color: #e1240f;
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
    color: #e1240f;
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
    background-color: #e1240f;
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

const Plans = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Plan = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  text-align: center;
  width: 350px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    order: 2; /* Change order for mobile */
  }
`;

const Plan1 = styled.div`
  border: 3px solid #e1240f;
  border-radius: 0.5rem;
  text-align: center;
  width: 350px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    order: 1; /* Change order for mobile */
  }
`;

const PlanHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e1240f;
  margin-bottom: 1rem;
`;

const SaveBadge = styled.div`
  background-color: #e1240f;
  color: #fff;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PricePeriod = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border: 2px solid #c1c1c5;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #d00;
  }
`;

const Button1 = styled.button`
  background-color: #e1240f;
  color: #fff;
  width: 100%;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #d00;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const Feature = styled.li`
  color: black;
  margin: 0.5rem 0;
  font-size: 16px;

  &::before {
    content: '✓ ';
    color: #e1240f;
    font-weight: bold;
  }
`;

const FeatureDisabled = styled.li`
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
