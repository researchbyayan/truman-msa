import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MSA brand palette
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Sora", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
