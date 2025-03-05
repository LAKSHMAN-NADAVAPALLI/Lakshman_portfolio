import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/my photo.jpeg"; // Ensure you have a profile.jpg in the assets folder

// Keyframe animation for color transition
const colorAnimation = keyframes`
  0% { color: #ff5733; }  /* Red */
  25% { color: #33ff57; } /* Green */
  50% { color: #3357ff; } /* Blue */
  75% { color: #ff33a8; } /* Pink */
  100% { color: #ff5733; } /* Red */
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
`;

// Styled Profile Image
const ProfileImage = styled.img`
  width: 120px;
  height: 140px;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Styled Heading
const Heading = styled.h1`
  font-size: 2.8rem;
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
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  max-width: 700px;
  line-height: 1.6;
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

  &:hover {
    background: ${(props) => props.theme.accent};
    transform: translateY(-3px);
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <ProfileImage src={profilePic} alt="Lakshman Profile" />
      <Heading>Hi, I'm Nadavapalli Venkata Pavan Sai Sri Lakshman</Heading>
      <Subheading>
        A passionate developer specializing in <strong>Full Stack Development</strong>, <strong>Cloud Computing</strong>, and <strong>Big Data Analytics</strong>. I love solving complex problems with innovative solutions.
      </Subheading>
      <AnimatedText>
        <Typewriter
          words={["Full Stack Developer", "MERN Stack", "Cloud Enthusiast", "AI & Data Science"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={90}  // Smooth typing speed
          deleteSpeed={60} // Balanced deleting speed
          delaySpeed={1300} // Pause between words
        />
      </AnimatedText>
      <CTAButton to="/contact">Get in Touch</CTAButton>
    </HeroSection>
  );
};

export default Home;
