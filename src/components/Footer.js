import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Logo>
          <LogoImage src={logo} alt="EcoManage" />
          <Description>
            EcoManage provides a seamless platform for efficient 
            <br />
            garbage management, ensuring a cleaner and 
            <br />
            greener environment for everyone.
          </Description>
          <SocialLinksContainer>
            <SocialIconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} color='#28a745'/>
            </SocialIconLink>
            <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} color='#28a745' />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} color='#28a745'/>
            </SocialIconLink>
            <SocialIconLink href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} color='#28a745'/>
            </SocialIconLink>
          </SocialLinksContainer>
        </Logo>
        <FooterLinks>
          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </Column>
          <Column>
            <ColumnTitle>Services</ColumnTitle>
            <Link href="#">Residential Waste Pickup</Link>
            <Link href="#">Recycling Services</Link>
            <Link href="#">Commercial Waste Solutions</Link>
            <Link href="#">Hazardous Waste Management</Link>
          </Column>
          <Column>
            <ColumnTitle>Resources</ColumnTitle>
            <Link href="#">Blogs</Link>
            <Link href="#">Knowledge Base</Link>
            <Link href="#">Sustainability Tips</Link>
            <Link href="#">Help Center</Link>
          </Column>
          <Column>
            <ColumnTitle>Features</ColumnTitle>
            <Link href="#">Real-Time Tracking</Link>
            <Link href="#">Waste Segregation Guide</Link>
            <Link href="#">Eco-Friendly Initiatives</Link>
            <Link href="#">Custom Pickup Schedules</Link>
          </Column>
        </FooterLinks>
      </FooterTop>
      <FooterBottom>
        <Credits>
          Designed & Developed with ♻️ by <span>EcoSolutions</span>
        </Credits>
        <Copyright>© 2024 EcoManage. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: #fff;
`;

const SocialIconLink = styled.a`
  color: inherit;
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #0077b5; /* LinkedIn color */
  }

  &:nth-child(2):hover {
    color: #1877f2; /* Facebook color */
  }

  &:nth-child(3):hover {
    color: #e4405f; /* Instagram color */
  }

  &:nth-child(4):hover {
    color: #25d366; /* WhatsApp color */
  }
`;

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: auto;
  color: #6b7280;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 2rem;
  margin-left: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const LogoImage = styled.img`
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 18px;
  color: black;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-right: 100px;

  @media (max-width: 768px) {
    flex-direction: row; /* Change to row for 2x2 layout */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex: 0 0 50%; /* Two columns in a row */
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
`;

const Link = styled.a`
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  margin-bottom: 0.6rem;
  line-height: 1.9rem;

  &:hover {
    color: #28a745;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #28a745;
  padding: 1.5rem;
  background-color: #28a745;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Credits = styled.p`
  font-size: 1.12rem;
  margin: 0;
  text-align: left;

  span {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.12rem;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
