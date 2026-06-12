import React from "react";
import styled from "styled-components";
import { Download } from "lucide-react";
import resumePdf from "../assets/Lakshman_SDE_RESUME.pdf";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.background};
`;

const Inner = styled.div`
  width: min(1000px, 100%);
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const SectionLabel = styled.p`
  margin: 0 0 0.7rem;
  color: ${(props) => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.12;
  font-weight: 900;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 44px;
  padding: 0 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  font-weight: 800;
  text-decoration: none;
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  min-height: 78vh;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const Resume = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <div>
            <SectionLabel>Resume</SectionLabel>
            <Title>Software Engineer Resume</Title>
          </div>
          <DownloadButton href={resumePdf} download>
            <Download size={18} /> Download PDF
          </DownloadButton>
        </Header>

        <ResumeFrame title="Lakshman's Resume" src={resumePdf} />
      </Inner>
    </Container>
  );
};

export default Resume;
