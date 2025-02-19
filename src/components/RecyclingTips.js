// src/components/RecyclingTips.js
import React from 'react';
import styled from 'styled-components';
import plasticImage from '../images/plastic.jpg';
import compostImage from '../images/composting.jpg';
import paperImage from '../images/paper.jpg';

const Section = styled.section`
  width: 100%;
  background-color: #fff;

  h3 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
    color: #28a745;
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
  justify-content: space-between; /* Ensures equal space between boxes */
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
  width: 32%; /* Make sure all boxes are of the same width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the contents inside each box */

  img {
    width: 100%; /* Ensure image covers the entire width of the box */
    height: 200px; /* Fixed height to maintain equal size */
    object-fit: cover; /* Ensures image doesn't distort */
    margin-bottom: 15px;
    border-radius: 10px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
    width: 100%;
  }

  p {
    font-size: 16px;
    color: #666;
    width: 100%;
    margin-bottom: auto;
  }

  @media (max-width: 768px) {
    width: 80%; /* Makes boxes more responsive on smaller screens */
    margin-bottom: 20px;
    text-align: center;

    h4,
    p,
    button {
      text-align: center;
    }
  }
`;

const Button = styled.button`
  padding: 10px 0px;
  align-items: left;
  font-size: 19px;
  font-weight: bold;
  color: #28a745;
  background-color: #D3F1DF;
  border: 4px solid #D3F1DF;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const RecyclingTips = () => {
  return (
    <Section id="recycling-tips">
      <h3>RECYCLING TIPS</h3>
      <p>Practical Tips for Efficient Garbage Management</p>
      <BoxContainer>
        <Box>
          <img src={plasticImage} alt="Plastic Recycling" />
          <h4>Plastic Recycling</h4>
          <p>
            Separate plastic waste by type and rinse containers before
            recycling. Avoid recycling contaminated plastics.
          </p>
          <br></br>
          <Button>Learn More</Button>
        </Box>
        <Box>
          <img src={compostImage} alt="Composting Organic Waste" />
          <h4>Composting Organic Waste</h4>
          <p>
            Turn kitchen scraps and yard waste into nutrient-rich compost for
            your garden. Avoid adding meat or dairy products.
          </p>
          <Button>Learn More</Button>
        </Box>
        <Box>
          <img src={paperImage} alt="Paper and Cardboard Recycling" />
          <h4>Paper & Cardboard Recycling</h4>
          <p>
            Flatten cardboard boxes and keep paper dry to ensure it can be
            efficiently recycled.
          </p>
          <Button>Learn More</Button>
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default RecyclingTips;
