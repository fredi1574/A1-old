module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        button: "0px 10px 10px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
