import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import cImg from "../assets/image1.png";
import cImgR from "../assets/image2.png";
import cImgO from "../assets/image3.png";

const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.theme.textColor};
`;

const CertificationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.a`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.textColor};
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const CertTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.secondaryText};
`;

const EarnedDate = styled.p`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.secondaryText};
  font-weight: bold;
`;

const ViewButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }

  svg {
    margin-left: 5px;
  }
`;

const certifications = [
  {
    name: "Oracle Certified Java SE 11 Developer",
    description: "Obtained the Oracle Certified Java SE 11 Developer certification, demonstrating advanced Java programming skills.",
    earned: "5 July 2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=37B3018A28F26088FC2C6908E504EECD620F7FE70241DA3F2A9AD509618BA44C",
    image: cImgO // Replace with actual image path
  },
  {
    name: "AWS Certified Cloud Practitioner",
    description: "Earned the AWS Certified Cloud Practitioner certification, validating expertise in cloud fundamentals, AWS core services, security, architecture, pricing, and support.",
    earned: "31 July 2024",
    link: "https://www.credly.com/badges/32387a49-c0e6-469a-973d-ba90f38aa031/public_url",
    image: cImg // Replace with actual image path
  },

  {
    name: "Red Hat Certified Enterprise Application Developer",
    description: "Earned the Red Hat Certified Enterprise Application Developer certification, demonstrating proficiency in building, deploying, and managing enterprise Java applications using Red Hat technologies.",
    earned: "September 18, 2024",
    link: "https://www.credly.com/badges/9c686d86-d5c7-429b-9f4c-736b12ea40ea/public_url",
    image: cImgR // Replace with actual image path
  },

];

const Certifications = () => {
  return (
    <Container>
      <Title>Certifications</Title>
      <CertificationList>
        {certifications.map((cert, index) => (
          <Card key={index} href={cert.link} target="_blank" rel="noopener noreferrer">
            <ImageWrapper>
              <img src={cert.image} alt={cert.name} />
            </ImageWrapper>
            <CardContent>
              <CertTitle>{cert.name}</CertTitle>
              <Description>{cert.description}</Description>
              <EarnedDate><strong>Earned:</strong> {cert.earned}</EarnedDate>
              <ViewButton>
                View Credential <FaExternalLinkAlt />
              </ViewButton>
            </CardContent>
          </Card>
        ))}
      </CertificationList>
    </Container>
  );
};

export default Certifications;
