import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const CursorGlobalStyle = createGlobalStyle`
  @media (hover: hover) and (pointer: fine) {
    body.signature-cursor,
    body.signature-cursor * {
      cursor: none !important;
    }
  }
`;

const Spotlight = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9996;
  pointer-events: none;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  background: radial-gradient(
    220px circle at ${(props) => props.$x}px ${(props) => props.$y}px,
    ${(props) => props.theme.accentSoft},
    transparent 58%
  );
  transition: opacity 0.25s ease;
`;

const Pointer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: ${(props) => (props.$hovering ? "34px" : "18px")};
  height: ${(props) => (props.$hovering ? "34px" : "18px")};
  pointer-events: none;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transform:
    translate3d(${(props) => props.$x}px, ${(props) => props.$y}px, 0)
    translate(-50%, -50%)
    rotate(45deg);
  border: 1.5px solid ${(props) => props.theme.accent};
  border-radius: ${(props) => (props.$hovering ? "12px" : "5px")};
  background: ${(props) => (props.$hovering ? props.theme.accentSoft : props.theme.surface)};
  box-shadow:
    0 0 0 1px ${(props) => props.theme.surface},
    0 14px 34px rgba(0, 0, 0, 0.18);
  transition:
    width 0.18s ease,
    height 0.18s ease,
    border-radius 0.18s ease,
    background 0.18s ease,
    opacity 0.2s ease,
    transform 0.08s linear;

  &::after {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 3px;
    background: ${(props) => props.theme.accent};
    opacity: ${(props) => (props.$hovering ? 0 : 1)};
    transition: opacity 0.15s ease;
  }
`;

const Label = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: ${(props) => (props.$active && props.$hovering ? 1 : 0)};
  transform: translate3d(${(props) => props.$x + 22}px, ${(props) => props.$y + 20}px, 0);
  padding: 0.38rem 0.55rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.cardShadow};
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 0.15s ease, transform 0.08s linear;
`;

const getCursorLabel = (target) => {
  const element = target?.closest?.("a, button, [role='button'], input, textarea, select, iframe");

  if (!element) {
    return "";
  }

  if (element.tagName === "A") {
    const text = element.textContent?.trim();
    if (/resume|download/i.test(text)) return "Download";
    if (/project|demo|github|credential|linkedin/i.test(text)) return "Open";
    if (/contact|email|mail/i.test(text) || element.href?.startsWith("mailto:")) return "Contact";
    return "Open";
  }

  if (element.tagName === "BUTTON") {
    return "Switch";
  }

  return "Focus";
};

const CustomCursor = () => {
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
    active: false,
    hovering: false,
    enabled: false,
    label: "",
  });

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCursor) {
      return undefined;
    }

    document.body.classList.add("signature-cursor");
    setCursor((current) => ({ ...current, enabled: true }));

    const handleMove = (event) => {
      const label = getCursorLabel(event.target);
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: true,
        hovering: Boolean(label),
        enabled: true,
        label,
      });
    };

    const handleLeave = () => {
      setCursor((current) => ({ ...current, active: false, hovering: false, label: "" }));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      document.body.classList.remove("signature-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!cursor.enabled) {
    return null;
  }

  return (
    <>
      <CursorGlobalStyle />
      <Spotlight $x={cursor.x} $y={cursor.y} $active={cursor.active} />
      <Pointer
        $x={cursor.x}
        $y={cursor.y}
        $active={cursor.active}
        $hovering={cursor.hovering}
      />
      <Label
        $x={cursor.x}
        $y={cursor.y}
        $active={cursor.active}
        $hovering={cursor.hovering}
      >
        {cursor.label}
      </Label>
    </>
  );
};

export default CustomCursor;
