import React from 'react';
import styled from 'styled-components';

import ImagePlaceholder from '../images/f3.png';
import ImagePlaceholder1 from '../images/line.png';

import LaunchLogo from '../exp_img/material-symbols_rocket-launch-outline-rounded.png';
import ResponseLogo from '../exp_img/tabler_message-2-bolt.png'; 
import VisibilityLogo from '../exp_img/fluent_arrow-growth-24-filled.png'; 
import ControlLogo from '../exp_img/mdi_controller-outline.png'; 
import underlineImage from '../images/back.png';

import PhotoAlbum from './PhotoAlbum'; // Import the PhotoAlbum component

const Section = styled.section`
  padding: 150px 25px 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the content */

  h3 {
    max-width: 600px;
    margin: 0 auto 20px; /* Center horizontally and add bottom margin */
    color: #e1240f;
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
  background-color: #e1240f;
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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  line-height: 1.5;
`;

const Image1 = styled.img`
  max-width: 100%;
  height: auto;
  animation: car 15s linear infinite;

  @keyframes car {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const LoopingImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%; /* Adjust as needed */
  height: auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('path/to/your/image.jpg'); /* Replace with your image path */
    background-size: contain;
    background-repeat: no-repeat;
    animation: car 15s linear infinite;
  }

  &::before {
    animation-delay: -5s;
  }

  &::after {
    animation-delay: -10s;
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

  .back {
    position: relative;
    display: inline-block;
    margin-left: 15px;

    &::after {
      content: '';
      position: absolute;
      left: 10px;
      right: 0;
      bottom: -1px; /* Adjust as needed to position the underline */
      height: 24px; /* Adjust as needed for the height of the underline */
      background-image: url(${underlineImage});
      background-repeat: no-repeat;
      background-size: cover; /* Ensure the underline image covers the span */
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
    .back::after {
      height: 12px;
    }
  }
`;

const SubHeading = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #e1240f;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FeastoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1200px;
  margin-top: 20px;

  .left-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 3px;
  }

  .right-section {
    flex: 2;
    text-align: left;
    max-width: 600px;
    margin-left: 20px; /* Adjust margin to align with the left section */

    h1 {
      font-size: 40px;
      color: black;
    }

    .feasto-section {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }

    .feasto-section h2 {
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 0.005;
    }

    .feasto-section p {
      font-size: 17px;
      line-height: 1.5;
      color: #7f8c8d;
    }

    .feasto-section img {
      margin-right: 10px;
      width: 50px; /* Adjust size as needed */
      height: 50px; /* Adjust size as needed */
    }

    h1 {
      color: black;
    }
    h3{
      font-size: 15px;
    }
    span {
      color: #e1240f;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .left-section,
    .right-section {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0px;
      padding: 0 15px;
    }

    .feasto-section img {
      width: 30px;
      height: 30px;
    }

    .feasto-section h2 {
      font-size: 16px;
    }

    .feasto-section p {
      font-size: 14px;
    }

    h1 {
      font-size: 24px;
    }
    h3{
      margin-left: 0px;
    }
  }
`;

const Features = () => {
  return (
    <Section id="features">
      <SubHeading>Seamless Setup, Quick, Easy and No-Code</SubHeading>
      <Heading>
        Build Website for your <br /> Business within
        <div className='back'>3Minutes</div>
      </Heading>
      <br />
      <ButtonContainer>
        <SignUpButton href="#sign-up">Build Your Website Now</SignUpButton>
        <SignUpButton1 href="##pricing && #templetes">Get a Demo</SignUpButton1>
      </ButtonContainer>
      <Image src={ImagePlaceholder} alt="Feature Image" />
      <LoopingImageContainer>
        <Image1 src={ImagePlaceholder1} alt="Feature Image" />
      </LoopingImageContainer>
      <FeastoContainer>
        <div className="left-section">
          <PhotoAlbum />
        </div>
        <div className="right-section">
          <h3>EXPLORE FASTO</h3>
          <h1>How <span>FEASTO</span> Help <br /> Your Business Grow?</h1>
          <div className="feasto-section">
            <img src={LaunchLogo} alt="Launch Logo" />
            <div>
              <h2>Launch your store in 3 mins</h2>
              <p>Easily launch your online store without coding and saving time. Just choose a domain, add products, and start selling. It's that simple!</p>
            </div>
          </div>
          <div className="feasto-section">
            <img src={ResponseLogo} alt="Response Logo" />
            <div>
              <h2>Faster response time</h2>
              <p>Quickly respond to customer queries and orders through WhatsApp, boosting customer satisfaction and loyalty.</p>
            </div>
          </div>
          <div className="feasto-section">
            <img src={VisibilityLogo} alt="Visibility Logo" />
            <div>
              <h2>Increased visibility</h2>
              <p>Expand your reach beyond physical locations with an online storefront that's accessible 24/7.</p>
            </div>
          </div>
          <div className="feasto-section">
            <img src={ControlLogo} alt="Control Logo" />
            <div>
              <h2>Ultimate control over your storefront</h2>
              <p>You can set your own opening hours, define delivery zones and charges, select payment methods and handle offers effortlessly.</p>
            </div>
          </div>
        </div>
      </FeastoContainer>
    </Section>
  );
};

export default Features;
