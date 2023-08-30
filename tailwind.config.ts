import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // transitionTimingFunction: {
      //   "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      //   "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      // },
      screens: {
        // These are Tailwind defaults, pasted here for reference.
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateColumns: {
        "17": "repeat(17, minmax(0, 1fr))",
      },
      colors: {
        black: "#1A171E",
        "pure-black": "#000000",
        white: "#FFFFFF",
        "light-grey": "#F5F5F5",
        grey: "#E0E0E0",
        pink: "#DAD2DD",
        "royal-blue": "#00067C",
        red: "#E02D3E",
        green: "#0B6F6D",
        "border-color": "rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        header: "3.75rem",
        headerDesk: "5.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
