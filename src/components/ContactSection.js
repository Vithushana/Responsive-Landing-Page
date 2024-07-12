import React from 'react';
import styled from 'styled-components';

import email from '../images/email.png';
import call from '../images/call.png';
import location from '../images/location.png';

const ContactSection = () => {
  return (
    <Container>
      <Title>Still have some question?</Title>
      <Description>
        Can't find the answer that you're looking for? Feel free to our team reach out for more info.
      </Description>
      <ContactOptions>
        <ContactOption>
          <Icon><Image src={email} alt="email"/></Icon>
          <Info>
            <Label>Email address</Label>
            <Value>hello@feasto.io</Value>
          </Info>
        </ContactOption>
        <ContactOption>
          <Icon><Image src={call} alt="email"/></Icon>
          <Info>
            <Label>Get in touch</Label>
            <Value>+94 77 604 4021</Value>
          </Info>
        </ContactOption>
        <ContactOption>
          <Icon><Image src={location} alt="email"/></Icon>
          <Info>
            <Label>Location</Label>
            <Value>Jaffna, Sri Lanka</Value>
          </Info>
        </ContactOption>
      </ContactOptions>
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin: 2rem auto;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2rem;
`;

const ContactOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const Image = styled.img`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const Value = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
