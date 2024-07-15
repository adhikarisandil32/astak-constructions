/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // md: "768px",
      // lg: "1024px",
      xl: "1200px",
    },
    container: {
      padding: "0.5rem",
      center: true,
      screens: {
        sm: "360px",
        // md: "768px",
        // lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
}
