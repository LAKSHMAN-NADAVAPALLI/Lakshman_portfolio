import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import About from "./About";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import profilePic from "../assets/my resume photo.jpg";
import resumePdf from "../assets/Lakshman_SDE_RESUME.pdf";

const HeroSection = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: clamp(3rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background:
    linear-gradient(135deg, ${(props) => props.theme.accentSoft}, transparent 35%),
    ${(props) => props.theme.background};
`;

const Wrapper = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(280px, 0.82fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.9rem 0.9rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 999px;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.accent};
  font-size: 0.92rem;
  font-weight: 750;
`;

const Headline = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2.55rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: 0;
`;

const AccentText = styled.span`
  color: ${(props) => props.theme.accent};
`;

const Subtext = styled.p`
  max-width: 690px;
  margin: 1.35rem 0 0;
  color: ${(props) => props.theme.mutedText};
  font-size: clamp(1rem, 2vw, 1.18rem);
  line-height: 1.8;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  max-width: 620px;
  margin: 2rem 0;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.cardShadow};

  strong {
    display: block;
    color: ${(props) => props.theme.textColor};
    font-size: 1.25rem;
  }

  span {
    display: block;
    margin-top: 0.25rem;
    color: ${(props) => props.theme.mutedText};
    font-size: 0.9rem;
    line-height: 1.45;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px ${(props) => props.theme.accentSoft};
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 46px;
  padding: 0 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.textColor};
  font-weight: 750;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.accent};
  }
`;

const ProfilePanel = styled.aside`
  position: relative;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

const ProfileNote = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme.surfaceSoft};
  color: ${(props) => props.theme.mutedText};
  line-height: 1.65;
  font-size: 0.94rem;

  strong {
    color: ${(props) => props.theme.textColor};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.65rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.mutedText};
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
    transform: translateY(-2px);
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <Wrapper>
          <div>
            <Eyebrow>Software Engineer | Java | Spring Boot | MERN | AWS</Eyebrow>
            <Headline>
              Building reliable full-stack products with a <AccentText>backend-first</AccentText> mindset.
            </Headline>
            <Subtext>
              I am Nadavapalli Lakshman, a B.Tech CSE graduate focused on backend engineering,
              scalable APIs, cloud fundamentals, and practical problem solving. I build clean,
              deployed software that makes my engineering decisions easy to review.
            </Subtext>

            <Metrics>
              <Metric>
                <strong>9.2 CGPA</strong>
                <span>B.Tech CSE Graduate, K.L. University</span>
              </Metric>
              <Metric>
                <strong>3+ Projects</strong>
                <span>Full-stack, cloud, and security-focused builds</span>
              </Metric>
              <Metric>
                <strong>3 Certifications</strong>
                <span>AWS, Oracle Cloud, and Red Hat credentials</span>
              </Metric>
            </Metrics>

            <ButtonRow>
              <PrimaryButton to="/projects">
                View Projects <ArrowRight size={18} />
              </PrimaryButton>
              <SecondaryButton href={resumePdf} download>
                <Download size={18} /> Download Resume
              </SecondaryButton>
            </ButtonRow>
          </div>

          <ProfilePanel>
            <ProfileImage src={profilePic} alt="Nadavapalli Lakshman" />
            <ProfileNote>
              <strong>Role focus:</strong> Software Engineer, Java Backend Developer,
              Full Stack Developer, and Cloud Engineering roles.
            </ProfileNote>
            <SocialRow>
              <IconLink href="mailto:2200030245cseh@gmail.com" aria-label="Email Lakshman">
                <Mail size={18} />
              </IconLink>
              <IconLink
                href="https://github.com/LAKSHMAN-NADAVAPALLI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshman's GitHub"
              >
                <Github size={18} />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/nadavapalli-venkata-pavan-sai-sri-lakshman-53366828a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshman's LinkedIn"
              >
                <Linkedin size={18} />
              </IconLink>
            </SocialRow>
          </ProfilePanel>
        </Wrapper>
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
