/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#064e3b",
        "on-primary": "#ffffff",
        "primary-container": "#022c22",
        "on-primary-container": "#a7f3d0",
        "secondary": "#fbbf24",
        "on-secondary": "#1c1917",
        "secondary-container": "#f59e0b",
        "on-secondary-container": "#fffbeb",
        "tertiary": "#064e3b",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#022c22",
        "on-tertiary-container": "#a7f3d0",
        "error": "#b91c1c",
        "on-error": "#ffffff",
        "error-container": "#fef2f2",
        "on-error-container": "#7f1d1d",
        "background": "#f8fafc",
        "on-background": "#0f172a",
        "surface": "#ffffff",
        "on-surface": "#0f172a",
        "surface-variant": "#e2e8f0",
        "on-surface-variant": "#475569",
        "outline": "#94a3b8",
        "outline-variant": "#cbd5e1",
        "inverse-surface": "#0f172a",
        "inverse-on-surface": "#f8fafc",
        "inverse-primary": "#a7f3d0",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8fafc",
        "surface-container": "#f1f5f9",
        "surface-container-high": "#e2e8f0",
        "surface-container-highest": "#cbd5e1",
        "midnight-navy": "#064e3b",
        "burnished-gold": "#fbbf24"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        institutional: "0 4px 24px rgba(6, 78, 59, 0.08)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        elevated: "0 10px 30px -5px rgba(6, 78, 59, 0.12)",
      }
    },
  },
  plugins: [],
};
