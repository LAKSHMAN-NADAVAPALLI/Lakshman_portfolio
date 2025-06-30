import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import jobPortalImg from "../assets/online-job-portal.jpg";
import movieTicketImg from "../assets/online-movie-ticketing-system.jpg";
import cyberThreatImg from "../assets/cyberthreatdetectionsystem.jpeg"



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
  color: ${(props) => props.theme.textColor};
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.a`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.textColor};
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 10px;
`;

const projects = [


  {
    name: "AI-Powered Real-Time Cyber Threat Detection System",
    description:
      "Developed a real-time cyber threat detection system using AI for anomaly detection and behavioral analysis. Integrated Flask-based AI models with Spring Boot backend for seamless threat prevention and dynamic firewall updates.",
    tools: "Spring Boot (Java) Backend, Flask AI (Python), PyCharm, React.js Frontend, MongoDB Database",
    link: "https://nadavapalli-lakshman-ai-cyber-threat-detection.vercel.app/", // Replace with actual link if different
    image: cyberThreatImg
},


{
    name: "Online Job Portal",
    description:
      "Built a job portal allowing job seekers to search and apply for jobs. Integrated MongoDB for efficient data management and enhanced recommendation features.",
    tools: "MERN Stack (MongoDB, Express.js, React, Node.js), Visual Studio Code",
    link: "https://nadavapalli-lakshman-online-job-portal-using-react-lapy.vercel.app/",
    image: jobPortalImg
  },
  {
    name: "Movie Ticket Booking System",
    description:
      "Developed a booking system with secure login, seat selection, and payment integration. Improved security with token-based authentication and encrypted data storage.",
    tools: "JSP, MySQL, Red Hat CodeReady Studio",
    link: "https://github.com/LAKSHMAN-NADAVAPALLI/MovieTicketBookingSystem/tree/main/MovieTicketBookingSystem",
    image: movieTicketImg
  },
  




];

function Projects() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <ImageWrapper>
                <img src={project.image} alt={project.name} />
              </ImageWrapper>
              <ProjectTitle>{project.name}</ProjectTitle>
              <Description>{project.description}</Description>
              <Description><strong>Tools:</strong> {project.tools}</Description>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </Container>
  );
}

export default Projects;
