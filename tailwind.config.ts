import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Outer-Space": "#2C3639",
        "Cape-Cod": "#3F4E4F",
        Leather: "#A27B5C",
        "Leather-400": "#614a37",
        "Moon-Mist": "#DCD7C9",
      },
    },
  },
  plugins: [],
};
export default config;
