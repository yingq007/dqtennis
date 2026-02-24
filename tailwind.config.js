/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Roland Garros terracotta clay — court color, used for all CTAs and action elements
        clay: {
          DEFAULT: "#C85A2E",
          dark:    "#A04422",
          light:   "#F2DDD0",
        },
        // Roland Garros forest green — brand identity, nav, headers, backgrounds
        forest: {
          DEFAULT: "#1A6B3C",
          dark:    "#114D29",
          light:   "#E8F4EE",
        },
      },
    },
  },
  plugins: [],
}
