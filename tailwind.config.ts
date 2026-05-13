import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a2238",
          soft: "#2a3454",
          muted: "#5a6584",
        },
        paper: {
          DEFAULT: "#f6f1e7",
          warm: "#ede5d3",
          dark: "#e3d9c2",
        },
        accent: {
          DEFAULT: "#b8442a",
          soft: "#d96a4e",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
