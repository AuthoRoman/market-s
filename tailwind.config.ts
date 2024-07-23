import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('@/assets/footer_img/bg.svg')",
        "slider-bg": "url('@/assets/bgSlider.svg')",
      },
      colors: {
        "main-color": "#414141",
      },
    },
  },
  plugins: [],
};
export default config;
