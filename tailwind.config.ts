import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 10s ease-in-out infinite', // Defines the slide animation
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },   // Start from the right
          '50%': { transform: 'translateX(0)' },      // Middle position
          '100%': { transform: 'translateX(-100%)' }, // End at the left
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: '320px', // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
} satisfies Config;

