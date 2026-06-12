import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Code2, Cloud, Database, Server, Settings, TestTube2 } from "lucide-react";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.background};
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
  font-size: 1.04rem;
  line-height: 1.75;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGroup = styled(motion.article)`
  min-height: 230px;
  padding: 1.35rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => props.theme.accentSoft};
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;
`;

const GroupTitle = styled.h2`
  margin: 0 0 0.9rem;
  color: ${(props) => props.theme.textColor};
  font-size: 1.08rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const Tag = styled.span`
  padding: 0.42rem 0.6rem;
  border-radius: 999px;
  background: ${(props) => props.theme.surfaceSoft};
  color: ${(props) => props.theme.mutedText};
  font-size: 0.88rem;
  font-weight: 650;
`;

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: <Server size={21} />,
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Frontend Development",
    icon: <Code2 size={21} />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Styled Components", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: <Database size={21} />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL", "Query Optimization", "Data Modeling"],
  },
  {
    title: "Cloud and DevOps",
    icon: <Cloud size={21} />,
    skills: ["AWS", "Oracle Cloud", "Docker", "GitHub Actions", "Linux", "Deployment"],
  },
  {
    title: "Computer Science Core",
    icon: <TestTube2 size={21} />,
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Networking", "System Design Basics"],
  },
  {
    title: "Tools and Workflow",
    icon: <Settings size={21} />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Agile Basics", "Debugging"],
  },
];

const Skills = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <SectionLabel>Skills</SectionLabel>
          <Title>Engineering skills I use to build, debug, and ship complete applications.</Title>
          <Subtitle>
            The stack is grouped by how I work: backend logic, user interfaces, data, cloud,
            fundamentals, and the tools that keep projects maintainable.
          </Subtitle>
        </Header>

        <SkillsGrid>
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <IconWrap>{group.icon}</IconWrap>
              <GroupTitle>{group.title}</GroupTitle>
              <Tags>
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </Tags>
            </SkillGroup>
          ))}
        </SkillsGrid>
      </Inner>
    </Container>
  );
};

export default Skills;
