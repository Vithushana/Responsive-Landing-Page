// src/components/Features.js
import React from 'react';
import styled from 'styled-components';
import foodimage from '../images/food.png';
import marketimage from '../images/market.png';
import clothimage from '../images/cloths.png';


const Section = styled.section`
  width: 100%;
  background-color: #fff;

  h3 {
    text-align: center;
    font-size: 14px;
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
  border-radius: 10px;
  margin: 80px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  background-color: white;
  text-align: center;
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
    text-align: left;
    width: 100%;
  }

  p {
    font-size: 16px;
    color: #666;
    text-align: left;
    width: 100%;
    margin-bottom: auto;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
    text-align: center;

    h4,
    p,
    button {
      text-align: left;
      align-items: left;
    }
  }
`;

const Button = styled.button`
  padding: 10px 0px;
  align-items: left;
  font-size: 14px;
  font-weight: bold;
  color: #e1240f;
  background-color: white;
  border: 2px solid white; /* Added border property */
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    
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
          <p>
            Build an online store showcasing dishes with eye-catching images &
            easily update prices with our templates.
          </p>
          <Button>Get Started Now</Button>
        </Box>
        <Box>
          <img src={marketimage} alt="Grocery Shop" />
          <h4>Grocery Shop</h4>
          <p>
            Get your grocery store online with a user-friendly design that
            enhances your customers' shopping experience.
          </p>
          <Button>Get Started Now</Button>
        </Box>
        <Box>
          <img src={clothimage} alt="Retail Stores" />
          <h4>Retail Stores</h4>
          <p>
            Create a stunning showcase for your latest collections with our
            stylish templates and user-friendly interface.
          </p>
          <Button>Get Started Now</Button>
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default Templates;
