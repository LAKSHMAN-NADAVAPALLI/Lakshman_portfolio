import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaLinux, FaWindows, FaGit
} from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiCplusplus, SiCss3, SiMysql, SiPostgresql, SiDjango,
  SiJirasoftware, SiTableau, SiKubernetes, SiOracle, SiHtml5, SiTailwindcss
} from "react-icons/si";

// Styled Components
const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin: 40px 0 20px;
  color: ${(props) => props.theme.skillTextColor};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const SkillCard = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.skillCardBg};
  color: ${(props) => props.theme.skillTextColor};
  border-radius: 16px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.hoverBgColor}; // Change hover background color
    color: ${(props) => props.theme.hoverTextColor}; // Change hover text color
  }


  

  /* Animation on load */
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  
  /* Keyframes for the slight hover animation */
  @keyframes hover-move {
    0% {
      transform: scale(1) translateY(0);
    }
    50% {
      transform: scale(1.05) translateY(-5px);
    }
    100% {
      transform: scale(1.1) translateY(-10px);
    }
  }
`;

const skillsData = {
  "Frontend": [
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={40} color="#2965F1" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> }
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Django", icon: <SiDjango size={40} color="#092E20" /> },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> }
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
    { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} color="#326CE5" /> },
    { name: "Oracle Cloud", icon: <SiOracle size={40} color="#F80000" /> }
  ],
  "Languages": [
    { name: "C", icon: <SiCplusplus size={40} color="#A8B9CC" /> }, // Reuse C++ icon for C
    { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "R", icon: <SiPostgresql size={40} color="#276DC3" /> } // No R icon, using PostgreSQL blue
  ],
  "Tools": [
    { name: "Git", icon: <FaGit size={40} color="#F05032" /> },
    { name: "Windows", icon: <FaWindows size={40} color="#0078D6" /> },
    { name: "Linux", icon: <FaLinux size={40} color="#FCC624" /> },
    { name: "Jira", icon: <SiJirasoftware size={40} color="#0052CC" /> },
    { name: "Tableau", icon: <SiTableau size={40} color="#E97627" /> }
  ]
};

const Skills = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Skills</Title>

        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsGrid>
              {skills.map((skill, idx) => (
                <SkillCard
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Skills;
