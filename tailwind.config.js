/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,html}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#1ABC9C",
      },
    },
  },
  plugins: [],
};
