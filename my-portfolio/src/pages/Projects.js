import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBolt } from "react-icons/fa"; // Added FaBolt back

// Import project images
import jobPortalImg from "../assets/ojbscreen.png";
import movieTicketImg from "../assets/online-movie-ticketing-system.jpg";
import cyberThreatImg from "../assets/cyberthreatdetectionsystem.jpeg";

// Styled Components (using Certifications.js as a base)
const Container = styled.div`
  /* Style from Certifications.js */
  padding: 50px; 
  text-align: center;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h1`
  /* Style from Certifications.js */
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.theme.skillTextColor}; 
`;

const ProjectsGrid = styled.div`
  /* Renamed from CertificationList */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const Card = styled(motion.a)`
  /* Style from Certifications.js */
  background: ${(props) => props.theme.skillCardBg};
  color: ${(props) => props.theme.skillTextColor};
  width: 300px; /* Using cert card width */
  padding: 20px; /* Using cert card padding */
  border-radius: 16px; /* Using cert card radius */
  text-decoration: none;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    /* Hover from Certifications.js */
    transform: scale(1.05) translateY(-8px); 
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme.hoverTextColor};
  }
`;

const ImageWrapper = styled.div`
  /* Style from Certifications.js */
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    /* Using 'cover' from Projects.js, as it's better for project images */
    object-fit: cover; 
    transition: transform 0.5s ease; /* Added transition from Projects.js */
    ${Card}:hover & {
      transform: scale(1.1); /* Added hover-zoom from Projects.js */
    }
  }
`;

const CardContent = styled.div`
  /* Style from Certifications.js but with text-align: left */
  text-align: left; 
  margin-top: 15px;
`;

const ProjectTitle = styled.h2`
  /* Renamed from CertTitle */
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor}; /* Added from Projects.js */
  margin-bottom: 5px; /* Added from Projects.js */
`;

// --- Added back from original Projects.js ---
const KeyFeature = styled.p`
  font-size: 0.95rem;
  margin: 8px 0;
  font-weight: 600;
  color: ${(props) => props.theme.accent};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 15px;
  min-height: 40px;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.accent}20;
  color: ${(props) => props.theme.accent};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;
// --- End of components from Projects.js ---

const Description = styled.p`
  /* Style from Certifications.js */
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.skillTextColor};
`;

const ViewButton = styled.div`
  /* Style from Certifications.js */
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;

  svg {
    margin-left: 6px;
  }
`;

// Project data from your first code block
const projects = [
  {
    name: "AI-Powered Cyber Threat Detection System",
    description:
      "Full-stack system for real-time security threat analysis in network logs.",
    feature:
      "Key Insight: Implemented Flask AI backend for high-throughput model inference.",
    tools: ["Java", "Spring Boot", "Flask (Python)", "MongoDB", "React"],
    link: "https://nadavapalli-lakshman-ai-cyber-threat-detection.vercel.app/",
    image: cyberThreatImg,
  },
  {
    name: "Scalable Online Job Portal",
    description:
      "MERN Stack job board focused on low latency and scalability.",
    feature:
      "Key Insight: Developed Recommendation Engine using Node.js and MongoDB Aggregation.",
    tools: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "MERN Stack",
      "Resume Parsing",
    ],
    link: "https://nadavapalli-lakshman-online-job-portal-using-react-lapy.vercel.app/",
    image: jobPortalImg,
  },
  {
    name: "Secure Movie Ticket Booking System",
    description:
      "A robust system emphasizing security and transactional integrity.",
    feature:
      "Key Insight: Token-based Authentication and SQL transaction management for seat locking.",
    tools: ["JSP", "Servlets", "MySQL", "Red Hat CodeReady", "Java"],
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
        <Title>Projects</Title> {/* Updated Title */}
        <ProjectsGrid> {/* Updated Component */}
          {projects.map((project, index) => ( /* Mapping projects */
            <Card
              key={index}
              href={project.link} /* Using project link */
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageWrapper>
                <img src={project.image} alt={project.name} /> {/* Using project image/name */}
              </ImageWrapper>
              <CardContent>
                <ProjectTitle>{project.name}</ProjectTitle> {/* Using ProjectTitle */}
                
                {/* Added KeyFeature, Description, and Tags back in */}
                <KeyFeature>
                  <FaBolt size={14} /> {project.feature}
                </KeyFeature>
                <Description>{project.description}</Description>
                <TagContainer>
                  {project.tools.map((tool, tagIndex) => (
                    <TechTag key={tagIndex}>{tool}</TechTag>
                  ))}
                </TagContainer>

                <ViewButton>
                  View Project <FaExternalLinkAlt /> {/* Updated text */}
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