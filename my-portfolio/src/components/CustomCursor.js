import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// This is the small, solid dot
const CursorDot = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.accent};
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none; // Allows you to click "through" the element
  transform: translate(-50%, -50%); // Centers the dot on the cursor
  transition: transform 0.1s ease-out; // Fast, responsive follow
`;

// This is the larger, lagging circle
const CursorFollower = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.accent}80; // '80' adds 50% opacity
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
  transform: translate(-50%, -50%);
  
  // The 'lag' effect is created by a slower transition
  transition: transform 0.2s ease-out, width 0.3s, height 0.3s, border-color 0.3s;

  // This is the 'hover' effect
  ${props => props.$isHovering && `
    width: 50px; // Grow
    height: 50px; // Grow
    background-color: ${props.theme.accent}30; // '30' adds ~20% fill
    border-color: ${props.theme.accent}; // Border becomes solid
  `}
`;

const CustomCursor = () => {
  // Stores the (x, y) position of the mouse
  const [position, setPosition] = useState({ x: -100, y: -100 });
  
  // Stores whether the mouse is hovering over a link/button
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Update the position
      setPosition({ x: e.clientX, y: e.clientY });

      // Check what the mouse is hovering over
      const target = e.target;
      const isPointer = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || // Check for parent links
        target.closest('button') || // Check for parent buttons
        window.getComputedStyle(target).cursor === 'pointer'; // Check any 'pointer' element
      
      setIsHovering(isPointer);
    };

    // Hide the cursor when the mouse leaves the window
    const onMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []); // Empty dependency array means this runs once on mount

  // We use translate3d for better performance (GPU acceleration)
  const dotStyle = { 
    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` 
  };
  
  const followerStyle = { 
    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` 
  };

  return (
    <>
      <CursorDot style={dotStyle} />
      <CursorFollower
        $isHovering={isHovering} // Pass hover state as a transient prop
        style={followerStyle}
      />
    </>
  );
};

export default CustomCursor;