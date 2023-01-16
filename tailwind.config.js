/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { max: "1400px" },
        // => @media (max-width: 1440px) { ... }

        lg: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }

        md: { max: "992px" },
        // => @media (max-width: 992px) { ... }

        sm: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        xs: { max: "375px" },
        // => @media (max-width: 375px) { ... }
      },
    },
  },
  plugins: [],
};
