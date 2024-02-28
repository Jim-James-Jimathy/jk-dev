/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d8d9de",
          200: "#b1b3bd",
          300: "#8b8c9d",
          400: "#64667c",
          500: "#3d405b",
          600: "#313349",
          700: "#252637",
          800: "#181a24",
          900: "#0c0d12",
        },
        secondary: {
          100: "#f9e4df",
          200: "#f3cabf",
          300: "#ecaf9f",
          400: "#e6957f",
          500: "#e07a5f",
          600: "#b3624c",
          700: "#864939",
          800: "#5a3126",
          900: "#2d1813",
        },
        tertiary: {
          100: "#e6f0eb",
          200: "#cde0d7",
          300: "#b3d1c2",
          400: "#9ac1ae",
          500: "#81b29a",
          600: "#678e7b",
          700: "#4d6b5c",
          800: "#34473e",
          900: "#1a241f",
        },
        accent: {
          100: "#fcf5e9",
          200: "#faebd2",
          300: "#f7e0bc",
          400: "#f5d6a5",
          500: "#f2cc8f",
          600: "#c2a372",
          700: "#917a56",
          800: "#615239",
          900: "#30291d",
        },
        light: {
          100: "#fefefc",
          200: "#fdfdf9",
          300: "#fcfbf6",
          400: "#fbfaf3",
          500: "#faf9f0",
          600: "#c8c7c0",
          700: "#969590",
          800: "#646460",
          900: "#323230",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1193px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1800px",
        // => @media (min-width: 1800px) { ... }
      },
    },
  },
  plugins: [],
};
