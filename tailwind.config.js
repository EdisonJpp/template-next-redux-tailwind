const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        100: "#9FD0FD",
        500: "#003579",
        1000: "#031D4B",
      },
      secondary: {
        100: "#F0F7FD",
        500: "#83A8C9",
      },
      danger: {
        100: "#FFF2F4",
        500: "#EE2A24",
      },
      success: {
        100: "#F6FFED",
        500: "#2ECC71",
      },
      normal: "#5D6267",
    },
  },
  plugins: [],
};
