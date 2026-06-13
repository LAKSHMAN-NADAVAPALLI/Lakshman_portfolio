import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import awsImg from "../assets/image1.png";
import redHatImg from "../assets/image2.png";
import oracleImg from "../assets/image3.png";

const Container = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 4rem);
  background: ${(props) => props.theme.surface};
  border-top: 1px solid ${(props) => props.theme.border};
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 2.5rem;
`;

const SectionLabel = styled.p`
  margin: 0 0 0.7rem;
  color: ${(props) => props.theme.accent};
  font-size: 1.9rem;
  font-weight: 800;
  text-transform: uppercase;
  
  display: inline-block;
  border-bottom: 3px solid ${(props) => props.theme.accent};
  padding-bottom: 4px;
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.12;
  font-weight: 900;
`;

const Subtitle = styled.p`
  margin: 1rem 0 0;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.75;
  font-size: 1.04rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1.25rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.accent};
  }
`;

const BadgeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  padding: 0.7rem;
  margin-bottom: 1rem;
`;

const CertTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.05rem;
  line-height: 1.4;
`;

const Description = styled.p`
  margin: 0.7rem 0 0;
  color: ${(props) => props.theme.mutedText};
  line-height: 1.65;
  font-size: 0.94rem;
`;

const Meta = styled.span`
  margin-top: auto;
  padding-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(props) => props.theme.accent};
  font-weight: 800;
  font-size: 0.88rem;
`;

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    description: "Validated Oracle Generative AI services and cloud infrastructure fundamentals.",
    earned: "Earned July 5, 2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=37B3018A28F26088FC2C6908E504EECD620F7FE70241DA3F2A9AD509618BA44C",
    image: oracleImg,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    description: "Validated AWS cloud services, pricing, security, and architecture fundamentals.",
    earned: "Earned July 31, 2024",
    link: "https://www.credly.com/badges/32387a49-c0e6-469a-973d-ba90f38aa031/public_url",
    image: awsImg,
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    description: "Validated Java enterprise application development using Red Hat technologies.",
    earned: "Earned September 18, 2024",
    link: "https://www.credly.com/badges/9c686d86-d5c7-429b-9f4c-736b12ea40ea/public_url",
    image: redHatImg,
  },
];

const Certifications = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <SectionLabel>Certifications</SectionLabel>
          <Title>Credentials that support my cloud and enterprise development foundation.</Title>
          <Subtitle>
            These certifications show verified exposure to
            cloud services, enterprise Java, and AI infrastructure.
          </Subtitle>
        </Header>

        <Grid>
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <BadgeImage src={cert.image} alt={cert.name} />
              <CertTitle>{cert.name}</CertTitle>
              <Description>{cert.description}</Description>
              <Meta>
                {cert.earned} <ArrowUpRight size={15} />
              </Meta>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Container>
  );
};

export default Certifications;
