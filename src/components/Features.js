import React from 'react';
import styled from 'styled-components';

import ImagePlaceholder from '../images/f3.png';
import ImagePlaceholder1 from '../images/line.png';

import LaunchLogo from '../images/lanuch.png';
import ResponseLogo from '../images/responsive.png'; 
import VisibilityLogo from '../images/visibility.png'; 
import ControlLogo from '../images/control.png'; 
import explo from '../images/explo.png';
import underlineImage from '../images/back.png';


const Section = styled.section`
  padding: 150px 25px 100px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SignUpButton = styled.a`
  padding: 11px 20px;
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
  background-color: white;
  color: black;
  border: 2px solid #dadadd;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: red;
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
  animation: car 9s linear infinite;

  @keyframes car {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-220%);
    }
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
`;

const SubHeading = styled.p`
  font-size: 24px;
  color: #e1240f;
  margin-bottom: 40px;
`;

const FeastoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin-top: 20px;

  .left-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 3px;

    img {
      max-width: 450%;
      height: auto;
      margin-left: 220px;
    }
  }

  .right-section {
    flex: 2;
    text-align: left;
    max-width: 600px;
    margin-left: 200px;

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
      font-siz: 20px;
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
     span{
     color: #e1240f;
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
      <br></br>
      <ButtonContainer>
        <SignUpButton href="#sign-up">Build Your Website Now</SignUpButton>
        <SignUpButton1 href="#get-demo">Get a Demo</SignUpButton1>
      </ButtonContainer>
      <Image src={ImagePlaceholder} alt="Feature Image" />
      <Image1 src={ImagePlaceholder1} alt="Feature Image" />
      <FeastoContainer>
        <div className="left-section">
          <img src={explo} alt="explo" />
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
