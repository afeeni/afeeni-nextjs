import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'w97': "url('/image/w97.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
  keyframes: {
    typing: {
      "0%": {
        width: "0%",
        visibility: "hidden"
      },
      "100%": {
        width: "100%"
      }
    },
    blink: {
      "50%": {
        borderColor: "transparent"
      },
      "100%": {
        borderColor: "white"
      }
    }
  },
  animation: {
    typing: "typing 2s steps(16) infinite alternate, blink .6s infinite"
  },
},
},
  plugins: [],
} satisfies Config;
