import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import cyberThreatImg from "../assets/cyberthreatdetectionsystem.jpeg";
import jobPortalImg from "../assets/ojbscreen.png";
import movieTicketImg from "../assets/online-movie-ticketing-system.jpg";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.background};
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 780px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.12rem;
  line-height: 1.35;
`;

const Description = styled.p`
  margin: 0.8rem 0 0;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.65;
  font-size: 0.96rem;
`;

const Impact = styled.p`
  margin: 0.9rem 0 0;
  padding: 0.75rem;
  border-radius: 8px;
  background: ${(props) => props.theme.accentSoft};
  color: ${(props) => props.theme.textColor};
  line-height: 1.55;
  font-size: 0.92rem;
  font-weight: 650;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.35rem 0.5rem;
  border-radius: 999px;
  background: ${(props) => props.theme.surfaceSoft};
  color: ${(props) => props.theme.mutedText};
  font-size: 0.78rem;
  font-weight: 700;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1.2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 38px;
  padding: 0 0.75rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 800;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    name: "AI-Powered Cyber Threat Detection System",
    description:
      "A deployed full-stack platform for analyzing network logs and presenting threat insights through a React dashboard.",
    impact:
      "Engineering focus: Flask model inference, Spring Boot services, MongoDB storage, secure workflows, and real-time dashboard usability.",
    tools: ["Java", "Spring Boot", "Flask", "MongoDB", "React"],
    live: "https://nadavapalli-lakshman-ai-cyber-threat-detection.vercel.app/",
    image: cyberThreatImg,
  },
  {
    name: "Scalable Online Job Portal",
    description:
      "A MERN job portal with candidate/job workflows, backend APIs, resume-oriented features, and deployed frontend access.",
    impact:
      "Engineering focus: Node.js APIs, MongoDB aggregation, recommendation logic, reusable React screens, and low-latency data access.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Resume Parsing"],
    live: "https://nadavapalli-lakshman-online-job-portal-using-react-lapy.vercel.app/",
    image: jobPortalImg,
  },
  {
    name: "Secure Movie Ticket Booking System",
    description:
      "A Java web application for seat booking flows with authentication and transaction-oriented database operations.",
    impact:
      "Engineering focus: token-based authentication, SQL seat-locking logic, JSP/Servlet architecture, and Red Hat development workflow.",
    tools: ["Java", "JSP", "Servlets", "MySQL", "Transactions"],
    github: "https://github.com/LAKSHMAN-NADAVAPALLI/MovieTicketBookingSystem",
    image: movieTicketImg,
  },
];

const Projects = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <SectionLabel>Projects</SectionLabel>
          <Title>Selected builds that show backend, full-stack, and cloud readiness.</Title>
          <Subtitle>
            Each project is written as a compact case study so hiring teams can quickly understand
            the problem, technical stack, and engineering contribution.
          </Subtitle>
        </Header>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Image src={project.image} alt={project.name} />
              <Content>
                <ProjectTitle>{project.name}</ProjectTitle>
                <Description>{project.description}</Description>
                <Impact>{project.impact}</Impact>
                <Tags>
                  {project.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </Tags>
                <LinkRow>
                  {project.live && (
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight size={16} />
                    </ProjectLink>
                  )}
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub <Github size={16} />
                    </ProjectLink>
                  )}
                </LinkRow>
              </Content>
            </Card>
          ))}
        </ProjectsGrid>
      </Inner>
    </Container>
  );
};

export default Projects;
