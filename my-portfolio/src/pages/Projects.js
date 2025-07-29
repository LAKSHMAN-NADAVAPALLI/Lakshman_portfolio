import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import jobPortalImg from "../assets/online-job-portal.jpg";
import movieTicketImg from "../assets/online-movie-ticketing-system.jpg";
import cyberThreatImg from "../assets/cyberthreatdetectionsystem.jpeg";

// Styled Components
const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.theme.skillTextColor};
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const Card = styled(motion.a)`
  background: ${(props) => props.theme.skillCardBg};
  color: ${(props) => props.theme.skillTextColor};
  width: 300px;
  padding: 20px;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-8px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme.hoverTextColor};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.skillTextColor};
`;

const Tools = styled.p`
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 5px;
  color: ${(props) => props.theme.skillTextColor};
`;

const ViewButton = styled.div`
  margin-top: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.9rem;

  svg {
    margin-left: 6px;
  }
`;

const projects = [
  {
    name: "AI-Powered Cyber Threat Detection System",
    description:
      "AI-powered system for real-time threat detection using Flask AI + Spring Boot.",
    tools: "Java, Spring Boot, Flask (Python), MongoDB, React",
    link: "https://nadavapalli-lakshman-ai-cyber-threat-detection.vercel.app/",
    image: cyberThreatImg,
  },
  {
    name: "Online Job Portal",
    description:
      "MERN Stack job portal with resume parsing, recommendation engine.",
    tools: "MongoDB, Express.js, React, Node.js",
    link: "https://nadavapalli-lakshman-online-job-portal-using-react-lapy.vercel.app/",
    image: jobPortalImg,
  },
  {
    name: "Movie Ticket Booking System",
    description:
      "Secure movie booking with token-based auth, seat mapping, payments.",
    tools: "JSP, MySQL, Red Hat CodeReady Studio",
    link: "https://github.com/LAKSHMAN-NADAVAPALLI/MovieTicketBookingSystem",
    image: movieTicketImg,
  },
];

const Projects = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageWrapper>
                <img src={project.image} alt={project.name} />
              </ImageWrapper>
              <CardContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <Description>{project.description}</Description>
                <Tools>
                  <strong>Tools:</strong> {project.tools}
                </Tools>
                <ViewButton>
                  View Project <FaExternalLinkAlt />
                </ViewButton>
              </CardContent>
            </Card>
          ))}
        </ProjectsGrid>
      </motion.div>
    </Container>
  );
};

export default Projects;
