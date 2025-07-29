import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Layout Container
const Container = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  margin-bottom: 50px;
  color: ${(props) => props.theme.textColor}; 
  text-align: center;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 2px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.skillTextColor};
  padding: 36px 42px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
  width: 100%;
  max-width: 980px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.buttonBg};
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.9;
  color: ${(props) => props.theme.skillTextColor};
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.accent};
  font-weight: 1000;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-top: 12px;
`;

const ListItem = styled.li`
  font-size: 1.15rem;
  margin-bottom: 12px;
  list-style: none;

  &:before {
    content: "🎖️ ";
    margin-right: 8px;
    color: ${(props) => props.theme.accent};
  }
`;

const About = () => {
  return (
    <Container id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>👨‍💻 About Me</Title>

        <Card
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
        >
          <Subtitle>👋 Who Am I?</Subtitle>
          <Text>
            I’m <Highlight>Nadavapalli Venkata Pavan Sai Sri Lakshman</Highlight>, a passionate B.Tech CSE final-year student at <strong>K.L. University</strong>. My strengths lie in crafting full-stack web apps, building scalable cloud infrastructure, and solving real-world problems using data and AI. I constantly challenge myself by working on cutting-edge technologies like Generative AI, Cloud Automation, and Cybersecurity Tools. My goal? To innovate responsibly, build securely, and contribute meaningfully to the tech world.
          </Text>
        </Card>

        <Card
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
        >
          <Subtitle>🎓 Education</Subtitle>
          <Text>
            <Highlight>B.Tech - Computer Science & Engineering</Highlight><br />
            <strong>K.L. University, Vijayawada</strong> | 2022 – 2026<br />
            CGPA: <Highlight>9.2 / 10</Highlight><br />
            Specialized in Artificial Intelligence, Software Engineering, and Cloud Architecture.
          </Text>
        </Card>

        <Card
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
        >
          <Subtitle>🧠 Technical Toolkit</Subtitle>
          <Text>
            <strong>Languages:</strong> Java, Python, JavaScript (ES6+), C++, SQL<br />
            <strong>Frontend:</strong> ReactJS, Tailwind, Framer Motion, Styled Components<br />
            <strong>Backend:</strong> Node.js, Express, Spring Boot, MongoDB, MySQL<br />
            <strong>Cloud & DevOps:</strong> AWS, Oracle Cloud, Docker, GitHub Actions<br />
            <strong>AI & Data:</strong> Generative AI, Big Data, Pandas, ML Models<br />
            <strong>Systems:</strong> Linux, Networking, OS Internals, Secure Dev Practices
          </Text>
        </Card>

        <Card
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.4 }}
        >
          <Subtitle>🏅 Certifications & Achievements</Subtitle>
          <List>
            <ListItem>AWS Certified Cloud Practitioner – 2024</ListItem>
            <ListItem>Oracle Cloud Generative AI Professional – 2024</ListItem>
            <ListItem>Red Hat Certified Enterprise App Developer – 2024</ListItem>
            <ListItem>FinTech Professional Certification – 2024</ListItem>
            <ListItem>400+ DSA Problems Solved (LeetCode, Codeforces)</ListItem>
            <ListItem>Contributor – Open Source AI/Cloud Projects on GitHub</ListItem>
          </List>
        </Card>
      </motion.div>
    </Container>
  );
};

export default About;
