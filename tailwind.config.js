/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear-header":
          "linear-gradient(0deg, rgba(0,0,0,0.16299019607843135) 0%, rgba(0,0,0,0.8688725490196079) 26%, rgba(0,0,0,0.8800770308123249) 57%)",

        "gradient-linear-works":
          "linear-gradient(0deg, rgba(44,62,80,0.9389005602240896) 44%, rgba(44,62,80,0.7932422969187676) 53%, rgba(44,62,80,0.6811974789915967) 60%, rgba(228,224,199,0.5243347338935574) 76%, rgba(255,255,255,0.7960434173669468) 93%)",
      },
      colors: {
        primary: "#2C3E50",
        secondary: "#F39C12",
        textPrimary: "#e4e0c7",
      },
    },
  },
  plugins: [],
};
