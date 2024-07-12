// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 45px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Image = styled.img`
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      color: #007BFF;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SignUpButton = styled.a`
  padding: 11px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1240f;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 100px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton1 = styled.a`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Image src={logo} alt="Logo" />
        <NavLinks>
          <ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500}>Pricing</ScrollLink>
          <ScrollLink to="templates" smooth={true} duration={500}>Templates</ScrollLink>
          <ScrollLink to="resources" smooth={true} duration={500}>Resources</ScrollLink>
        </NavLinks>
      </LeftContainer>
      <RightContainer>
        <SignUpButton1 href="#get-demo">Get a Demo</SignUpButton1>
        <SignUpButton href="#sign-up">Sign up for free</SignUpButton>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
