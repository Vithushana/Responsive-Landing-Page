// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: row;
  }
`;

const Logo = styled.img`
  margin-left: 60px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  color: black;
  font-size: 17px;
  margin-left: 20px;
  color: black;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 18px;
  width: 400px;
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

  &:hover {
    background-color: #bababa;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 40px;
  }
`;

const GetDemoButton = styled.a`
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
    background-color: #e5e5e7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin-top: 3px;
  color: #888;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 30px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <Logo src={logo} alt="Logo" />
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
        <NavLinks isOpen={isOpen}>
          <NavLink to="features" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Features</NavLink>
          <NavLink to="pricing" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <NavLink to="templates" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Templates</NavLink>
          <NavLink to="resources" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Resources</NavLink>
        </NavLinks>
      </div>
      <div>
        <ButtonContainer>
          <GetDemoButton href="#pricing">Get a Demo</GetDemoButton>
          <SignUpButton href="#sign-up">Sign up for free</SignUpButton>
        </ButtonContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
