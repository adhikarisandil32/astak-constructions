/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
      screens: {
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
}
