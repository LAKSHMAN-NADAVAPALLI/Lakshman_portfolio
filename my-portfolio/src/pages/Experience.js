import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BookOpen, Code2, Database, ShieldCheck } from "lucide-react";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.surface};
  border-block: 1px solid ${(props) => props.theme.border};
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 2.5rem;
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
  margin: 1rem 0 0;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.75;
  font-size: 1.04rem;
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 23px;
    width: 1px;
    background: ${(props) => props.theme.border};

    @media (max-width: 720px) {
      display: none;
    }
  }
`;

const Card = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(150px, 190px) 1fr;
  gap: 1.15rem;
  padding: 1.25rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.background};
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.accent};
    box-shadow: ${(props) => props.theme.cardShadow};
  }

  @media (max-width: 720px) {
    grid-template-columns: 42px 1fr;
  }
`;

const IconBox = styled.div`
  position: relative;
  z-index: 1;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.accent};

  @media (max-width: 720px) {
    width: 42px;
    height: 42px;
  }
`;

const Meta = styled.div`
  @media (max-width: 720px) {
    grid-column: 2;
  }
`;

const Duration = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.42rem 0.65rem;
  border-radius: 999px;
  background: ${(props) => props.theme.accentSoft};
  color: ${(props) => props.theme.accent};
  font-size: 0.82rem;
  font-weight: 800;
`;

const Company = styled.p`
  margin: 0.7rem 0 0;
  color: ${(props) => props.theme.mutedText};
  font-size: 0.94rem;
  line-height: 1.55;
`;

const Content = styled.div`
  @media (max-width: 720px) {
    grid-column: 1 / -1;
  }
`;

const Role = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.18rem;
`;

const Description = styled.p`
  margin: 0.55rem 0 0;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.72;
`;

const ProofList = styled.ul`
  margin: 0.9rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`;

const ProofItem = styled.li`
  color: ${(props) => props.theme.textColor};
  font-size: 0.94rem;
  line-height: 1.55;

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 0.55rem;
    border-radius: 50%;
    background: ${(props) => props.theme.accent};
    vertical-align: 0.12rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.35rem 0.52rem;
  border-radius: 999px;
  background: ${(props) => props.theme.surfaceSoft};
  color: ${(props) => props.theme.mutedText};
  font-size: 0.78rem;
  font-weight: 750;
`;

const experiences = [
  {
    role: "Software Engineering Foundation",
    company: "K.L. University",
    duration: "2022 - 2026",
    icon: <BookOpen size={20} />,
    description:
      "Completed B.Tech CSE with a strong base in core computer science and application development.",
    proof: [
      "Built foundations in DSA, OOP, DBMS, operating systems, networking, and SQL.",
      "Applied classroom concepts through backend, database, and full-stack project work.",
    ],
    tools: ["Java", "DSA", "SQL", "OOP", "DBMS"],
  },
  {
    role: "Full Stack Developer",
    company: "CyberShield AI - Real-Time Threat Detection Platform",
    duration: "2024 - 2025",
    icon: <ShieldCheck size={20} />,
    description:
      "Designed and developed a security-focused platform for analyzing logs and presenting threat insights.",
    proof: [
      "Connected React dashboards with backend services for threat analysis workflows.",
      "Worked across authentication, API design, MongoDB storage, and model-inference integration.",
    ],
    tools: ["React", "Spring Boot", "Flask", "MongoDB", "APIs"],
  },
  {
    role: "Backend and Database Developer",
    company: "Academic and Personal Projects",
    duration: "2023 - 2024",
    icon: <Database size={20} />,
    description:
      "Built data-backed applications with emphasis on clean business logic and reliable persistence.",
    proof: [
      "Implemented REST APIs, SQL flows, authentication logic, and transaction-oriented features.",
      "Improved project structure through reusable modules, clear data models, and practical debugging.",
    ],
    tools: ["Java", "Spring Boot", "Node.js", "MySQL", "MongoDB"],
  },
  {
    role: "Interview and Product Engineering Practice",
    company: "Independent preparation",
    duration: "2025 - 2026",
    icon: <Code2 size={20} />,
    description:
      "Practiced technical problem solving and refined projects to match real software engineering expectations.",
    proof: [
      "Focused on DSA patterns, Java fundamentals, SQL, system design basics, and code readability.",
      "Converted project descriptions into evidence: architecture, stack choices, deployments, and links.",
    ],
    tools: ["DSA", "Java", "System Design", "GitHub", "Deployment"],
  },
];

const Experience = () => {
  return (
    <Container id="experience">
      <Inner>
        <Header>
          <SectionLabel>Journey</SectionLabel>
          <Title>How my engineering skills developed through study, projects, and practice.</Title>
          <Subtitle>
            This section shows my progression clearly: fundamentals first, then full-stack
            execution, database-backed systems, and interview-focused engineering.
          </Subtitle>
        </Header>

        <Timeline>
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <IconBox>{exp.icon}</IconBox>
              <Meta>
                <Duration>{exp.duration}</Duration>
                <Company>{exp.company}</Company>
              </Meta>
              <Content>
                <Role>{exp.role}</Role>
                <Description>{exp.description}</Description>
                <ProofList>
                  {exp.proof.map((item) => (
                    <ProofItem key={item}>{item}</ProofItem>
                  ))}
                </ProofList>
                <Tags>
                  {exp.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </Tags>
              </Content>
            </Card>
          ))}
        </Timeline>
      </Inner>
    </Container>
  );
};

export default Experience;
