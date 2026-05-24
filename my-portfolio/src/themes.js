


export const lightTheme = {
  mode: "light",
  
  // High-energy "Grok" Mesh Gradient
  // This uses multiple layering and background-size to allow for animation
  background: `
  linear-gradient(120deg, rgba(242, 255, 0, 0.85) 0%, rgba(247, 246, 237, 0.75) 40%, rgba(255, 255, 255, 0.65) 100%),
  radial-gradient(circle at 15% 25%, rgb(255, 255, 255) 0%, transparent 45%),
  radial-gradient(circle at 85% 75%, rgba(246, 255, 0, 0.9) 0%, transparent 45%),
  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 30%)
`,
backgroundSize: "250% 250%",
animation: "gradientMove 4s linear infinite",
  // Refined Glassmorphism for Nav
  navBackground: "rgba(255, 255, 255, 0.7)", 
  navBlur: "blur(12px) saturate(180%)", // The "Modern Rich" secret sauce
  
  // Contrast & Typography
  textColor: "#0F172A", // Deep Slate for better readability than pure black
  buttonBg: "#1E293B", // Sophisticated dark charcoal (pairs better with yellow-green)
  buttonTextColor: "#FFFFFF",
  
  // Highlights
  accent: "#2979FF", 
  skillCardBg: "rgba(255, 255, 255, 0.5)", // Semi-transparent for glass effect
  skillTextColor: "#1E293B",
  
  // Interaction
  hoverBgColor: "rgba(255, 255, 255, 0.8)",
  hoverTextColor: "#000000",
  cardShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)", // Soft professional depth
};

export const darkTheme = {
  mode: "dark",
  // Deep, subtle background
  background: "#0e0e1a",
  navBackground: "rgba(14, 14, 26, 0.85)", // Deep navy/charcoal translucent nav
  textColor: "#EBEBEB", // Soft white for main text
  text: "#EBEBEB", // Fallback for general text
  buttonBg: "#00FFFF", // Electric accent color for CTA/buttons
  buttonText: "#0e0e1a", // Deep background color for high-contrast button text
  accent: "#00FFFF", // The electric Teal/Cyan highlight
  skillCardBg: "#1C1B22", // Dark card background for depth
  skillTextColor: "#EBEBEB",
  hoverBgColor: "#2A2A3E", // Subtle dark elevation on hover
  hoverTextColor: "#00FFFF", // Neon text on hover
};

