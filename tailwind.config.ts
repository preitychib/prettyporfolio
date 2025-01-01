import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        title: ["DrunkenHour", "cursive"], 
        subtitle: ["Dynapuff", "sans-serif"], 
        body: ["PublicSans", "sans-serif"], 
      },
      fontSize: {
        'clamp-large': 'clamp(1.5rem, 8vw, 6rem)',
      },
    },
  },
  plugins: [],
} satisfies Config;
