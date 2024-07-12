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
              <FontAwesomeIcon icon={faFacebook} />
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
        <Credits>Designed & Developed with 🤍 by Cognitix</Credits>
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
  background-color: #f8f9fa;
  padding: auto;
  color: #6b7280;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 2rem;
  margin-left: 100px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const LogoImage = styled.img`
  width: 300px;
  height: 48px;
  margin-bottom: 3rem;
  margin-top: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 17px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-right: 100px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
`;

const Link = styled.a`
  font-size: 1.1rem;
  color: #6b7280;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #f00;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem;
  width: 100%;
  background-color: #e1240f;
  color: #fff;
`;

const Credits = styled.p`
  font-size: 1.12rem;
  margin: 0;
  text-align: left;
`;

const Copyright = styled.p`
  font-size: 1.12rem;
  margin: 0;
`;

