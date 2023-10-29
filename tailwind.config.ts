/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdb: "960px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "text-body": "#424242",
      "text-active": "#1D378F",
      "text-base": "#FFF",
      "text-link": "#2CC2F8",
      separator: "#EEE",
      "surface-active": "#F8FDFF",
      "surface-disable": "#F9FAFB",
      "surface-primary": "#1D378F",
      "icon-default": "#212121",
      "icon-inactive": "#BDBDBD",
      "text-subtitle": "#757575",
      "text-placeholder": "#9E9E9E",
      "border-default": "#E0E0E0",
      "neutral-colors": {
        400: "#9291A5",
      },
      "blue-rds": {
        50: "#F8FDFF",
        500: "#2CC2F8",
      },
      "dark-blue-rds": {
        50: "#E8EBF4",
        500: "#1D378F",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
