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

// 🎨 Themes for Light and Dark Modes
const lightTheme = {
  mode: "light",
  background: `
    radial-gradient(circle,rgb(45, 198, 225) 20%,rgb(26, 235, 189) 80%), 
    linear-gradient(135deg,rgb(45, 198, 225), #a8328b 50%, #ff7eb3 100%)`,
  navBackground: "#ffffff", // Clean white for professional contrast
  text: "#1c1c1c", // Deep gray for sharp contrast
  buttonBg: "#ff7eb3", // Warm pink for a vibrant look
  buttonText: "#ffffff", // White for clean readability
  accent: "#f4d03f", // Bright yellow for a pop of contrast
};


const darkTheme = {
  mode: "dark",
  background: "#121212",
  navBackground: "#1c1c1c",
  text: "#ffffff",
  buttonBg: "#bb86fc",
  buttonText: "#121212",
  accent: "#9a67ea",
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
    document.title = "My Portfolio";
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
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths to Home */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
