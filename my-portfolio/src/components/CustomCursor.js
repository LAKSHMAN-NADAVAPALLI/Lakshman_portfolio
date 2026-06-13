import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Pointer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  
  /* The Secret Sauce: Inverts colors over backgrounds/text automatically */
  mix-blend-mode: difference;
  
  will-change: transform;
  transition: transform 0.1s ease;

  /* Subtle size increase when clicking */
  &:active {
    transform: translate(-50%, -50%) scale(1.5);
  }
`;

const CleanCursor = () => {
  const [position, setPosition] = useState({ x: -20, y: -20 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only turn on if the device actually has a precision mouse (keeps mobile safe)
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasMouse) return;

    setEnabled(true);

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <Pointer 
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` 
      }} 
    />
  );
};

export default CleanCursor;