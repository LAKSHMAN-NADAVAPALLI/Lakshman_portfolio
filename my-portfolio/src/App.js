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
  background: "#3446eb",
  navBackground: "#ffff",
  text: "#212529",
  buttonBg: "#007bff",
  buttonText: "#fff",
  accent: "#0056b3",
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
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.background};
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
