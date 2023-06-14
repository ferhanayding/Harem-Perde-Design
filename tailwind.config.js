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
