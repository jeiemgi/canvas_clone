import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      spacing: {
        header: "3.75rem",
        headerDesk: "5.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
