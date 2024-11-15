// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", // Alle relevanten Dateien scannen
  ],
  theme: {
    extend: {
      scrollSnapType: {
        y: "y mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        lora: ["Lora", "serif"], // Falls Lora ebenfalls verwendet wird
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
