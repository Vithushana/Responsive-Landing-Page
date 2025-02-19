import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';  // Importing search icon

import LaunchLogo from '../exp_img/lanuch.png';
import ResponseLogo from '../exp_img/update.jpg';
import VisibilityLogo from '../exp_img/transe.png';
import ControlLogo from '../exp_img/friendly.png';

const Section = styled.section`
  padding: 150px 25px 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the content */

  h3 {
    max-width: 600px;
    margin: 0 auto 20px; /* Center horizontally and add bottom margin */
    color: #28a745;
    font-family: cursive;
  }

  p {
    font-size: 24px; /* Increase font size */
    margin-bottom: 10px; /* Add bottom margin */
  }

  @media (max-width: 768px) {
    padding: 100px 15px 50px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const SignUpButton = styled.a`
  padding: 11px 20px;
  text-align: center;
  background-color: #28a745;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.3s ease-in-out, padding-right 0.3s ease-in-out;

  &:hover {
    transform: translateX(-10px);
    padding-right: 30px; /* Adjust padding to make space for the arrow */
  }

  &:hover::after {
    content: '→';
    display: inline-block;
    margin-left: 10px;
    transition: margin-left 0.3s ease-in-out;
  }

  &::after {
    content: '';
    display: inline-block;
    margin-left: 0;
    transition: margin-left 0.3s ease-in-out;
  }
`;

const SignUpButton1 = styled.a`
  padding: 10px 20px;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid #dadadd;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #e5e5e7;
  }
`;

const Heading = styled.h1`
  font-size: 62px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 90%; /* Adjust the width as needed to control line breaks */
  margin: 0 auto; /* Center the heading within the container */
  line-height: 1.2; /* Adjust line height for better readability */
  position: relative;

  }
`;

const SubHeading = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FeastoContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow the sections to wrap to the next line if needed */
  gap: 20px; /* Add gap between the sections */
  justify-content: center; /* Center the items horizontally */
  max-width: 1200px;
  margin-top: 20px;

  .feasto-section {
    display: flex;
    flex-direction: row; /* Layout sections horizontally */
    align-items: center;
    justify-content: space-between;
    max-width: 45%; /* Limit the width of each section */
    min-width: 280px; /* Ensure sections don't get too small */
    margin-bottom: 20px;

    img {
      width: 80px; /* Adjust image size as needed */
      margin-right: 15px;
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 0.005;
    }

    p {
      font-size: 17px;
      line-height: 1.5;
      color: #7f8c8d;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .feasto-section {
      flex-direction: column; /* Stack the sections vertically on small screens */
      text-align: center;
      max-width: 100%; /* Ensure the sections take full width on small screens */
    }

    img {
      margin-bottom: 15px; /* Add margin below the image */
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 30px;
  padding: 5px 20px;
  border: 2px solid #28a745;
  width: 800px; /* Increased width to 500px */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  input {
    border: none;
    background-color: transparent;
    font-size: 18px;
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    outline: none;
  }

  .search-icon {
    font-size: 20px;
    color: #28a745;
    margin-right: 10px;
  }

  &:focus-within {
    border: 2px solid #85A98F;
  }
`;


const GarbageManagement = () => {
  return (
    <Section id="features">
      <SubHeading>Efficient, Safe, and Sustainable Waste Management</SubHeading>
      <Heading>
        Transform Your Waste Management with <br /> Our Service in 4 EasySteps
      </Heading>
      <br />
      <ButtonContainer>
        <SignUpButton href="#sign-up">Schedule a Pickup Now</SignUpButton>
        <SignUpButton1 href="##pricing && #templetes">Request a Demo</SignUpButton1>
      </ButtonContainer>
      <SearchBarContainer>
        <SearchBar>
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for services..." />
        </SearchBar>
      </SearchBarContainer>

      <FeastoContainer>
        <div className="feasto-section">
          <img src={LaunchLogo} alt="Launch Logo" />
          <div>
            <h2>Quick Waste Pickup</h2>
            <p>Efficient and prompt waste collection service to keep your surroundings clean. Schedule pickups at your convenience.</p>
          </div>
        </div>
        <div className="feasto-section">
          <img src={ResponseLogo} alt="Response Logo" />
          <div>
            <h2>Real-Time Updates</h2>
            <p>Get notifications when your waste has been picked up or when it's ready for disposal. Stay informed at all times.</p>
          </div>
        </div>
        <div className="feasto-section">
          <img src={VisibilityLogo} alt="Visibility Logo" />
          <div>
            <h2>Transparent Pricing</h2>
            <p>Our pricing is transparent and clear, so you know exactly what you’re paying for.</p>
          </div>
        </div>
        <div className="feasto-section">
          <img src={ControlLogo} alt="Control Logo" />
          <div>
            <h2>Eco-Friendly Practices</h2>
            <p>Our waste management services contribute to a greener planet through sustainable and eco-friendly practices.</p>
          </div>
        </div>
      </FeastoContainer>
    </Section>
  );
};

export default GarbageManagement;
