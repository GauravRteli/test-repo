/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
        fadeUp: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.2)" },
          "100%": { boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)" },
        },
      },
      animation: {
        floating: "floating 0.1s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
