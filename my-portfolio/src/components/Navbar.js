import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // Moon and Sun icons

// Styled Navbar Container
const Nav = styled.nav`
  background: ${(props) => props.theme.navBackground};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styled Nav Links
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

// Styled Theme Toggle Button
const ThemeButton = styled(motion.button)`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${(props) => props.theme.accent};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Navbar = ({ toggleTheme, themeMode }) => {
  return (
    <Nav>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      
      {/* Animated Theme Button */}
      <ThemeButton
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        initial={{ rotate: 0 }}
        animate={{ rotate: themeMode === "dark" ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {themeMode === "dark" ? (
          <Sun color="#f4d03f" />
        ) : (
          <Moon color="#212529" />
        )}
      </ThemeButton>
    </Nav>
  );
};

export default Navbar;
