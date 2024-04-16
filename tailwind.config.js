/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-text-base)",
        muted: "var(--color-text-muted)",
        invert: "var(--color-text-invert)",
        primary: "var(--color-button-primary)",
        primary_hover: "var(--color-button-primary-hover)",
        button_primary: "var(--color-button-primary)",
        button_primary_hover: "var(--color-button-primary-hover)",
        background: "var(--color-background-body)",
        background_primary: "var(--color-background-primary)",
      },
    },
  },
  plugins: [],
};
