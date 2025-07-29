import React from "react";
import styled from "styled-components";
import resumePdf from "../assets/NadavapalliLakshman_RESUME.pdf";

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
`;

const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.accent || "#ff7eb3"};
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 150vh;
  border: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 28px;
  background-color: ${(props) => props.theme.buttonBg || "#007bff"};
  color: ${(props) => props.theme.buttonTextColor || "#fff"};
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hoverBgColor || "#0056b3"};
    color: ${(props) => props.theme.hoverTextColor || "#fff"};
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeTitle>My Resume</ResumeTitle>

      <ResumeFrame
        title="Lakshman's Resume"
        src={resumePdf}
      />

      <DownloadButton href={resumePdf} download>
        📥 Download Resume
      </DownloadButton>
    </ResumeContainer>
  );
};

export default Resume;
