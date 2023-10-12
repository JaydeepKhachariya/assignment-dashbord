/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040440",
        secondry: "#2d2d69",
        "off-white": "#f5f6f8",
      },
    },
  },
  plugins: [],
};
