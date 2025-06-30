import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// 🎨 Themes for Light and Dark Modes
// lightTheme.js
// lightTheme.js
export const lightTheme = {
  mode: "light",
 background: `
   radial-gradient(circle at 15% 25%, rgba(251, 131, 149, 0.35) 0%, transparent 45%),
    radial-gradient(circle at 85% 75%, rgba(173, 216, 230, 0.3) 0%, transparent 45%),
    linear-gradient(120deg, rgba(240, 240, 245, 0.92) 0%, rgba(255, 255, 255, 0.98) 100%);
  
  
`,



navBackground: `linear-gradient(to right, rgba(255, 245, 220, 0.95), rgba(255, 225, 240, 0.95), rgba(220, 240, 255, 0.95))`,


 
  textColor: "#1c1c1c",
  buttonBg: "#ff7eb3", 
  buttonTextColor: "#ffffff", 
  accent: "#f4d03f", 
  skillCardBg: "#ffffff", 
  skillTextColor: "#000000", 
  hoverBgColor: "#e0f7fa", // soft aqua blue – vibrant but not harsh
hoverTextColor: "#0d47a1", // deep blue – readable, professional
};

// darkTheme.js
export const darkTheme = {
  mode: "dark",
  background: "#121212",
  navBackground: "#1c1c1c",
  text: "#ffffff",
  
  buttonBg: "#bb86fc",
  buttonText: "#121212",
  accent: "#9a67ea",
  skillCardBg: "#1e1e1e", // Dark background for skill cards
  skillTextColor: "#ffffff", // White text for skill cards
  hoverBgColor: "#2d2d2d", // elegant dark grey – subtle elevation
hoverTextColor: "#80d8ff", // neon light blue – eye-catching on dark

   
};


// 📌 Global Styles for Consistency
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
    background-size: ${(props) =>
      props.theme.mode === "light" ? "400% 400%" : "auto"};
    animation: ${(props) =>
      props.theme.mode === "light" ? "moveGradient 15s ease infinite" : "none"};
    color: ${(props) => props.theme.text};
    transition: all 0.5s ease-in-out;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  // Memoize the theme to prevent unnecessary re-renders
  const themeMode = useMemo(() => theme, [theme]);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newTheme = theme.mode === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.mode);
  };

  useEffect(() => {
    document.title = "NADAVAPALLI VENKATA PAVAN SAI SRI LAKSHMAN";
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Container>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths to Home */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
