export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // สำคัญ: ให้ Tailwind scan ทุกที่ที่คุณใช้ class
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "var(--color-secondary)",
      },
      fontFamily: {
        base: "var(--font-base)",
      },
    },
  },
  plugins: [],
};
