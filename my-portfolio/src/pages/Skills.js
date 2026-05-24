import React from "react";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import {
                                                   FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaLinux, FaGit, FaCode
} from "react-icons/fa";
import {
                                                    SiMongodb, SiJavascript, SiCplusplus, SiCss3, SiMysql, SiPostgresql, SiKubernetes, SiOracle, SiHtml5, SiTailwindcss, SiSpring
} from "react-icons/si";

// Styled Components
const Container = styled.div`
                                                     padding: 80px 20px;
                                                      text-align: center;
                                                       max-width: 1100px;
                                                        margin: auto;
`;

const Title = styled.h1`
                                                         font-size: 3rem;
                                                          font-weight: bold;
                                                           margin-bottom: 40px;
                                                            color: ${(props) => props.theme.textColor}; 
`;

const CategoryTitle = styled.h2`
                                                             font-size: 2rem;
                                                              margin: 40px 0 20px;
                                                               color: ${(props) => props.theme.textColor}; 
                                                                border-bottom: 2px solid ${(props) => props.theme.accent}30;
                                                                 padding-bottom: 10px;
`;

const SkillsGrid = styled.div`
                                                                   display: flex;
                                                                    flex-wrap: wrap;
                                                                     justify-content: center;
                                                                      gap: 20px;
`;

const SkillCard = styled(motion.div)`
                                                                       padding: 20px 10px;
                                                                        background-color: ${(props) => props.theme.skillCardBg};
                                                                         color: ${(props) => props.theme.skillTextColor};
                                                                          border-radius: 12px;
                                                                           width: 140px; /* Slightly smaller cards */
                                                                            height: 140px;
                                                                             display: flex;
                                                                               flex-direction: column;
                                                                                align-items: center;
                                                                                 justify-content: center;
                                                                                  gap: 10px;
                                                                                   font-weight: 500;
                                                                                    font-size: 0.9rem;
                                                                                     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                                                                                      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                                                                                       cursor: pointer;
                                                                                        border: 1px solid ${(props) => props.theme.skillCardBg}; /* Soft border */

                                                                                         &:hover {
                                                                                                                  transform: scale(1.08) translateY(-5px);
                                                                                                                    box-shadow: 0 8px 20px ${(props) => props.theme.accent}30;
                                                                                                                      background-color: ${(props) => props.theme.hoverBgColor};
                                                                                                                        color: ${(props) => props.theme.hoverTextColor};
                                                                                              }

                                                                                               svg {
                                                                                                                            // Use the accent color for icons in dark mode for a unified look
                                                                                                                              color: ${(props) => props.theme.mode === 'dark' ? props.theme.accent : props.theme.hoverTextColor} !important;
                                                                                                                                transition: color 0.3s ease;
                                                                                                   }
`;

const skillsData = {
                                                                                                     // 🌟 NEW TOP-PRIORITY CATEGORY FOR PLACEMENTS 🌟
                                                                                                       "Core Engineering ": [ 
                                                                                                                                       { name: "DSA & Algorithms", icon: <FaCode size={30} /> },
                                                                                                                                         { name: "System Design (LLD/HLD)", icon: <FaAws size={30} /> },
                                                                                                                                           { name: "Core Java", icon: <FaJava size={30} /> },
                                                                                                                                             { name: "SQL & Relational DBs", icon: <SiMysql size={30} /> },
                                                                                                                                               { name: "Aptitude & Reasoning", icon: <FaCode size={30} /> },
                                                                                                            ],
                                                                                                             "Full Stack & Frameworks": [
                                                                                                                                                  { name: "React", icon: <FaReact size={30} /> },
                                                                                                                                                    { name: "Node.js (Express)", icon: <FaNodeJs size={30} /> },
                                                                                                                                                      { name: "Spring Boot", icon: <SiSpring size={30} /> },
                                                                                                                                                        { name: "Python", icon: <FaPython size={30} /> }, 
                                                                                                                                                          { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> }
                                                                                                                   ],
                                                                                                                    "Cloud & DevOps": [
                                                                                                                                                              { name: "AWS", icon: <FaAws size={30} /> },
                                                                                                                                                                { name: "OCI", icon: <SiOracle size={30} /> }, 
                                                                                                                                                                  { name: "Docker", icon: <FaDocker size={30} /> },
                                                                                                                                                                    { name: "Kubernetes", icon: <SiKubernetes size={30} /> },
                                                                                                                                                                      { name: "Git & GitHub Actions", icon: <FaGit size={30} /> },
                                                                                                                          ],
                                                                                                                           "Databases & Tools": [
                                                                                                                                                                          { name: "MongoDB", icon: <SiMongodb size={30} /> },
                                                                                                                             { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
                                                                                                                               { name: "C++", icon: <SiCplusplus size={30} /> }, 
                                                                                                                                 { name: "Linux", icon: <FaLinux size={30} /> },
                                                                                                                                   { name: "JavaScript (ES6+)", icon: <SiJavascript size={30} /> }
                                                                                                                                 ]
};

const Skills = () => {
                                                                                                                                                                                                                                                                    const theme = useTheme();

                                                                                                                                    return (
                                                                                                                                         <Container>
                                                                                                                                                                                          <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                                                                                                                                                                                             >
                         <Title>Technical Skills</Title>
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
