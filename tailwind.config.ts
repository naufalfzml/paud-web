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
        'header' : '#d9ecff',
        'card-belajar' : '#d5e7f9',
        'belajar' : '#0000ff',
        'tentang-paud' : '#f1f4ed',
        'artikel' : '#557875',
        'ready-join' : '#FFE1E1',
        'login' : '#DCF3FF',
        'register' : '#EEFFD9',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'fredoka': ['var(--font-fredoka)', 'cursive'],
      }
    },
  },
  plugins: [],
} satisfies Config;