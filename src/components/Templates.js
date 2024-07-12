// src/components/Features.js
import React from 'react';
import styled from 'styled-components';
import foodimage from '../images/food.png';
import marketimage from '../images/market.jpeg';
import clothimage from '../images/cloths.webp';
import FaqSection from './FaqSection';

const Section = styled.section`
  width: 100%;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;

  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #e1240f;
    font-family: cursive;
  }

  p {
    max-width: 600px;
    margin: 0 auto 40px;
    text-align: center;
    font-size: 45px;
    color: black;
    font-weight: bold;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  width: 30%;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
    text-align: left;
  }

  p {
    font-size: 16px;
    color: #666;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #e1240f;
  background-color: white;
  border: 2px solid #e1240f;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 1s ease;

  &:hover {
    color: white;
    background-color: #e1240f;
  }

  &:hover::after {
    right: -35px; /* Adjust as necessary for desired effect */
  }

  &::after {
    content: '→';
    position: absolute;
    right: -25px; /* Initial position */
    opacity: 1;
    transition: right 0.3s ease;
  }
`;


const Templates = () => {
  return (
    <Section id="templates">
      <h3>STARTER TEMPLATES</h3>
      <p>Kickstart Your Online Stores with amazing templates</p>
      <BoxContainer>
        <Box>
          <img src={foodimage} alt="Restaurants & Food Businesses" />
          <h4>Restaurants & Food Businesses</h4>
          <p>Build an online store showcasing dishes with
             eye-catching images & <br /> easily update prices
             with our templates.</p>
          <Button>Get Started Now</Button>
        </Box>
        <Box>
          <img src={marketimage} alt="Grocery Shop" />
          <h4>Grocery Shop</h4>
          <p>Get your grocery store online with a
             user-friendly design that<br /> enhances your
             customers' shopping experience.</p>
          <Button>Get Started Now</Button>
        </Box>
        <Box>
          <img src={clothimage} alt="Retail Stores" />
          <h4>Retail Stores</h4>
          <p>Create a stunning showcase for your latest
             collections with our <br /> stylish templates and
             user-friendly interface.</p>
          <Button>Get Started Now</Button>
        </Box>
      </BoxContainer>
      <FaqSection />
    </Section>
  );
};

export default Templates;
