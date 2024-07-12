import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: auto;
  background-color: #f4f4f4;
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

  span{
  color: #e1240f;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #e1240f;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  line-height: 0.05; // Adjust this value as needed
`;

const FaqContainer = styled.div`
  width: 150%;
  max-width: 1000px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  line-height: 1.9; // Adjust this value as needed
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
  background-color: #f9f9f9;
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

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FaqItem onClick={toggleFaq}>
      <FaqQuestion>
        {question}
        <Icon>{isOpen ? '-' : '+'}</Icon>
      </FaqQuestion>
      <FaqAnswer isOpen={isOpen}>{answer}</FaqAnswer>
    </FaqItem>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      question: 'How can FEASTO help me get my shop online?',
      answer: 'If you’re thinking about selling a product online, all you’ll need to do is visit our website, sign up, and follow our easy step-by-step guide. Once you\'ve done these steps, your shop is ready to go online! You can edit your products anytime, add new ones, or update details, then publish your changes instantly.',
    },
    {
      question: 'How secure is the FEASTO Ecommerce Website Builder?',
      answer: 'We implement industry-standard security measures, including SSL encryption, secure payment gateways, and regular system updates, to ensure the protection of your online store and customer data.',
    },
    {
      question: 'Can I connect FEASTO with other tools and services?',
      answer: 'Yes, FEASTO allows you to integrate with popular tools and services to enhance your online store. Connect seamlessly with email marketing platforms, analytics tools, and more to optimize your e-commerce experience.',
    },
    {
      question: 'To what extent can I customize the pre-designed template?',
      answer: 'You can personalize the pre-designed template by adjusting the theme colors and layouts to match your store`s branding and style preferences.',
    },
    {
      question: 'What kind of payment methods does Feasto support?',
      answer: 'Currently, FEASTO supports cash payments and bank deposits only. However, if you need other payment methods, we`ll add them at minimal cost based on what you prefer..',
    },
    {
      question: 'Is Feasto suitable for small businesses?',
      answer: 'Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. Our powerful features ensure a seamless experience.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Absolutely! You can cancel your subscription at any time directly from your account settings. If you need assistance, please contact our customer support team at Hai@feasto.io.',
    },
    // Add more FAQs as needed
  ];

  return (
    <Section>
      <SubTitle>Frequently Asked Questions</SubTitle>
      <Title>All you need to know <br /> about <span>FEASTO</span></Title>
      <FaqContainer>
        {faqData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </FaqContainer>
    </Section>
  );
};

export default FaqSection;
