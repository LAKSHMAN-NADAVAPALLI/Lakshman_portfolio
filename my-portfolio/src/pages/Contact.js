import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.background};
`;

const Inner = styled.div`
  width: min(900px, 100%);
  margin: 0 auto;
  text-align: center;
`;

const SectionLabel = styled.p`
  margin: 0 0 0.7rem;
  color: ${(props) => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.12;
  font-weight: 900;
`;

const Subtitle = styled.p`
  max-width: 640px;
  margin: 1rem auto 2rem;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.75;
  font-size: 1.04rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  text-align: left;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ContactLink = styled.a`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  min-height: 78px;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.accent};
  }
`;

const IconBox = styled.span`
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => props.theme.accentSoft};
  color: ${(props) => props.theme.accent};
`;

const Label = styled.span`
  display: block;
  color: ${(props) => props.theme.mutedText};
  font-size: 0.86rem;
  font-weight: 750;
`;

const Value = styled.span`
  display: block;
  margin-top: 0.22rem;
  color: ${(props) => props.theme.textColor};
  font-weight: 800;
  overflow-wrap: anywhere;
`;

function Contact() {
  return (
    <Container>
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <SectionLabel>Contact</SectionLabel>
          <Title>Open to software engineering opportunities.</Title>
          <Subtitle>
            I am actively looking for Software Engineer, Java Backend Developer, Full Stack
            Developer, and Cloud Engineering roles.
          </Subtitle>

          <ContactGrid>
            <ContactLink href="mailto:2200030245cseh@gmail.com">
              <IconBox>
                <Mail size={19} />
              </IconBox>
              <span>
                <Label>Email</Label>
                <Value>2200030245cseh@gmail.com</Value>
              </span>
            </ContactLink>

            <ContactLink href="tel:+919346716905">
              <IconBox>
                <Phone size={19} />
              </IconBox>
              <span>
                <Label>Phone</Label>
                <Value>+91 93467 16905</Value>
              </span>
            </ContactLink>

            <ContactLink
              href="https://github.com/LAKSHMAN-NADAVAPALLI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBox>
                <Github size={19} />
              </IconBox>
              <span>
                <Label>GitHub</Label>
                <Value>github.com/LAKSHMAN-NADAVAPALLI</Value>
              </span>
            </ContactLink>

            <ContactLink
              href="https://www.linkedin.com/in/nadavapalli-venkata-pavan-sai-sri-lakshman-53366828a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBox>
                <Linkedin size={19} />
              </IconBox>
              <span>
                <Label>LinkedIn</Label>
                <Value>Nadavapalli Lakshman</Value>
              </span>
            </ContactLink>
          </ContactGrid>
        </motion.div>
      </Inner>
    </Container>
  );
}

export default Contact;
