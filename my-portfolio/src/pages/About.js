import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components

const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 900px;
  margin: auto;
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-top: 30px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ff5733;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const About = () => {
  return (
    <Container id="about">
   
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Title>About Me</Title>
        
        {/* Education Section */}
        <Section>
          <Subtitle>Education</Subtitle>
          <Text>
            <strong>B.Tech in Computer Science Engineering</strong> <br />
            K.L. University, Vijayawada (2022 – Current) <br />
            Graduated with a <strong>9.2 CGPA</strong>. Focused on software development methodologies and emerging technologies.
          </Text>
        </Section>

        {/* Skills Section */}
        <Section>
          <Subtitle>Skills & Expertise</Subtitle>
          <Text>
            <strong>Programming:</strong> Java, Python, JavaScript, C++, SQL <br />
            <strong>Full-Stack Development:</strong> MERN Stack (MongoDB, Express.js, React.js, Node.js) <br />
            <strong>Cloud Computing:</strong> AWS, Oracle Cloud <br />
            <strong>AI & Fintech:</strong> AI-driven finance, big data analytics, fraud detection, risk assessment <br />
            <strong>Software Engineering:</strong> Agile, CI/CD, microservices, secure coding, DevOps
          </Text>
        </Section>

        {/* Certifications Section */}
        <Section>
          <Subtitle>Certifications</Subtitle>
          <List>
            <ListItem>✅ AWS Certified Cloud Practitioner — 2024</ListItem>
            <ListItem>✅ Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</ListItem>
            <ListItem>✅ Red Hat Certified Enterprise Application Developer — 2024</ListItem>
            <ListItem>✅ FinTech Professional Certification — 2024</ListItem>
          </List>
        </Section>
      </motion.div>
    </Container>
  );
};

export default About;
