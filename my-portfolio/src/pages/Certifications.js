import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  color: ${(props) => props.theme.skillTextColor};
`;

const CertificationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const Card = styled(motion.a)`
  background: ${(props) => props.theme.skillCardBg};
  color: ${(props) => props.theme.skillTextColor};
  width: 300px;
  padding: 20px;
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-8px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme.hoverTextColor};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
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
  font-size: 1.1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.skillTextColor};
`;

const EarnedDate = styled.p`
  font-size: 0.85rem;
  margin-top: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.skillTextColor};
`;

const ViewButton = styled.div`
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;

  svg {
    margin-left: 6px;
  }
`;

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    description: "Validated Oracle Generative AI skills and infrastructure fundamentals.",
    earned: "5 July 2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=37B3018A28F26088FC2C6908E504EECD620F7FE70241DA3F2A9AD509618BA44C",
    image: cImgO,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    description: "Validated AWS cloud services, pricing, and architecture fundamentals.",
    earned: "31 July 2024",
    link: "https://www.credly.com/badges/32387a49-c0e6-469a-973d-ba90f38aa031/public_url",
    image: cImg,
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    description: "Proficient in Red Hat Java enterprise application development.",
    earned: "18 September 2024",
    link: "https://www.credly.com/badges/9c686d86-d5c7-429b-9f4c-736b12ea40ea/public_url",
    image: cImgR,
  },
];

const Certifications = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Certifications</Title>
        <CertificationList>
          {certifications.map((cert, index) => (
            <Card
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageWrapper>
                <img src={cert.image} alt={cert.name} />
              </ImageWrapper>
              <CardContent>
                <CertTitle>{cert.name}</CertTitle>
                <Description>{cert.description}</Description>
                <EarnedDate>Earned: {cert.earned}</EarnedDate>
                <ViewButton>
                  View Credential <FaExternalLinkAlt />
                </ViewButton>
              </CardContent>
            </Card>
          ))}
        </CertificationList>
      </motion.div>
    </Container>
  );
};

export default Certifications;
