const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-primary": "#bf125d",
      },
      maxWidth: {
        300: "300px",
      },
      maxheight: {
        300: "300px",
      },
      minHeight: {
        my_fit: "calc(100vh - 160px)",
      },
    },
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
