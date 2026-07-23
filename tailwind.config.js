/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(8, 15, 35, 0.18)",
      },
      colors: {
        primary: "#050816",
        surface: "#0c1220",
        accent: "#7c3aed",
        accentSoft: "#8b5cf6",
        muted: "#94a3b8",
        bgPrimary: "#f8fafc",
        textPrimary: "#e2e8f0",
        textSecondary: "#61561b",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(6, 11, 28, 0.78) 0%, rgba(6, 11, 28, 0.92) 100%)",
      },
    },
  },
  plugins: [],
};
