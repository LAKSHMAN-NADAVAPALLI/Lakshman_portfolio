import React, { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import { darkTheme, lightTheme } from "./themes";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    transition: background 0.25s ease, color 0.25s ease;
  }

  a {
    color: inherit;
  }

  button,
  a {
    font-family: inherit;
  }

  ::selection {
    background: ${(props) => props.theme.accentSoft};
    color: ${(props) => props.theme.textColor};
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.mutedText};
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const FooterText = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
`;

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  const themeMode = useMemo(() => theme.mode, [theme]);

  const toggleTheme = () => {
    const newTheme = theme.mode === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.mode);
  };

  useEffect(() => {
    document.title = "Nadavapalli Lakshman | Software Engineer";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomCursor />
      <Container>
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
          &copy; {new Date().getFullYear()} <FooterText>Lakshman's Portfolio</FooterText>. Built with React.
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
