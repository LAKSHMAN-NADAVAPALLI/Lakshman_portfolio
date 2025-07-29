// src/themes.js

export const lightTheme = {
  mode: "light",
  background: `
    radial-gradient(circle at 15% 25%, rgba(255, 4, 130, 0.7) 0%, transparent 30%), // Soft pinkish-white
    radial-gradient(circle at 85% 75%, rgba(255, 4, 125, 0.7) 0%, transparent 30%), // Gentle greenish-white
    radial-gradient(circle at 50% 50%, rgba(0, 255, 225, 0.6) 0%, transparent 60%), // Light lavender
    linear-gradient(135deg, #a2f4f3ff 0%, #d94085ff 100%) // Base gradient from a soft blue to a gentle rose
  `,




  navBackground: `linear-gradient(to right, rgba(239, 206, 120, 0.95), rgba(243, 178, 210, 0.95), rgba(189, 219, 243, 0.95))`,
  textColor: "#000000ff",
  buttonBg: " #f4d46eff",
  buttonTextColor: "#ffffff",
  accent: "#feedca ",
  skillCardBg: "#ffffff",
  skillTextColor: "#000000",
  hoverBgColor: "#e0f7fa",
  hoverTextColor: "#0d47a1",
};

export const otherLightTheme = {
  ...lightTheme,
  background: "#f8f9fa",
  skillCardBg: "#ffffff",
  skillTextColor: "#000000",
};

export const darkTheme = {
  mode: "dark",
  background: "#121212",
  navBackground: "#3a3838ff",
  text: "#ffffff",
  
  buttonBg: "#bb86fc",
  buttonText: "#121212",
  accent: "#9a67ea",
  skillCardBg: "#1e1e1e", // Dark background for skill cards
  skillTextColor: "#ffffff", // White text for skill cards
  hoverBgColor: "#2d2d2d", // elegant dark grey – subtle elevation
hoverTextColor: "#80d8ff", // neon light blue – eye-catching on dark

   
};
