import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <-- เพิ่มตรงนี้ให้แน่ใจว่า DaisyUI จะไม่ใช้ตาม media
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    darkTheme: "light", // <-- ป้องกันมัน fallback เป็น dark
  },
};

export default config;
