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
          <LogoImage src={logo} alt="Feasto" />
          <Description>
            Feasto simplifies creating a stunning,
            <br />
            professional web store with its user-friendly
            <br />
            templates and quick setup.
          </Description>
          <SocialLinksContainer>
            <SocialIconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIconLink>
            <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} color='#e1240f' />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIconLink>
            <SocialIconLink href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </SocialIconLink>
          </SocialLinksContainer>
        </Logo>
        <FooterLinks>
          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <Link href="#">About us</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms & service</Link>
          </Column>
          <Column>
            <ColumnTitle>Templates</ColumnTitle>
            <Link href="#">Restaurants & Food Stalls</Link>
            <Link href="#">Retail stores</Link>
            <Link href="#">Grocery stores</Link>
          </Column>
          <Column>
            <ColumnTitle>Resources</ColumnTitle>
            <Link href="#">Blogs</Link>
            <Link href="#">Knowledge base</Link>
            <Link href="#">Help center</Link>
          </Column>
          <Column>
            <ColumnTitle>Features</ColumnTitle>
            <Link href="#">WhatsApp order management</Link>
            <Link href="#">Digital storefront</Link>
            <Link href="#">Insightful analytics</Link>
            <Link href="#">Effortless offer management</Link>
          </Column>
        </FooterLinks>
      </FooterTop>
      <FooterBottom>
        <Credits>Designed & Developed with 🤍 by<span> Cognitix</span></Credits>
        <Copyright>© 2022 Feasto. All rights reserved.</Copyright>
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
    color: #f00;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e1240f;
  padding: 1.5rem;
  background-color: #e1240f;
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

  span{
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
