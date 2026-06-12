import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 64px;
  padding: 0.85rem clamp(1rem, 4vw, 3rem);
  background: ${(props) => props.theme.navBackground};
  backdrop-filter: ${(props) => props.theme.navBlur};
  border-bottom: 1px solid ${(props) => props.theme.border};

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Brand = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(0.75rem, 2vw, 1.6rem);
  flex: 1;

  a {
    color: ${(props) => props.theme.mutedText};
    font-size: 0.94rem;
    font-weight: 650;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.accent};
      background: ${(props) => props.theme.accentSoft};
    }
  }

  @media (max-width: 760px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    a {
      padding: 0.4rem 0.6rem;
    }
  }
`;

const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 760px) {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
  }
`;

const Navbar = ({ toggleTheme, themeMode }) => {
  return (
    <Nav>
      <Brand to="/">Lakshman</Brand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <Actions>
        <ThemeButton onClick={toggleTheme} aria-label="Toggle color theme">
          {themeMode === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </ThemeButton>
      </Actions>
    </Nav>
  );
};

export default Navbar;
