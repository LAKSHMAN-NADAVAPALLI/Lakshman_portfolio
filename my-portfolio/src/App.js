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

// ✅ 1. IMPORT THE NEW CURSOR COMPONENT
import CustomCursor from "./components/CustomCursor";

// 🌐 Global styles
const GlobalStyle = createGlobalStyle`
  /* ✅ 2. ADD THIS BLOCK TO HIDE THE DEFAULT CURSOR */
  * {
    cursor: none !important;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor || props.theme.text};
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth; 
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
      ? `#ffffffff`
      : "#59555ff"};
  color: ${(props) => (props.theme.mode === "light" ? "#111" : "#eee")};
  text-align: center;
  padding: 1rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600; 
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.span`
  color: #e6eb54ff};
  font-weight: 200;
`;

function App() {
  // 🌗 Theme toggle logic with persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  /*
   * We need 'theme.mode' (the string "light" or "dark")
   * not 'theme' (the whole object)
   */
  const themeMode = useMemo(() => theme.mode, [theme]);

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
    <ThemeProvider theme={theme}> {/* Pass the full theme object here */}
      <GlobalStyle />
      
      {/* ✅ 3. ADD THE CUSTOM CURSOR COMPONENT HERE */}
      <CustomCursor /> 

      <Container>
        {/* Pass the themeMode string ("light" or "dark") here */}
        <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />

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