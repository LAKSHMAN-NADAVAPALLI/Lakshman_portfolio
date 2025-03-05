import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
  line-height: 2;
`;

const ContactLink = styled.a`
  color: #ff4d4d; /* Red color */
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    color: #ff1a1a; /* Darker red on hover */
    text-decoration: underline;
  }
`;

const MessageButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

function Contact() {
  return (
    <Container>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Title>Contact Me</Title>
        <ContactInfo>
          📧 Email: <ContactLink href="mailto:2200030245cseh@gmail.com">2200030245cseh@gmail.com</ContactLink>
          <br />
          🔗 LinkedIn: 
          <ContactLink 
            href="https://www.linkedin.com/in/nadavapalli-venkata-pavan-sai-sri-lakshman-53366828a" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Nadavapalli Venkata Pavan Sai Sri Lakshman
          </ContactLink>
          <br />
          📞 Phone: <ContactLink href="tel:+919346716905">+91 93467 16905</ContactLink>
          <br />
        </ContactInfo>
        <MessageButton href="mailto:2200030245cseh@gmail.com">
          📩 Send a Message
        </MessageButton>
      </motion.div>
    </Container>
  );
}

export default Contact;
