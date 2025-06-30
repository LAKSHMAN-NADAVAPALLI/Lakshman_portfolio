import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import About from "./About";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/my resume photo.jpg"; // Ensure you have a profile.jpg in the assets folder
import Projects from "./Projects";
import Certifications from "./Certifications";
import Skills from "./Skills";

// Keyframe animation for color transition
const colorAnimation = keyframes`
  0% { color: #ff5733; }  /* Red */
  25% { color: #33ff57; } /* Green */
  50% { color: #3357ff; } /* Blue */
  75% { color: #ff33a8; } /* Pink */
  100% { color: #ff5733; } /* Red */
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Hero Section
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Styled Profile Image
const ProfileImage = styled.img`
  width: 140px;
  height: 160px;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Styled Heading
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

// Styled Animated Text
const AnimatedText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  animation: ${colorAnimation} 5s infinite alternate ease-in-out;
`;

// Styled Subheading
const Subheading = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.8;
  color: ${(props) => props.theme.secondaryText};
`;

// Styled Quote
const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme.mutedText};
  margin: 1rem 0;
  border-left: 3px solid ${(props) => props.theme.accent};
  padding-left: 1rem;
`;

// Styled Button
const CTAButton = styled(Link)`
  display: inline-block;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;

  &:hover {
    background: ${(props) => props.theme.accent};
    transform: translateY(-3px);
  }
`;

// Styled Scroll Down Indicator
const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 1rem;
  color: ${(props) => props.theme.mutedText};
  animation: fadeIn 2s infinite;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const Home = () => {
  return (
    <>
    <HeroSection>
      <ProfileImage src={profilePic} alt="Lakshman Profile" />
      <Heading>Hi, I'm Nadavapalli Venkata Pavan Sai Sri Lakshman</Heading>
      <Subheading>
        A passionate developer specializing in <strong>Full Stack Development</strong>, 
        <strong> Cloud Computing</strong>, and <strong>Big Data Analytics</strong>.  
        I thrive on solving complex problems and building innovative solutions using modern technologies.
      </Subheading>

      <Quote>
        "Code is like humor. When you have to explain it, it’s bad." — Cory House
      </Quote>

      <AnimatedText>
        <Typewriter
          words={[
            "Full Stack Developer",
            "MERN Stack Expert",
            "Cloud Enthusiast",
            "AI & Data Science",
            "Cybersecurity Learner",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={60}
          delaySpeed={1300}
        />
      </AnimatedText>

      <CTAButton to="/contact">Get in Touch</CTAButton>

      <ScrollDown>
  <ScrollLink to="about" smooth={true} duration={500}>
    ↓ Scroll Down for More ↓
  </ScrollLink>
</ScrollDown>

    </HeroSection>
     <About />
     <Skills/>
     <Projects/>
     <Certifications/>
     
     </>
  );
};

export default Home;
