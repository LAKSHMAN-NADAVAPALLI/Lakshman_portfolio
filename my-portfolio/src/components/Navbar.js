import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Styled Navbar Container
const Nav = styled.nav`
  background: ${(props) => props.theme.navBackground || "#ffffffff"};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  min-height: 50px;
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

// Styled Nav Links
const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem; // Increased gap for better spacing

  a {
    text-decoration: none;
    font-weight: 500; // Less bold is more elegant
    font-size: 1rem; // Slightly smaller is more professional
    padding: 0; // Remove all button padding
    border-radius: 0;
    color: ${(props) => props.theme.textColor}; // Use main text color
    background: none; // Remove background
    border-bottom: 2px solid transparent; // Prepare for elegant underline

    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.accent};
      border-bottom: 2px solid ${(props) => props.theme.accent};
      background: none;
    }
  }
`;

// Theme Button
const ThemeButton = styled(motion.button)`
  /* ✅ CHANGED: Use theme mode to set background */
  background: ${(props) => (props.theme.mode === "light" ? "#FFFFFF" : "#000000")};
  
  /* ✅ ADDED: A border to make the button visible */
  border: 1px solid ${(props) => (props.theme.mode === "light" ? "#1C1B22" : "#EBEBEB")};
  
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001; /* Ensure it stays above other content */

  &:hover {
    transform: scale(1.1);
    /* ✅ CHANGED: Removed the accent color on hover */
    background: ${(props) => (props.theme.mode === "light" ? "#FFFFFF" : "#000000")};
  }
  
  svg {
    width: 26px;
    height: 26px;
  }
`;


// --- 🌟 ICON UPDATES HERE 🌟 ---

// SVG icons for professional look
const HalfSun = () => (
   <svg
    viewBox="0 0 24 24"
    fill="#ff0000ff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Changed fill to white/light-grey and removed stroke */}
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      fill="#FFC107"
      stroke="none"
    />
  </svg>
);

const CrescentMoon = () => (
 <svg
    viewBox="0 0 24 24"
    fill="#ffffffff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Changed fill and stroke to a sun-yellow */}
    <circle cx="12" cy="12" r="5" fill="#fff8f8ff" stroke="#ffffffff" />
    <line x1="12" y1="1" x2="12" y2="4" stroke="#ffffffff" />
    <line x1="12" y1="20" x2="12" y2="23" stroke="#ffffffff" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#ffffffff" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#ffffffff" />
    <line x1="1" y1="12" x2="4" y2="12" stroke="#ffffffff" />
  </svg>
);

// --- END OF ICON UPDATES ---


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
        <Link to="/resume">Resume</Link>
      </NavLinks>

      <AnimatePresence exitBeforeEnter initial={false}>
        <ThemeButton
          key={themeMode}
          onClick={toggleTheme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* This logic shows the icon for the CURRENT theme */}
          {/* Light mode shows Sun, Dark mode shows Moon */}
          {themeMode === "dark" ? <CrescentMoon /> : <HalfSun />}
        </ThemeButton>
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;

/* * NOTE: I have removed the 'lightTheme' and 'darkTheme' exports
 * you had at the bottom of this file. They belong in 'themes.js',
 * not here.
 */