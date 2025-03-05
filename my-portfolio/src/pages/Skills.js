import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaLinux, FaWindows, FaGit 
} from "react-icons/fa";
import { 
  SiMongodb, SiJavascript, SiCplusplus, SiCss3, SiMysql, SiPostgresql, SiDjango, SiJirasoftware, 
  SiTableau, SiKubernetes, SiOracle
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
  margin-bottom: 30px;
`;

const SkillsList = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Skill = styled(motion.div)`
  padding: 25px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border-radius: 20px;
  font-size: 1.5rem;
  width: 200px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.15) rotate(8deg);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }
`;

const skills = [
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
  { name: "Java", icon: <FaJava size={50} color="#007396" /> },
  { name: "C++", icon: <SiCplusplus size={50} color="#00599C" /> },
  { name: "CSS", icon: <SiCss3 size={50} color="#2965F1" /> },
  { name: "AWS", icon: <FaAws size={50} color="#FF9900" /> },
  { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#336791" /> },
  { name: "Django", icon: <SiDjango size={50} color="#092E20" /> },
  { name: "Tableau", icon: <SiTableau size={50} color="#E97627" /> },
  { name: "Docker", icon: <FaDocker size={50} color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color="#326CE5" /> },
  { name: "Git", icon: <FaGit size={50} color="#F05032" /> },
  { name: "Windows", icon: <FaWindows size={50} color="#0078D6" /> },
  { name: "Linux", icon: <FaLinux size={50} color="#FCC624" /> },
  { name: "Jira", icon: <SiJirasoftware size={50} color="#0052CC" /> },
  { name: "Oracle Cloud", icon: <SiOracle size={50} color="#F80000" /> }
];

const Skills = () => {
  return (
    <Container>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <Title>Skills</Title>
        <SkillsList>
          {skills.map((skill, index) => (
            <Skill 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 10, transition: { yoyo: 5 } }}
            >
              {skill.icon}
              {skill.name}
            </Skill>
          ))}
        </SkillsList>
      </motion.div>
    </Container>
  );
};

export default Skills;
