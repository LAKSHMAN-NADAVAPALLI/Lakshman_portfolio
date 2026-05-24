import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* ---------- Layout ---------- */

const Container = styled.div`
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
  font-weight: 800;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  line-height: 1.7;
  font-size: 1rem;
`;

/* ---------- Timeline ---------- */

const TimelineContainer = styled.div`
  position: relative;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`;

const CenterLine = styled.div`
  position: absolute;
  width: 4px;
  background: ${(props) => props.theme.accent};
  box-shadow: 0 0 15px ${(props) => props.theme.accent}66;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.35;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Item = styled(motion.div)`
  position: relative;
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const Dot = styled(motion.div)`
  position: absolute;
  width: 18px;
  height: 18px;
  background: ${(props) => props.theme.accent};
  border: 4px solid ${(props) => props.theme.skillCardBg};
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 12px ${(props) => props.theme.accent};

  left: 50%;
  top: 30px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.skillCardBg},
    rgba(255, 255, 255, 0.04)
  );

  padding: 24px;
  border-radius: 22px;
  box-shadow: ${(props) => props.theme.cardShadow};
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 42%;
  text-align: left;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Role = styled.h2`
  font-size: 1.35rem;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 4px;
  font-weight: 700;
`;

const Company = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${(props) => props.theme.accent};
  margin-bottom: 10px;
`;

const Duration = styled.span`
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.06);
  padding: 5px 14px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 14px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.98rem;
  line-height: 1.8;
  color: ${(props) => props.theme.textColor};
  opacity: 0.82;
`;

/* ---------- Experience Data ---------- */

const experiences = [
  {
    role: "Software Engineering ",
    company: "KL University",
    duration: "2025 – Present",
    description:
      "Actively preparing for Software Engineer roles by solving Data Structures & Algorithms problems, practicing Core Java and SQL, and participating in mock technical interviews focused on product-based company hiring patterns.",
  },
  {
    role: "Full Stack Developer",
    company: "CyberShield AI – Real-Time Threat Detection Platform",
    duration: "2024 – Present",
    description:
      "Designed and developed a real-time cybersecurity monitoring platform using MERN stack technologies with secure authentication, live threat analysis dashboards, and scalable backend APIs for efficient threat detection workflows.",
  },
  {
    role: "Backend & Database Developer",
    company: "Academic and Personal Projects",
    duration: "2023 – 2024",
    description:
      "Built backend systems using Java, Spring Boot, SQL, and REST APIs while optimizing database queries and implementing scalable application logic for real-time web applications and university projects.",
  },
];

/* ---------- Component ---------- */

const Experience = () => {
  return (
    <Container id="experience">
      <Title>Professional Journey</Title>

      <Subtitle>
        My journey in software development, backend engineering,
        cloud technologies, and technical interview preparation.
      </Subtitle>

      <TimelineContainer>
        <CenterLine />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Item
              key={index}
              left={isLeft}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Dot
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
              />

              <Card
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                style={{
                  x: isLeft ? -20 : 20,
                }}
              >
                <Role>{exp.role}</Role>

                <Company>{exp.company}</Company>

                <Duration>{exp.duration}</Duration>

                <Description>{exp.description}</Description>
              </Card>
            </Item>
          );
        })}
      </TimelineContainer>
    </Container>
  );
};

export default Experience;