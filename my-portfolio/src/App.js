import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Import components and pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// ✅ Import themes from your separate file
import { lightTheme, darkTheme } from "./themes";

// 🌐 Global styles
const GlobalStyle = createGlobalStyle`
  @keyframes moveGradient {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.background};
    background-size: ${(props) => props.theme.mode === "light" ? "400% 400%" : "auto"};
    animation: ${(props) => props.theme.mode === "light" ? "moveGradient 15s ease infinite" : "none"};
    color: ${(props) => props.theme.textColor || props.theme.text};
    transition: all 0.5s ease-in-out;
  }
`;

// Layout containers
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background: ${(props) =>
    props.theme.mode === "light"
      ? `linear-gradient(to right, rgba(239, 212, 144, 0.95), rgba(243, 178, 210, 0.95), rgba(189, 219, 243, 0.95))`
      : "#595555ff"};
  color: ${(props) => (props.theme.mode === "light" ? "#111" : "#eee")}; /* Darker for light mode */
  text-align: center;
  padding: 1rem 0.8rem; /* Increased vertical padding */
  font-size: 1.5rem;  /* Larger font */
  font-weight: 1000;   /* Bold text */
  
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;



const FooterText = styled.span`
  color: #ffff};
  font-weight: 600;
`;

function App() {
  // 🌗 Theme toggle logic with persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  const themeMode = useMemo(() => theme, [theme]);

  const toggleTheme = () => {
    const newTheme = theme.mode === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.mode);
  };

  // Set page title
  useEffect(() => {
    document.title = "NADAVAPALLI LAKSHMAN";
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Container>
        <Navbar toggleTheme={toggleTheme} />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContentWrapper>
        <Footer>
          &copy; {new Date().getFullYear()} <FooterText> Lakshman's Portfolio </FooterText> | All rights reserved.
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
