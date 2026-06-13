


import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BookOpen, Code2, Database, ShieldCheck } from "lucide-react";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 8rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.surface || "#050505"};
  border-block: 1px solid ${(props) => props.theme.border || "rgba(255,255,255,0.08)"};
  overflow: hidden;
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 5rem;
`;

const SectionLabel = styled.p`
  margin: 0 0 0.7rem;
  color: ${(props) => props.theme.accent || "#00ffcc"};
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: inline-block;
  border-bottom: 2px solid ${(props) => props.theme.accent || "#00ffcc"};
  padding-bottom: 4px;
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor || "#ffffff"};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin: 1rem 0 0;
  color: ${(props) => props.theme.mutedText || "rgba(255,255,255,0.5)"};
  line-height: 1.75;
  font-size: 1.04rem;
`;

/* THE CENTRAL SPINE TRACK */
const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  /* The main vertical stem line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.accent || "#00ffcc"} 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (max-width: 820px) {
    gap: 2rem;
    &::before {
      left: 20px;
      transform: none;
    }
  }
`;

/* THE LEFT-RIGHT ALTERNATING ENGINE */
const Card = styled(motion.article)`
  position: relative;
  width: calc(50% - 2.5rem); // Takes exactly half the screen width minus gap room
  padding: 1.75rem;
  border: 1px solid ${(props) => props.theme.border || "rgba(255,255,255,0.06)"};
  border-radius: 12px;
  background: ${(props) => props.theme.background || "rgba(255,255,255,0.01)"};
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.accent || "#00ffcc"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  /* Even Cards (0, 2) -> Shifted cleanly to the LEFT side of the spine */
  &:nth-child(odd) {
    align-self: flex-start;
    text-align: right;

    /* Left side layout alignment changes */
    .meta-layout { flex-direction: row-reverse; justify-content: flex-start; }
    .tags-layout { justify-content: flex-end; }
    .proof-layout li { flex-direction: row-reverse; text-align: right; }
    .proof-layout li::before { margin-left: 0.6rem; margin-right: 0; content: "←"; }
    .icon-position { right: -3.5rem; left: auto; transform: translate(50%, -50%); }

    /* The horizontal branching arm linking card back to the center tree */
    &::after {
      content: "";
      position: absolute;
      top: 2rem;
      right: -2.5rem;
      width: 2.5rem;
      height: 2px;
      background: ${(props) => props.theme.border || "rgba(255,255,255,0.1)"};
      z-index: 0;
    }
  }

  /* Odd Cards (1, 3) -> Shifted cleanly to the RIGHT side of the spine */
  &:nth-child(even) {
    align-self: flex-end;
    text-align: left;

    .meta-layout { flex-direction: row; justify-content: flex-start; }
    .tags-layout { justify-content: flex-start; }
    .proof-layout li { flex-direction: row; text-align: left; }
    .proof-layout li::before { margin-right: 0.6rem; margin-left: 0; content: "→"; }
    .icon-position { left: -3.5rem; right: auto; transform: translate(-50%, -50%); }

    /* The horizontal branching arm linking card back to the center tree */
    &::after {
      content: "";
      position: absolute;
      top: 2rem;
      left: -2.5rem;
      width: 2.5rem;
      height: 2px;
      background: ${(props) => props.theme.border || "rgba(255,255,255,0.1)"};
      z-index: 0;
    }
  }

  /* Responsive Fallback: On small viewports, fold everything down back into a single standard track */
  @media (max-width: 820px) {
    width: calc(100% - 3.5rem) !important;
    align-self: flex-end !important;
    text-align: left !important;
    padding: 2.5rem 1.5rem 1.5rem;

    .meta-layout { flex-direction: row !important; }
    .tags-layout { justify-content: flex-start !important; }
    .proof-layout li { flex-direction: row !important; text-align: left !important; }
    .proof-layout li::before { margin-right: 0.6rem !important; margin-left: 0 !important; content: "→" !important; }
    .icon-position { left: 1.5rem !important; top: -20px !important; transform: none !important; }

    &::after {
      top: 2rem;
      left: -1.75rem !important;
      width: 1.75rem !important;
    }
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 2rem;
  z-index: 5;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.accent || "#00ffcc"};
  background: ${(props) => props.theme.surface || "#0a0a0a"};
  color: ${(props) => props.theme.textColor || "#ffffff"};
  box-shadow: 0 0 10px ${(props) => props.theme.accentSoft || "rgba(0,255,204,0.3)"};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const Duration = styled.span`
  display: inline-flex;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  background: ${(props) => props.theme.accentSoft || "rgba(0, 255, 220, 0.05)"};
  color: ${(props) => props.theme.accent || "#00ffcc"};
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid rgba(0, 255, 220, 0.1);
`;

const Company = styled.p`
  margin: 0;
  color: ${(props) => props.theme.mutedText || "rgba(255,255,255,0.4)"};
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.h2`
  margin: 0 0 0.5rem 0;
  color: ${(props) => props.theme.textColor || "#ffffff"};
  font-size: 1.3rem;
  font-weight: 850;
`;

const Description = styled.p`
  margin: 0;
  color: ${(props) => props.theme.mutedText || "rgba(255,255,255,0.6)"};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ProofList = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
`;

const ProofItem = styled.li`
  color: ${(props) => props.theme.textColor || "rgba(255,255,255,0.85)"};
  font-size: 0.9rem;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.surfaceSoft || "rgba(255,255,255,0.03)"};
  border: 1px solid rgba(255,255,255,0.05);
  color: ${(props) => props.theme.mutedText || "rgba(255,255,255,0.5)"};
  font-size: 0.75rem;
  font-weight: 700;
`;

// ==========================================
// Data array stays exactly unchanged
// ==========================================
const experiences = [
  {
    role: "Software Engineering Foundation",
    company: "K.L. University",
    duration: "2022 - 2026",
    icon: <BookOpen size={16} />,
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
    icon: <ShieldCheck size={16} />,
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
    icon: <Database size={16} />,
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
    icon: <Code2 size={16} />,
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
              {/* Injected custom layout utility class targets for precise vector connection hooks */}
              <IconBox className="icon-position">{exp.icon}</IconBox>
              <Meta className="meta-layout">
                <Duration>{exp.duration}</Duration>
                <Company>{exp.company}</Company>
              </Meta>
              <Content>
                <Role>{exp.role}</Role>
                <Description>{exp.description}</Description>
                <ProofList className="proof-layout">
                  {exp.proof.map((item) => (
                    <ProofItem key={item}>{item}</ProofItem>
                  ))}
                </ProofList>
                <Tags className="tags-layout">
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

