/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCFAEF",
        primaryV2: "#F7BC4B",
        secondary: "#334457",
        Threecolor: "#FFD9AD",
        fourecolor: "#D0E5D9",
        Suscces: "#5dd183",
      },
    },
  },
  plugins: [],
  direction: "rtl", // Add this if using Tailwind RTL plugin
};
