import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Experience from "./Experience";

import About from "./About";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Skills from "./Skills";

import profilePic from "../assets/my resume photo.jpg";

/* ---------------- Animations ---------------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const skillColors = keyframes`
  0% { color: #ff2f00ff; }
  25% { color: #00ff2fff; }
  50% { color: #ff0090ff; }
  75% { color: #00ffddff; }
  100% { color: #ff2f00ff; }
`;

/* ---------------- Layout ---------------- */

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  padding: 3rem 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextBlock = styled.div``;

/* ---------------- Text ---------------- */

const Headline = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.accent};

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const Subtext = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textColor};

  @media (max-width: 900px) {
    margin: auto;
    margin-bottom: 1.5rem;
  }
`;

const Focus = styled.div`
  font-size: 2.04rem;
  font-weight: 900;
  margin-bottom: 2rem;
  animation: ${skillColors} 6s infinite;
`;

/* ---------------- Button ---------------- */

const CTA = styled(Link)`
  display: inline-block;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor || "#000"};
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: #fff;
    transform: translateY(-3px);
  }
`;



/* ---------------- Image ---------------- */

const ImageStack = styled.div`
  position: relative;
  width: 320px;
  height: 380px;
  margin-left: auto;

  @media (max-width: 900px) {
    margin: 2rem auto 0;
  }
`;

const MainImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 260px;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  z-index: 2;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
`;

/* ---------------- Scroll ---------------- */

const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

/* ---------------- Component ---------------- */

const Home = () => {
  return (
    <>
      <HeroSection>
        <Wrapper>
          <TextBlock>
            <Headline>
  Hi, I'm Lakshman
</Headline>

<Subtext>
  Aspiring Software Engineer specializing in scalable backend development,
  cloud technologies, and modern full stack engineering with a strong focus
  on performance, system design, and real-world problem solving.
</Subtext>

            <Focus>
              <Typewriter
                words={[
                  "DSA & Problem Solving",
                  "Java • Spring Boot • MERN",
                  "AWS & Cloud Engineering",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </Focus>

            <CTA to="/contact">Contact Me</CTA>
          </TextBlock>

          <ImageStack>
            <MainImage src={profilePic} alt="Lakshman Profile" />
          </ImageStack>
        </Wrapper>

        <ScrollDown>
          <ScrollLink to="about" smooth duration={500}>
            Scroll ↓
          </ScrollLink>
        </ScrollDown>
      </HeroSection>

      <About />
      
      <Experience />

      <Skills />
      

      <Projects />
      <Certifications />
    </>
  );
};

export default Home;
