import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  line-height: 1; // Adjust this value as needed

  span {
    color: #28a745;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #28a745;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  line-height: 0.05; // Adjust this value as needed
`;

const FaqContainer = styled.div`
  width: 82%;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 9px;
  overflow: hidden;
  line-height: 1.9; /* Adjust this value as needed */
  margin: 0 auto; /* Center the container */
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  font-weight: bold;
  font-size: 20px;
  color: #333;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const FaqAnswer = styled.div`
  padding: 0 20px 20px;
  background-color: #fff;
  color: #555;
  font-size: 19px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Icon = styled.span`
  font-size: 28px;
  color: #333;
`;

const FAQ = ({ index, question, answer, isOpen, onClick }) => {
  return (
    <FaqItem onClick={() => onClick(index)}>
      <FaqQuestion>
        {question}
        <Icon>{isOpen ? '-' : '+'}</Icon>
      </FaqQuestion>
      <FaqAnswer isOpen={isOpen}>{answer}</FaqAnswer>
    </FaqItem>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the purpose of the Garbage Management System?',
      answer: 'The Garbage Management System aims to streamline waste collection, recycling, and disposal processes. It improves efficiency, reduces environmental impact, and ensures timely and safe garbage disposal.',
    },
    {
      question: 'How does the system track garbage collection?',
      answer: 'The system uses GPS and IoT-enabled sensors in garbage bins to monitor fill levels and schedule timely pickups. This ensures waste is collected before bins overflow.',
    },
    {
      question: 'Can this system be integrated with existing waste management infrastructure?',
      answer: 'Yes, the system can be integrated with existing waste management infrastructure, including trucks, collection routes, and recycling facilities, to enhance operational efficiency.',
    },
    {
      question: 'What are the environmental benefits of using this system?',
      answer: 'By optimizing collection routes, minimizing landfill use, and promoting recycling, the system helps reduce carbon emissions, waste, and environmental degradation.',
    },
    {
      question: 'How do citizens report issues related to garbage collection?',
      answer: 'Citizens can report garbage-related issues via the mobile app or website, including missed collections or overflowing bins. These reports are instantly sent to the relevant authorities for resolution.',
    },
    {
      question: 'What types of waste does the system handle?',
      answer: 'The system handles all types of waste, including recyclable materials, organic waste, hazardous waste, and general waste. It sorts and directs materials to appropriate recycling and disposal units.',
    },
    {
      question: 'Is there a feature for waste sorting and recycling?',
      answer: 'Yes, the system promotes waste sorting by providing users with guidelines and incentives for sorting their waste correctly. It encourages recycling through awareness programs and rewards.',
    },
    {
      question: 'How can I track the status of my garbage collection request?',
      answer: 'The system provides real-time tracking for garbage collection requests, allowing users to check when their garbage will be picked up and if any delays occur.',
    },
    // Add additional FAQs as required for your topic
  ];

  const handleFaqClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <SubTitle>Frequently Asked Questions</SubTitle>
      <Title>
        All you need to know <br /> about <span>Garbage Management System</span>
      </Title>
      <FaqContainer>
        {faqData.map((faq, index) => (
          <FAQ
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={handleFaqClick}
          />
        ))}
      </FaqContainer>
    </Section>
  );
};

export default FaqSection;
