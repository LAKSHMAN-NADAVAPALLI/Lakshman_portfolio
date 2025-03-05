import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Navbar Container
const Nav = styled.nav`
  background: ${(props) => props.theme.navBackground};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styled Nav Links
const NavLinks = styled.div`
  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    margin: 0 1rem;
    font-weight: bold;
  }

  a:hover {
    color: ${(props) => props.theme.accent};
  }
`;

// Styled Button for Theme Toggle
const ThemeButton = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.accent};
  }
`;

const Navbar = ({ toggleTheme }) => {
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
      <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
    </Nav>
  );
};

export default Navbar;
