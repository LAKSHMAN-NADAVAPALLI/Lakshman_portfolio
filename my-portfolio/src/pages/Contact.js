import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 40px;
`;

const ContactCard = styled.div`
  background: ${(props) => props.theme.skillCardBg};
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 20px;
  max-width: 500px;
  margin: auto;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.text}; /* Ensures visible label text */

  span {
    color: ${(props) => props.theme.text};
  }
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.accent};
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

const MessageButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff4d4d, #ff1a1a);
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 77, 77, 0.4);
  }
`;

function Contact() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Contact Me</Title>
        <Subtitle>Let's connect! Feel free to reach out via any platform below.</Subtitle>
        
        <ContactCard>
          <ContactItem>
            <span>📧 Email:</span>
            <ContactLink href="mailto:2200030245cseh@gmail.com">
              2200030245cseh@gmail.com
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <span>🔗 LinkedIn:</span>
            <ContactLink
              href="https://www.linkedin.com/in/nadavapalli-venkata-pavan-sai-sri-lakshman-53366828a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nadavapalli Venkata Pavan Sai Sri Lakshman
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <span>🐙 GitHub:</span>
            <ContactLink
              href="https://github.com/LAKSHMAN-NADAVAPALLI"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/LAKSHMAN-NADAVAPALLI
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <span>📞 Phone:</span>
            <ContactLink href="tel:+919346716905">
              +91 93467 16905
            </ContactLink>
          </ContactItem>
        </ContactCard>

        <MessageButton href="mailto:2200030245cseh@gmail.com">
          📩 Send a Message
        </MessageButton>
      </motion.div>
    </Container>
  );
}

export default Contact;
