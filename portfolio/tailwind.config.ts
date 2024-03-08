import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,pdf}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,pdf}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,pdf}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  })
  ],
};
export default config;
