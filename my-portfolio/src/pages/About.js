import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.background};
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const SectionLabel = styled.p`
  margin: 0 0 0.75rem;
  color: ${(props) => props.theme.accent};
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  
  display: inline-block;
  border-bottom: 3px solid ${(props) => props.theme.accent};
  padding-bottom: 4px;
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: 0;
`;

const Intro = styled.p`
  margin: 1.2rem 0 0;
  color: ${(props) => props.theme.mutedText};
  font-size: 1.06rem;
  line-height: 1.85;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const Card = styled(motion.article)`
  padding: clamp(1.25rem, 3vw, 1.6rem);
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const CardTitle = styled.h2`
  margin: 0 0 0.65rem;
  color: ${(props) => props.theme.textColor};
  font-size: 1.15rem;
`;

const Text = styled.p`
  margin: 0;
  color: ${(props) => props.theme.mutedText};
  font-size: 1rem;
  line-height: 1.75;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: 800;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.mutedText};
  line-height: 1.65;

  strong {
    color: ${(props) => props.theme.textColor};
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>About</SectionLabel>
          <Title>A software engineer with strong fundamentals and product-building discipline.</Title>
          <Intro>
            My portfolio is built around practical engineering: readable code, reliable APIs,
            database-backed features, cloud awareness, and projects that show how I think through
            real software problems.
          </Intro>
        </motion.div>

        <CardGrid>
          <Card
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <CardTitle>Profile Summary</CardTitle>
            <Text>
              I am <Highlight>Nadavapalli Venkata Pavan Sai Sri Lakshman</Highlight>, a B.Tech
              Computer Science graduate from <Highlight>K.L. University</Highlight> with a 9.2 CGPA.
              I am focused on Java backend development, Spring Boot, MERN stack applications,
              SQL/MongoDB databases, and cloud fundamentals.
            </Text>
          </Card>

          <Card
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <CardTitle>What I Bring</CardTitle>
            <List>
              <ListItem>
                <strong>Backend thinking:</strong> APIs, authentication, data models, performance,
                and clean application logic.
              </ListItem>
              <ListItem>
                <strong>Full-stack execution:</strong> React frontends connected to Node.js,
                Express, Spring Boot, MongoDB, and MySQL backends.
              </ListItem>
              <ListItem>
                <strong>Evidence over claims:</strong> deployed projects, verified certifications,
                and a resume aligned with the work shown here.
              </ListItem>
            </List>
          </Card>

          <Card
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <CardTitle>Education</CardTitle>
            <Text>
              <Highlight>B.Tech in Computer Science and Engineering</Highlight>
              <br />
              K.L. University, Vijayawada | 2022 - 2026
              <br />
              CGPA: <Highlight>9.2 / 10</Highlight>
            </Text>
          </Card>
        </CardGrid>
      </Inner>
    </Container>
  );
};

export default About;
