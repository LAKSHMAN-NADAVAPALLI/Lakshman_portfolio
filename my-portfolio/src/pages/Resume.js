// src/pages/Resume.js
import React from "react";
import styled from "styled-components";
import resumePdf from "../assets/Venkat_Resume.pdf"; // Import PDF from assets folder

const ResumeContainer = styled.div`
  max-width: 500%;
  margin: 0 auto;   // Center the container
  padding: 20px;
  text-align: center;
`;

const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ResumeFrame = styled.iframe`
  width: 300%;           // Set width to 200% of the container
  height: 180vh;          // Set height to 90% of the viewport height for better visibility
  border: none;
  box-shadow: 0 0 20px rgba(11, 111, 110, 0.1);
  display: block;
  margin: 0 auto;        // Center the iframe horizontally
  transform: translateX(-35%);  // Shift iframe left by half of its width
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeTitle>Lakshman Resume</ResumeTitle>

      {/* Use the imported resumePdf */}
      <ResumeFrame
        title="Lakshman's Resume"
        src={resumePdf} // Reference the imported PDF here
      ></ResumeFrame>

      <DownloadButton href={resumePdf} download>
        📥 Download Resume
      </DownloadButton>
    </ResumeContainer>
  );
};

export default Resume;
