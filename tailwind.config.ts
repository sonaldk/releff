import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        nav: {
          background: "hsl(var(--nav-background))",
          foreground: "hsl(var(--nav-foreground))",
          border: "hsl(var(--nav-border))",
          active: "hsl(var(--nav-active))",
          hover: "hsl(var(--nav-hover))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {
        "nav-expand": {
          from: { width: "5rem" },
          to: { width: "16rem" },
        },
        "nav-collapse": {
          from: { width: "16rem" },
          to: { width: "5rem" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "nav-expand": "nav-expand 0.2s ease-out forwards",
        "nav-collapse": "nav-collapse 0.2s ease-out forwards",
        "fade-in": "fade-in 0.2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;