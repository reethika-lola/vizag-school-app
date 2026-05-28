/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284C7", // Sky Blue 600
        secondary: "#0D9488", // Teal 600
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF", // Pure White
        textPrimary: "#0F172A", // Slate 900
        textSecondary: "#475569", // Slate 600
        accentAmber: "#F59E0B", // Amber 500
        accentGreen: "#22C55E", // Green 500
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        interactive: '12px',
        container: '24px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}